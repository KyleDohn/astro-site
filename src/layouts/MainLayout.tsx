import { Box, Container } from "@mui/material"
import Navigation from "../components/Navigation"

interface MainLayoutProps {
	children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				width: "100%",
			}}>
			<Navigation />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					width: "100%",
				}}>
				<Container
					maxWidth={false}
					sx={{
						flexGrow: 1,
						display: "flex",
						flexDirection: "column",
						p: { xs: 2, sm: 3 },
						width: "100%",
					}}>
					{children}
				</Container>
			</Box>
		</Box>
	)
}

export default MainLayout
