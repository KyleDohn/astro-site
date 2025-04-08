import {
	Typography,
	Paper,
	Box,
	Card,
	CardContent,
	Divider,
	CircularProgress,
	Button,
	List,
	ListItem,
	ListItemText,
	Stack,
} from "@mui/material"
import { useSupabaseQuery } from "../../hooks/useSupabaseQuery"
import { useSupabaseMutation } from "../../hooks/useSupabaseMutation"
import { useState } from "react"

// Define the type for our data
type Post = {
	id: number
	title: string
	content: string
	created_at: string
}

export const Home = () => {
	// Example query to fetch posts from a "posts" table
	const {
		data: posts,
		isLoading,
		isError,
		error,
	} = useSupabaseQuery({
		table: "posts",
		orderBy: {
			column: "created_at",
			ascending: false,
		},
		limit: 5,
	})

	// Example mutation to add a new post
	const addPostMutation = useSupabaseMutation<Omit<Post, "id" | "created_at">>({
		table: "posts",
		type: "insert",
		invalidateQueryKeys: [["supabase", "posts"]],
	})

	const [newTitle, setNewTitle] = useState("")

	const handleAddPost = () => {
		if (newTitle.trim()) {
			addPostMutation.mutate({
				title: newTitle,
				content: "This is a sample post content.",
			})
			setNewTitle("")
		}
	}

	// Safely cast posts data to the correct type
	const typedPosts = Array.isArray(posts) ? (posts as unknown as Post[]) : []

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
					Welcome to My SPA
				</Typography>
				<Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
					This is a sample home screen for your new single-page application.
				</Typography>
				<Divider sx={{ my: 2 }} />
			</Paper>

			<Box component="section">
				<Stack spacing={3} width="100%">
					<Card variant="outlined">
						<CardContent>
							<Typography variant="h2" component="h2" gutterBottom>
								Getting Started
							</Typography>
							<Typography variant="body1" sx={{ mb: 3 }}>
								Edit{" "}
								<Box
									component="code"
									sx={{ px: 1, py: 0.5, bgcolor: "rgba(0, 0, 0, 0.05)", borderRadius: 1 }}>
									src/pages/home/index.tsx
								</Box>{" "}
								to customize this page.
							</Typography>
						</CardContent>
					</Card>

					{/* New Supabase data section */}
					<Card variant="outlined">
						<CardContent>
							<Typography variant="h2" component="h2" gutterBottom>
								Posts from Supabase
							</Typography>

							{isLoading ? (
								<Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
									<CircularProgress />
								</Box>
							) : isError ? (
								<Typography color="error">Error: {error?.message || "Failed to load posts"}</Typography>
							) : (
								<>
									{typedPosts.length > 0 ? (
										<List>
											{typedPosts.map((post) => (
												<ListItem key={post.id} divider>
													<ListItemText primary={post.title} secondary={post.content} />
												</ListItem>
											))}
										</List>
									) : (
										<Typography>No posts found. Add your first post!</Typography>
									)}

									{/* Form to add a new post */}
									<Box sx={{ mt: 3, display: "flex", gap: 2 }}>
										<input
											type="text"
											value={newTitle}
											onChange={(e) => setNewTitle(e.target.value)}
											placeholder="New post title"
											style={{
												flex: 1,
												padding: "8px",
												borderRadius: "4px",
												border: "1px solid #ccc",
											}}
										/>
										<Button
											variant="contained"
											onClick={handleAddPost}
											disabled={addPostMutation.isPending || !newTitle.trim()}>
											{addPostMutation.isPending ? "Adding..." : "Add Post"}
										</Button>
									</Box>
								</>
							)}
						</CardContent>
					</Card>
				</Stack>
			</Box>
		</Box>
	)
}
