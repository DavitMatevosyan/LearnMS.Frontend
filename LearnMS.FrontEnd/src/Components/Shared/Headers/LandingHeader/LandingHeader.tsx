import { useState } from 'react';
import { NavigateFunction, Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

type LandingHeaderProps = {
    navigate: NavigateFunction;
}

const LandingHeader = (props: LandingHeaderProps): JSX.Element => {
    const { navigate } = props;

    const [showContactDropdown, setShowContactDropdown] = useState<boolean>(false);

    const navigateTo = (link: string) => {
        setShowContactDropdown(false);
        navigate(`/${link}`);
    }

    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={() => navigateTo('')}>LearnMS LOGO</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" onClick={() => navigateTo('TechnologyUsed')}>Technologies Used</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${showContactDropdown ? "show" : ""}`} 
                                onClick={() => setShowContactDropdown(!showContactDropdown)} 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                    Contact me
                            </a>                                
                                <ul className={`dropdown-menu ${showContactDropdown ? "show" : ""}`}>
                                <li><a className="dropdown-item" onClick={() => navigateTo('')}>Mail</a></li>
                                <li><a className="dropdown-item" onClick={() => navigateTo("")}>LinkedIn</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" onClick={() => navigateTo("")}>Github</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="btn btn-outline-primary me-3" onClick={() => navigateTo("register")}>Register</button>
        </nav>

        <Outlet />
    </>
    );
};

export default LandingHeader;
