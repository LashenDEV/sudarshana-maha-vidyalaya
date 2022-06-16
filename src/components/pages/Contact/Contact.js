import React from "react";

function Contact() {
    return (

    <div className="container-">
        <div class="col-lg-12">
            <div class="card text-white">
                <div w-100 style={{ height: "500px" }}>
                    <img src="https://services.businesswire.com/hs-fs/hubfs/contact-header.jpg?width=1600&height=450&name=contact-header.jpg" class="card-img" alt="..." style={{ width: "100%", height: "100%", objectFit: "cover" }}></img>
                </div>
                <div class="card-img-overlay d-flex align-items-center justify-content-center">
                    <p class="display-1" style={{ fontSize: "8rem" }}> 
                        <center>Contact Us</center>
                        <hr></hr>
                        <p style={{ fontSize: "1rem" }}>
                        &nbsp;&nbsp;&nbsp;Want to get in touch? We'd love to hear from you. Here's how you can reach us...
                        </p>
                    </p>
                </div>
            </div>
        </div>
        <div className="container-lg">
            <div className="entry">
                <div className="col-12">
                    <div className="row">
                        <div className="col-5 p-2">
                            <div className="card shadow my-2 bg-light p-2 mb-2 text-dark" style={{ height: "580px" }}>
                                <div class="card-header bg-light">
                                    <h2>Contact information</h2>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <p> 
                                            <h5><strong>Address: </strong></h5>
                                            <i className="fas fa-map-marker-alt"></i>
                                            &nbsp;Sudarshana Maha Vidyalaya, Udabadalawa, Kurunagala, Sri lanka
                                        </p>

                                        <p>                                              
                                            <h5><strong>Telephone(General): </strong></h5>
                                            <i className="fas fa-phone"></i>
                                            &nbsp;(+94) 037-2237150 <br></br>
                                            <i className="fas fa-phone"></i> 
                                            &nbsp;(+94) 075-6175795
                                        </p>

                                        <p>
                                            <h5><strong>E-mail: </strong></h5>
                                            <i class="fas fa-envelope"></i>
                                            &nbsp;info@sudarshanamv.lk <br></br> 
                                            <i class="fas fa-envelope"></i>
                                            &nbsp;principal@sudarshanamv.lk
                                        </p>
                                    </p>
                                </div>
                                <div class="card-footer bg-light">
                                <p>
                                    <h5>Follow Us On:</h5>
                                    <a href="https://www.facebook.com/Ku-Udabadalawa-Sudarshana-Maha-Vidyalaya-545956182166562/" role="button"><i class="fab fa-facebook-f fa-lg"></i></a>&nbsp;&nbsp;&nbsp;
                                    <a href="#" role="button"><i class="fab fa-linkedin-in fa-lg"></i></a>&nbsp;&nbsp;&nbsp;
                                    <a href="#" role="button"><i class="fab fa-twitter fa-lg"></i></a>&nbsp;&nbsp;&nbsp;
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 p-2">   
                            <div className="card shadow my-2 bg-light p-2 mb-2  text-dark" style={{ height: "580px" }}>
                                <div class="card-header bg-light">
                                    <h2>Send us a message</h2> 
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label for="name">Name(required):</label>
                                            <input type="text" className="form-control" id="inputname" placeholder="Enter Your Name"></input><br></br>
                                            <div className="row">
                                                <div className="col">
                                                    <label for="email">E-mail(required):</label>
                                                    <input type="email" className="form-control" id="inputemail" placeholder="name@gmail.com"></input><br></br>
                                                </div>
                                                <div className="col">
                                                    <label for="number">Contact No(required):</label>
                                                    <input type="text" className="form-control" id="inputnumber" placeholder="Enter Your Contact No"></input><br></br>
                                                </div>
                                            </div>    
                                            <label for="subject">Subject:</label>
                                            <input type="text" className="form-control" id="inputsubject" placeholder="Subject of Your Message" ></input><br></br>
                                            <label>Message:
                                                <textarea name="message" className="form-control" cols="110" rows="5" placeholder="Enter Your Message..."></textarea>
                                            </label>
                                            <button type="button" class="btn btn-outline-success">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-">
            <div class="map-responsive px-1">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8142.808052399231!2d80.32992892833444!3d7.52040376412379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3308de8012977%3A0x617485e80af49746!2sSudarshana%20Maha%20Vidyalaya!5e0!3m2!1sen!2slk!4v1654807660397!5m2!1sen!2slk" width="100%" height="450" allowfullscreen="true" loading="lazy" ></iframe>
            </div>
        </div>
    </div>  
    )
}

export default Contact;