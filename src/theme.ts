import { createTheme } from "@mui/material/styles"

// Create a custom theme
const theme = createTheme({
	// Customize theme as needed
	palette: {
		mode: "light",
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
	typography: {
		fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: "2.5rem",
			fontWeight: 600,
		},
		h2: {
			fontSize: "1.75rem",
			fontWeight: 500,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					margin: 0,
					minWidth: 320,
					minHeight: "100vh",
				},
			},
		},
	},
})

export default theme
