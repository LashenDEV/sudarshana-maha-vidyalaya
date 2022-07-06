import React from "react";
import crest from "../images/logo/crest.png";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div style={{backgroundColor: "#0f0230"}}>
            <div className="container-fluid pt-3 pb-2 text-white">
                <div className="col-md-12">
                    <div className="row justify-content-center p-3">
                        <div className="col-md-3 d-flex align-items-center justify-content-center flex-column">
                            <img
                                src={crest}
                                alt="crest"
                                className="mx-3 shadow-lg"
                                width="150px"
                                height="150px"
                            />
                            <div className="p-2">
                                <h1 className="d-flex justify-content-center align-items-center text-center">
                                    Sudarshana <br/>
                                    Maha Vidyalaya
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-3 ms-md-auto d-md-block d-flex align-items-center flex-column">
                            <h3 className="contact-box-row pt-3 pt-md-0 text-center text-md-start gold-heading">
                                Contact us
                            </h3>
                            <div className="p-3 text-md-start text-center">
                                <div className="d-flex align-items-center justify-content-start pb-2">
                                    <i className="fa fa-location-circle fa-2x pe-3"/>
                                    No 25, Morris road, Galle,
                                    Sri Lanka
                                </div>
                                <div className="d-flex align-items-center justify-content-start py-2">
                                    <i className="fa fa-phone fa-2x pe-3"/> +94 114876589
                                </div>
                                <div className="d-flex align-items-center justify-content-md-start py-2">
                                    <i className="fa fa-fax fa-2x pe-3" aria-hidden="true"/>+94
                                    114562084
                                </div>
                                <div className="d-flex align-items-center justify-content-md-start py-2">
                                    <i className="fa fa-envelope fa-2x pe-3"/>sudarshanamv@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ms-md-auto d-md-block d-flex align-items-center flex-column">
                            <h3 className="mb-2 p-0 gold-heading">
                                Quick Links
                            </h3>
                            <div className="p-3 footer-links text-md-start">
                                <div className="d-flex align-items-center">
                                    <Link to='/' className="nav-link link-light "><i
                                        className="fa-solid fa-home-blank fa-lg pe-3"/>Home</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to='/about' className="nav-link link-light"><i
                                        className="fa-solid fa-circle-info fa-lg pe-3"/>About</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to='/news_events' className="nav-link link-light"><i
                                        className="fa-solid fa-newspaper fa-lg pe-3"/>News
                                        and Events</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to='/history' className="nav-link link-light"> <i
                                        className="fa-solid fa-landmark fa-lg pe-3"/>History</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to='/gallery' className="nav-link link-light"> <i
                                        className="fa-solid fa-rectangle-history fa-lg pe-3"/>Gallery</Link>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Link to='/contact' className="nav-link link-light"> <i
                                        className="fa-solid fa-phone-rotary fa-lg pe-3"/>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ms-md-auto d-md-block d-flex align-items-center flex-column">
                            <h3 className="mb-3 gold-heading">
                                Social Links
                            </h3>
                            <div>
                                <ul
                                    className="col-2 col-md-5 list-unstyled"
                                    style={{padding: "0"}}
                                >
                                    <li className="d-flex">
                                        <a href="/" target="_blank" className="mx-2">
                                            <i
                                                className="fa-brands fa-facebook-square fa-2x"
                                                style={{color: "#3b5998"}}
                                            />
                                        </a>
                                        <a href="/" target="_blank" className="mx-2">
                                            <i className="fa-brands fa-youtube text-danger fa-2x "/>
                                        </a>
                                        <a href="/" target="_blank" className="mx-2">
                                            <i
                                                className="fa-brands fa-twitter fa-2x "
                                                style={{color: " #1DA1F2"}}
                                            />
                                        </a>
                                        <a href="/" target="_blank" className="mx-2">
                                            <i
                                                className="fa-brands fa-instagram fa-2x "
                                                style={{color: "#833AB4"}}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <p className="pe-4 fst-italic" style={{textAlign: "justify", letterSpacing: "2px"}}>
                                We take a great pleasure in welcoming our students and parents to
                                S.M.V. It is with great pride that we share this pleasure with our
                                dedicated teachers who have made SMV theirs
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-0">
                    <hr></hr>
                </div>

                <div class="copyright-area d-flex justify-content-center align-items-center">
                    <div class="copyright-content">
                        <div class="row align-items-center justify-content-center p-0">
                            <div class="col-sm-12">
                                <p class="text-copyright">
                                    Copyright © 2022 Sudarshana Maha Vidyalaya
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
