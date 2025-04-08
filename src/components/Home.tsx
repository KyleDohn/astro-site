import { Typography, Paper, Box, Card, CardContent, Grid, Divider } from "@mui/material"

function Home() {
	return (
		<Box component="div">
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
					Welcome to My SPA
				</Typography>
				<Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
					This is a sample home screen for your new single-page application.
				</Typography>
				<Divider sx={{ my: 2 }} />
			</Paper>

			<Box component="main">
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card variant="outlined">
							<CardContent>
								<Typography variant="h2" component="h2" gutterBottom>
									Getting Started
								</Typography>
								<Typography variant="body1">
									Edit{" "}
									<Box
										component="code"
										sx={{ px: 1, py: 0.5, bgcolor: "rgba(0, 0, 0, 0.05)", borderRadius: 1 }}>
										src/components/Home.tsx
									</Box>{" "}
									to customize this page.
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default Home
