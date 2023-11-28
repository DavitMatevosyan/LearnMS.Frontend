import { Link, Route, Routes} from "react-router-dom"
import Landing from "./routes/Landing/Landing";
import SignUp from "./routes/Auth/SignUp/SignUp";
import Auth from "./routes/Auth/Auth";
import MainPage from "./routes/Main/MainPage";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";


function App() {
	return (
		<>
			<Layout>
				<Header>Header</Header>
				<Layout>
					<Sider>Left sidebar</Sider>
					<Content>main Content</Content>
				</Layout>
				<Footer>footer</Footer>
			</Layout>

		<nav>
			<ul>
				<li><Link to="/signup">signup</Link></li>
				<li><Link to="/auth">auth</Link></li>
			</ul>
		</nav>
		<Routes>
			<Route path="/" element={<Landing />}/>
			<Route path="/welcome" element={<SignUp />}>
				<Route path="auth" element={<Auth />}/>
			</Route>
			<Route path="/my" element={<MainPage />} />
			
			<Route path="*" element={<p>not found</p>} />
		</Routes>
		</>
	);
}

export default App
