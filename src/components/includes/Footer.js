import React from "react";

function Footer() {
    return (<div style={{backgroundColor: "#0f0230"}}>
        <div className="container-fluid pt-5 pb-3 text-white">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-2 mx-5">
                    <img
                        src="https://www.kindpng.com/picc/m/7-70674_thailand-school-logo-school-logos-free-download-hd.png"
                        alt="" className="mx-3" width="130" height="129"/>
                        <h4 className="mx-3">Sudarshana</h4>
                        <h4 className="text-start ml-1"> Maha Vidyalaya</h4>                 
                </div>
                <div className="col-md-3 ms-md-auto mx-2">
                    <h4 class="text-uppercase font-weight-bold contact-box-row">Contact us</h4>
                        <p class="info"><i class="fa fa-home"></i>   No 25, Morris road, Galle, Sri Lanka</p>
                        <p class="info"><i class="fa fa-phone"></i>  +94 114876589</p>
                        <p class="info"><i class="fa fa-fax" aria-hidden="true"></i>  +94 114562084</p>
                        <p class="info"><i class="fa fa-envelope"></i>   sudarshanamv@gmail.com</p>
                </div>                          
                <div className="col-md-2 ms-md-auto">
                    <h4 className="text-uppercase font-weight-bold mb-2">Quick Links</h4>
                        <p>News and Events</p>
                        <p>History</p>
                        <p>Gallery</p>
                        <p>Contact Us</p>
                </div>               
                <div className="col-md-3 ms-md-auto mx-5">
                    <h4 className="text-uppercase font-weight-bold mb-2 mt-1">Social Links</h4>
                        <ul classname="col-2 col-md-5 list-unstyled">
                            <li className="d-flex justify-content-between">
                                <i class="fa-brands fa-facebook" aria-hidden="true"></i>
                                <i class="fa-brands fa-youtube" aria-hidden="true"></i>
                                <i class="fa-brands fa-twitter" aria-hidden="true"></i>
                                <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                            </li>
                        </ul>
                        <p>
                        We take a great pleasure in welcoming our students and families to SMV.
                        It is with great pride that we share this pleasure with our dedicated teachers who have made SMV theirs
                        </p>
                </div>   
            </div>
            <hr></hr>
            <div class="copyright-area d-flex justify-content-center align-items-center">
                <div class="copyright-content">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-sm-12 mt-2">
                            <p class="text-copyright">Copyright © 2020 Powered By Sudarshana Maha Vidyalaya</p>
                        </div>  
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Footer;