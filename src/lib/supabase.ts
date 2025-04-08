import { createClient } from "@supabase/supabase-js"

// These should be in your environment variables in a production app
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ""
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ""

if (!supabaseUrl || !supabaseAnonKey) {
	console.warn("Supabase URL or Anonymous Key not provided. Please check your environment variables.")
}

// Create a single supabase client for the entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
