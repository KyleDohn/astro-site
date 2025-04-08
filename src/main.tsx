import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { RouterProvider } from "@tanstack/react-router"
// Import TanStack Router DevTools correctly
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import theme from "./theme"
import { router } from "./routes/router"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RouterProvider router={router} />
			{process.env.NODE_ENV === "development" && <TanStackRouterDevtools router={router} />}
		</ThemeProvider>
	</React.StrictMode>,
)
