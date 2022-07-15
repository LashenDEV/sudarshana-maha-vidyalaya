import React from "react";
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import "./Navbar.css";
import Crest from '../images/logo/crest.png';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ms-5 my-3">
                <Link to='/' className="navbar-brand d-flex align-items-center">
                    <img
                        src={Crest}
                        alt="" width="60" height="60"/>
                    <h3 className="ps-2 d-none d-md-block m-0">Sudarshana Maha Vidyalaya</h3></Link>
                <div className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/sudarshana-maha-vidyalaya/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/sudarshana-maha-vidyalaya/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/sudarshana-maha-vidyalaya/news_events'>News &
                                Events</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/sudarshana-maha-vidyalaya/history'>History</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/sudarshana-maha-vidyalaya/gallery'>Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/sudarshana-maha-vidyalaya/contact'>Contact Us</NavLink>
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