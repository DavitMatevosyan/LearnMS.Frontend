import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./HeaderStyles.module.scss";
import { SettingOutlined, MailOutlined } from "@ant-design/icons";
import { NavigateFunction } from "react-router";
import { Outlet } from "react-router-dom";

interface LandingHeaderProps {
    navigate: NavigateFunction;
}

const LandingHeader = (props: LandingHeaderProps): JSX.Element => {
    const { navigate } = props;

	const landingMenuItems: MenuProps["items"] = [
		{
			key: "main",
			label: "ICON HERE",
			onClick: () => { navigate("/"); }
		},
		{
			label: "Technologies Used",
			key: "techused",
			icon: <SettingOutlined />,
			onClick: () => { navigate("/TechnologyUsed"); }
		},
		{
			label: "Contact Me",
			key: "app",
			icon: <MailOutlined />,
			children: [
				{
					type: "group",
					label: "Methods",
					children: [
						{
							label: "Mail",
							key: "contact:mail"
						},
						{
							label: "LinkedIn",
							key: "contact:linkedin"
						},
						{
							label: "Github",
							key: "contact:github"
						}
					]
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
		}
	];

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

			<Outlet />
		</>
    );
};

export default LandingHeader;
