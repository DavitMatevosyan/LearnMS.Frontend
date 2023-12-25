import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./routes/Landing/Landing";
import Auth from "./routes/Auth/Auth";
import MainPage from "./routes/Main/MainPage";

import TechUsed from "./Components/Landing/TechUsed/TechUsed";
import LandingHeader from "./Components/Shared/Header/LandingHeader";

function App(): JSX.Element {
	const navigate = useNavigate();

	return (
	<>
		<Routes>
			<Route path="/" element={<LandingHeader navigate={navigate}/>}>
				<Route index element={<Landing />} />
				<Route path="/TechnologyUsed" element={<TechUsed />} />
				<Route path="auth" element={<Auth />}/>
			</Route>
			<Route path="/my" element={<MainPage />} />

			<Route path="*" element={<p>not found</p>} />
		</Routes>
	</>
	);
}

export default App;
