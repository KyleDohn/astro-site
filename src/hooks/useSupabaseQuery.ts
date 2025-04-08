import { useQuery } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"

// Type for query options
type UseSupabaseQueryOptions = {
	table: string
	columns?: string
	filter?: {
		column: string
		operator: string
		value: unknown
	}[]
	orderBy?: {
		column: string
		ascending?: boolean
	}
	limit?: number
	enabled?: boolean
}

/**
 * A custom hook for fetching data from Supabase using TanStack Query
 */
export const useSupabaseQuery = ({
	table,
	columns = "*",
	filter = [],
	orderBy,
	limit,
	enabled = true,
}: UseSupabaseQueryOptions) => {
	return useQuery({
		queryKey: ["supabase", table, columns, filter, orderBy, limit],
		queryFn: async () => {
			let query = supabase.from(table).select(columns)

			// Apply filters
			filter.forEach(({ column, operator, value }) => {
				query = query.filter(column, operator, value)
			})

			// Apply ordering
			if (orderBy) {
				query = query.order(orderBy.column, {
					ascending: orderBy.ascending ?? true,
				})
			}

			// Apply limit
			if (limit) {
				query = query.limit(limit)
			}

			const { data, error } = await query

			if (error) {
				throw new Error(`Error fetching from ${table}: ${error.message}`)
			}

			return data
		},
		enabled,
	})
}
