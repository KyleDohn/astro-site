import { AppBar, Toolbar, Button, Box } from "@mui/material"
import { Link } from "@tanstack/react-router"
import { Auth } from "../Auth"
import { Box as MuiBox } from "@mui/material"

export const Navigation = () => {
	return (
		<AppBar position="static" color="primary" sx={{ mb: 4 }}>
			<Toolbar>
				<Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
					<Button component={Link} to="/" color="inherit" sx={{ textTransform: "none" }}>
						Home
					</Button>
					<Button component={Link} to="/about" color="inherit" sx={{ textTransform: "none" }}>
						About
					</Button>
				</Box>
				<MuiBox>
					<Auth />
				</MuiBox>
			</Toolbar>
		</AppBar>
	)
}
