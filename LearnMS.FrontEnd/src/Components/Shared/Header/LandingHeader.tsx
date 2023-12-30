import { Menu } from "antd";
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

    return (
		<>
			<Header className={styles.Header}>
				<Menu className={styles.MenuPages}
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["main"]}
					>
						<Menu.Item key="mainPage" onClick={() => navigate("/")}>
							ICON HERE
						</Menu.Item>
						<Menu.Item key="techUsed" icon={<SettingOutlined />} onClick={() => navigate("/TechnologyUsed")}>
							Technologies Used
						</Menu.Item>
							<Menu.SubMenu key="contacts" icon={<MailOutlined />} title="Contact Me">
								<Menu.ItemGroup title="Methods">
									<Menu.Item key="contact:mail" onClick={() => navigate("/")}>
										Mail
									</Menu.Item>
									<Menu.Item key="contact:linkedIn" onClick={() => navigate("/")}>
										LinkedIn
									</Menu.Item>
									<Menu.Item key="contact:github" onClick={() => navigate("/")}>
										Github
									</Menu.Item>
								</Menu.ItemGroup>
							</Menu.SubMenu>
							{/* future enhancement required, put register on right end */}
						<Menu.Item key="register" style={{}} onClick={() => navigate("/register")}>
							Register
						</Menu.Item>
					</Menu>
			</Header>
			<Outlet />
		</>
    );
};

export default LandingHeader;
