import LoginForm from "../../Components/Auth/Login/LoginForm";
import AboutMe from "./AboutMe";

const Landing = () => {
    return(
        <div className="container text-center">
            <div className="row justify-content-md-center" style={{marginTop: "120px"}}>
                <div className="col col-lg-5 border border-2 rounded border-info " style={{minHeight: "200px"}}>
                    <LoginForm />
                </div>
                <span className="col-lg-1"/>
                <div className="col col-lg-5 border border-2 rounded border-info">
                    <AboutMe />
                </div>
            </div>
        </div>
    )    
}

export default Landing;
