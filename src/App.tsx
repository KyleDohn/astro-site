import { Outlet } from "@tanstack/react-router"
import MainLayout from "./layouts/MainLayout"
import "./App.css"

function App() {
	return (
		<MainLayout>
			<Outlet />
		</MainLayout>
	)
}

export default App
