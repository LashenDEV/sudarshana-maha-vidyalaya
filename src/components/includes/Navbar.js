import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ms-5 my-3">
                <Link to='/' className="navbar-brand d-flex align-items-center">
                    <img
                        src="https://www.kindpng.com/picc/m/7-70674_thailand-school-logo-school-logos-free-download-hd.png"
                        alt="" width="60" height="54"/>
                    <h3 className="ps-2 d-none d-md-block m-0">Sudarshana Maha Vidyalaya</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link active">News And Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/history' className="nav-link active">History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/gallery' className="nav-link active">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;