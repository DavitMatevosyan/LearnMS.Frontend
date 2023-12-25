import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import LoginForm from "../../Components/Auth/Login/Login";
import AboutMe from "../../Components/Landing/AboutMe";

import styles from "./Landing.module.scss";

const Landing = (): JSX.Element => (
        <>
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
     */}
    </>
    );

export default Landing;
