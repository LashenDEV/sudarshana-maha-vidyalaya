import React from "react";

function Contact() {
  return (
    <div>
      <div class="col-md-12 p-0">
        <div class="card text-white">
          <div w-100 style={{ height: "500px" }}>
            <img
              src="https://taufidius.files.wordpress.com/2010/06/439709573_f9c8ad1c2c_o-copy.jpg"
              class="card-img"
              alt="..."
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></img>
          </div>
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <p class="display-1 animate__animated animate__fadeInLeft" style={{ fontSize: "8rem" }}>
              <center>Contact Us</center>
              <hr></hr>
              <p style={{ fontSize: "1rem" }}>
                &nbsp;&nbsp;&nbsp;Want to get in touch? We'd love to hear from
                you. Here's how you can reach us...
              </p>
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#c49647" }}>
        <div className="container">
          <div className="col-md-12 p-0">
            <div className="row text-white">
              <div className="col-md-3 p-5 paragraph">
                <div class="d-flex align-items-center justify-content-center">
                  <p>
                    <i
                      class="fa-solid fa-location-dot fa-6x"
                      style={{ color: "#080c34" }}
                    ></i>
                  </p>
                </div>
                <div class="text-center">
                  <h2>Address</h2>
                  <p>
                    Sudarshana Maha Vidyalaya, Udabadalawa, Kurunagala,<br></br>{" "}
                    Sri lanka
                  </p>
                </div>
              </div>
              <div className="col-md-3 p-5 paragraph">
                <div class=" d-flex align-items-center justify-content-center">
                  <p>
                    <i
                      class="fa-solid fa-circle-phone fa-6x"
                      style={{ color: "#080c34" }}
                    ></i>
                  </p>
                </div>
                <div class="text-center">
                  <h2>Telephone</h2>
                  <p>
                    <a href="tel://1234567920">
                      <font color="white">(+94) 037-2237150</font>
                    </a>
                  </p>
                  <p>
                    <a href="tel://1234567920">
                      <font color="white">(+94) 075-6175795</font>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 p-5 paragraph">
                <div class="d-flex align-items-center justify-content-center">
                  <p>
                    <i
                      class="fa-solid fa-paper-plane fa-6x"
                      style={{ color: "#080c34" }}
                    ></i>
                  </p>
                </div>
                <div class="text-center">
                  <h2>E-mail</h2>
                  <p>
                    <a href="mailto:info@yoursite.com">
                      <font color="white">info@sudarshanamv.lk</font>
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@yoursite.com">
                      <font color="white">principal@sudarshanamv.lk</font>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-3 p-5 paragraph">
                <div class="d-flex align-items-center justify-content-center">
                  <p>
                    <i
                      class="fa-solid fa-globe fa-6x"
                      style={{ color: "#080c34" }}
                    ></i>
                  </p>
                </div>
                <div class="text-center">
                  <h2>Website</h2>
                  <p>
                    <a href="#">
                      <font color="white">Sudarshana.sch.lk</font>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 p-0">
        <div className="row w-100 vh-50 m-0 ">
          <div className="col-md-6 p-0">
            <div className="map-responsive">
              <iframe
                width="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8142.808052399231!2d80.32992892833444!3d7.52040376412379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3308de8012977%3A0x617485e80af49746!2sSudarshana%20Maha%20Vidyalaya!5e0!3m2!1sen!2slk!4v1654807660397!5m2!1sen!2slk"
                allowfullscreen="true"
                loading="lazy"
                className="vh-100"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 p-0 vh-100 d-flex align-items-center">
            <div className="card text-dark p-5 border-0 bg-color-white">
              <div>
                <h2>We want to hear from you.</h2>
              </div>
              <div className="card-body ">
                <form class="row g-3 p-2">
                  <div class="col-8">
                    <label for="inputName" class="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div class="col-md-6">
                    <label for="inputEmaile" class="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="abc@gmail.com"
                    ></input>
                  </div>
                  <div class="col-md-6">
                    <label for="inputPhone" class="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="+94*********"
                    ></input>
                  </div>
                  <div class="col-8">
                    <label for="inputName" class="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Subject your message"
                    ></input>
                  </div>

                  <div class="col-12">
                    <label for="inputMessage" class="form-label">
                      Your Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder=" What's in your mind? "
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn btn-danger py-3 px-5"
                      value="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
