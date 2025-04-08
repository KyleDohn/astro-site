import { createRootRouteWithContext, createRoute, createRouter } from "@tanstack/react-router"
import App from "../App"
import HomePage from "../pages/Home"
import AboutPage from "../pages/About"

// Define the root route
const rootRoute = createRootRouteWithContext<{}>()({
	component: App,
})

// Define the index/home route
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomePage,
})

// Define the about route
const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: AboutPage,
})

// Create the route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// Create the router instance
export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
})

// Register the router for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
