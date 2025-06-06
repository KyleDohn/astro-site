import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
			"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
		},
	},
})
