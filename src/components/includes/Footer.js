import React from "react";
import crest from "../images/logo/crest.png";

function Footer() {
  return (
    <div style={{ backgroundColor: "#0f0230" }}>
      <div className="container-fluid pt-3 pb-2 text-white">
        <div className="row align-items-center justify-content-center p-3">
          <div className="col-md-2 mx-5 p-3">
            <div style={{ width: "225px", height: "175px" }}>
              <div classname="d-flex align-items-center">
                <img
                  src={crest}
                  alt="crest"
                  className="mx-3"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div className="p-2">
              <h4 className="d-flex justify-content-center align-items-center">
                Sudarshana
              </h4>
              <h4 className="d-flex justify-content-center align-items-center">
                Maha Vidyalaya
              </h4>
            </div>
          </div>
          <div className="col-md-3 ms-md-auto mx-2 ">
            <h4 class="text-uppercase font-weight-bold contact-box-row p-0">
              Contact us
            </h4>
            <div className="p-3">
              <p class="info">
                <i class="fa fa-home fa-lg px-2"></i> No 25, Morris road, Galle,
                Sri Lanka
              </p>
              <p class="info">
                <i class="fa fa-phone fa-lg px-2"></i> +94 114876589
              </p>
              <p class="info">
                <i class="fa fa-fax fa-lg px-2" aria-hidden="true"></i> +94
                114562084
              </p>
              <p class="info">
                <i class="fa fa-envelope fa-lg px-2"></i> sudarshanamv@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-2 ms-md-auto">
            <h4 className="text-uppercase font-weight-bold mb-2 p-0">
              Quick Links
            </h4>
            <div className="p-3 footer-links">
              <p>
                <i class="fa-solid fa-newspaper fa-lg px-2"></i>{" "}
                <a className="link-light text-decoration-none" href="http">
                  News and Events
                </a>
              </p>
              <p>
                <i class="fa-solid fa-landmark fa-lg px-2"></i>{" "}
                <a className="link-light text-decoration-none" href="http">
                  {" "}
                  History
                </a>
              </p>
              <p>
                <i class="fa-solid fa-rectangle-history fa-lg px-2"></i>{" "}
                <a className="link-light text-decoration-none" href="http">
                  Gallery
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-rotary fa-lg px-2"></i>{" "}
                <a className="link-light text-decoration-none" href="http">
                  {" "}
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 ms-md-auto mx-5 p-5">
            <h4 className="text-uppercase font-weight-bold mb-3 mt-1">
              Social Links
            </h4>
            <div>
              <ul
                classname="col-2 col-md-5 list-unstyled"
                style={{ padding: "0" }}
              >
                <li className="d-flex">
                  <a href="/" target="_blank" className="mx-2">
                    <i
                      class="fa-brands fa-facebook-square fa-2x"
                      style={{ color: "#3b5998" }}
                    ></i>
                  </a>
                  <a href="/" target="_blank" className="mx-2">
                    <i class="fa-brands fa-youtube text-danger fa-2x "></i>
                  </a>
                  <a href="/" target="_blank" className="mx-2">
                    <i
                      class="fa-brands fa-twitter fa-2x "
                      style={{ color: " #1DA1F2" }}
                    ></i>
                  </a>
                  <a href="/" target="_blank" className="mx-2">
                    <i
                      class="fa-brands fa-instagram fa-2x "
                      style={{ color: "#833AB4" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-align-justify">
              We take a great pleasure in welcoming our students and families to
              SMV. It is with great pride that we share this pleasure with our
              dedicated teachers who have made SMV theirs
            </p>
          </div>
        </div>
        <div className="p-0">
          <hr></hr>
        </div>

        <div class="copyright-area d-flex justify-content-center align-items-center ">
          <div class="copyright-content">
            <div class="row align-items-center justify-content-center p-0">
              <div class="col-sm-12 mt-2">
                <p class="text-copyright">
                  Copyright © 2020 Powered By Sudarshana Maha Vidyalaya
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
