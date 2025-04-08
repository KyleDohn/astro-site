import { useMutation, useQueryClient } from "@tanstack/react-query"
import { supabase } from "../lib/supabase"

type MutationOptions = {
	table: string
	type: "insert" | "update" | "delete" | "upsert"
	// Invalidate queries with these keys after mutation
	invalidateQueryKeys?: unknown[][]
}

/**
 * A custom hook for mutating data in Supabase
 */
export const useSupabaseMutation = <T extends Record<string, any>>({
	table,
	type,
	invalidateQueryKeys = [],
}: MutationOptions) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (data: T | { id: string | number }) => {
			let query

			switch (type) {
				case "insert":
					query = supabase.from(table).insert(data)
					break
				case "update":
					if ("id" in data) {
						const { id, ...rest } = data
						query = supabase.from(table).update(rest).eq("id", id)
					} else {
						throw new Error("ID is required for update operations")
					}
					break
				case "upsert":
					query = supabase.from(table).upsert(data)
					break
				case "delete":
					if ("id" in data) {
						query = supabase.from(table).delete().eq("id", data.id)
					} else {
						throw new Error("ID is required for delete operations")
					}
					break
				default:
					throw new Error(`Unsupported mutation type: ${type}`)
			}

			const { data: result, error } = await query

			if (error) {
				throw new Error(`Error during ${type} operation: ${error.message}`)
			}

			return result
		},
		onSuccess: () => {
			// Invalidate related queries
			invalidateQueryKeys.forEach((key) => {
				queryClient.invalidateQueries({ queryKey: key })
			})
		},
	})
}
