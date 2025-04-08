import { Box, Container } from "@mui/material"
import Home from "./components/Home"
import "./App.css"

function App() {
	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4 }}>
				<Home />
			</Box>
		</Container>
	)
}

export default App
