import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Landing from "./routes/Landing/Landing";
import SignUp from "./routes/Auth/SignUp/SignUp";
import Login from "./routes/Auth/Login/Login";
import Auth from "./routes/Auth/Auth";
import Home from "./routes/Landing/Home";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Landing />}>
			<Route index element={<Home />} />
			<Route path="Auth" element={<Auth />} >
				<Route path="Signup" element={<SignUp />} />
				<Route path="Login" element={<Login />} />
			</Route>
		</Route>
	)
)

function App({routes}) {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App
