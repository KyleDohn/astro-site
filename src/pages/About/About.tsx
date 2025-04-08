import { Typography, Paper, Box } from "@mui/material"

export const About = () => {
	return (
		<Box component="div" sx={{ width: "100%" }}>
			<Paper
				elevation={0}
				sx={{
					p: 4,
					mb: 4,
					borderRadius: 2,
					backgroundColor: (theme) =>
						theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)",
				}}>
				<Typography variant="h1" component="h1" gutterBottom align="center">
					About Us
				</Typography>
				<Typography variant="body1" paragraph>
					This is the about page for our application. This page demonstrates the TanStack Router
					functionality.
				</Typography>
				<Typography variant="body1">
					TanStack Router provides a type-safe, modern routing solution for React applications.
				</Typography>
			</Paper>
		</Box>
	)
}
