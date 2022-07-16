import React from "react";
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import "./Navbar.css";
import Crest from '../images/logo/crest.png';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgba(233,199,127,0.87)"}}>
            <div className="container-fluid my-3">
                <Link to='/' className="navbar-brand d-flex align-items-center ps-md-4">
                    <img
                        src={Crest}
                        alt="" width="60" height="60" className="border-2"/>
                    <h3 className="ps-2 d-none d-md-block m-0">Sudarshana Maha Vidyalaya</h3>
                    <h5 className="ps-2 d-md-none d-block m-0">Sudarshana M.V</h5>
                </Link>
                <div className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                     aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/news_events'>News &
                                Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/history'>History</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/gallery'>Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact'>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


function NavLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <Link to={to} className={isActive ? 'nav-link active' : 'nav-link '} {...props}>{children}</Link>
    )
}

export default Navbar;