import { Form, Link, Route, Routes, useNavigate} from "react-router-dom"
import Landing from "./routes/Landing/Landing";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import SignUp from "./routes/Auth/SignUp/SignUp";
import Auth from "./routes/Auth/Auth";
import MainPage from "./routes/Main/MainPage";
import { Button, Flex, Input, Layout, Menu, MenuProps, Space, Checkbox } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import LoginForm from "./Components/Auth/Login/Login";
import AboutMe from "./Components/Landing/AboutMe";

import styles from "./App.module.scss";
import TechUsed from "./Components/Landing/TechUsed/TechUsed";
import LandingHeader from "./Components/Shared/Header/LandingHeader";



function App() {
	const navigate = useNavigate();


  
	return (
	<>
		<Routes>
			<Route path="/" element={<LandingHeader navigate={navigate}/>}>
				<Route index element={<Landing />}/>
				<Route path="/TechnologyUsed" element={<TechUsed />}/>
				<Route path="auth" element={<Auth />}/>
			</Route>
			<Route path="/my" element={<MainPage />} />
			
			<Route path="*" element={<p>not found</p>} />
		</Routes>
	</>
	);
}

export default App
