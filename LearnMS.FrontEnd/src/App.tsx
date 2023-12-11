import { Form, Link, Route, Routes} from "react-router-dom"
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

const landingMenuItems: MenuProps["items"] = [
	{
		key: "main",
		label: "ICON HERE",
	},
	{
		label: 'Technologies Used',
		key: 'techused',
		icon: <SettingOutlined />,
	},
	{
		label: 'Contact Me',
		key: 'app',
		icon: <MailOutlined />,
		children: [
			{
				type: 'group',
				label: 'Methods',
				children: [
					{
						label: 'Mail',
						key: 'contact:mail',
					},
					{
						label: 'LinkedIn',
						key: 'contact:linkedin',
					},
					{
						label: 'Github',
						key: 'contact:github',
					}
				],
			}
	  ]
	}
  ];

const loginItems: MenuProps["items"] = [
	{
		key: "login",
		label: "Login",
		style: {
			borderColor: "rgba(255, 255, 255, 0.65)",
			borderWidth: "0px 0px 0px 1px",
			borderStyle: "solid"
		}
	},
	{
		key: "register",
		label: "Register",
		style: {
			borderColor: "rgba(255, 255, 255, 0.65)",
			borderWidth: "0px 1px 0px 0px",
			borderStyle: "solid"
		}
	},
];


function App() {

  
	return (
		<>
			<Header className={styles.Header}>
				<Menu className={styles.MenuPages}
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={["main"]}
				items={landingMenuItems} />
				<Menu className={styles.LoginRegister}
				theme="dark"
				mode="horizontal"
				items={loginItems} />
			</Header>
		
			<Content className={styles.MainPage}>
				<Flex>
					<LoginForm />
					<AboutMe />
				</Flex>
			</Content>



			{/* <Layout className="layout">
				<Header style={{display:"flex", alignItems:"center"}}>
				<div className="demo-logo" >LOGO </div>
					<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={new Array(5).fill(null).map((_, index) => {
						const key = index + 1;
						return {
						key,
						label: `nav ${key}`,
						};
					})}
					/>
				</Header>
			</Layout>
				<Layout>
					<Sider>Left sidebar</Sider>
					<Content>main Content</Content>
				</Layout>
				<Footer>footer</Footer>

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
		</Routes> */}
		</>
	);
}

export default App
