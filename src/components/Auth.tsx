import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { Button, Box, Typography, TextField, Stack, Popover } from "@mui/material"

export function Auth() {
	const [user, setUser] = useState<any>(null)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setUser(data.session?.user ?? null)
		})

		const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
			setUser(session?.user ?? null)
			// Close popover on auth state change
			handleClose()
		})

		return () => {
			listener.subscription.unsubscribe()
		}
	}, [])

	const handleSignIn = async () => {
		setLoading(true)
		setError(null)
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})
		if (error) {
			setError(error.message)
		} else {
			// Clear form and close popover on successful sign-in
			setEmail("")
			setPassword("")
			handleClose()
		}
		setLoading(false)
	}

	const handleSignOut = async () => {
		await supabase.auth.signOut()
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
		setError(null) // Clear errors when closing
	}

	const open = Boolean(anchorEl)
	const id = open ? "login-popover" : undefined

	if (user) {
		return (
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<Typography variant="body2" sx={{ color: "inherit" }}>
					{user.email}
				</Typography>
				<Button color="inherit" variant="outlined" size="small" onClick={handleSignOut}>
					Sign Out
				</Button>
			</Box>
		)
	}

	return (
		<Box>
			<Button aria-describedby={id} variant="contained" color="secondary" onClick={handleClick}>
				Login
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}>
				<Box sx={{ p: 2, minWidth: 250 }}>
					<Stack spacing={2}>
						<Typography variant="h6">Sign In</Typography>
						<TextField
							label="Email"
							value={email}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
							size="small"
							fullWidth
						/>
						<TextField
							label="Password"
							type="password"
							value={password}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
							size="small"
							fullWidth
						/>
						{error && (
							<Typography color="error" variant="caption">
								{error}
							</Typography>
						)}
						<Button variant="contained" onClick={handleSignIn} disabled={loading} fullWidth>
							{loading ? "Signing in..." : "Sign In"}
						</Button>
					</Stack>
				</Box>
			</Popover>
		</Box>
	)
}
