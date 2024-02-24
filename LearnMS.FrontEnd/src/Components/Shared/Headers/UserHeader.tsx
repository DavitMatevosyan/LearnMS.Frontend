import { Outlet } from "react-router-dom";
import { BaseHeaderProps } from "./useBaseHeader";

const UserHeader = (props: BaseHeaderProps) => {
    const { navigate } = props

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => navigate('/my')}>LearnMS LOGO</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => navigate('TechnologyUsed')}>Technologies Used</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="btn btn-outline-primary me-3" onClick={() => navigate('register')}>Register</button>
            </nav>
            <Outlet />
        </>
    ); 
}

export { UserHeader };