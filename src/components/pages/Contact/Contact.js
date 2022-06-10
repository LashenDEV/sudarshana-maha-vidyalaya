import React from "react";

function Contact() {
    return (
        <div className="container">
            <div id="content">
                <div className="card shadow">
                    <div className="card-body">
                        <h3>Contact Page</h3>
                    </div>
                </div> 

                <p></p>

                <div class="entry">
                    <div className="card shadow">
                        <div className="card-body">
                            <table border="0" cellSpacing="8" cellPadding="8" width="50%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table border="0" cellSpacing="8" cellPadding="10" width="750px">
                                                <tbody>
                                                    <tr>
                                                        <td width="250" valign="top">
                                                            <strong>Address </strong>
                                                        </td>
                                                        <td>
                                                            <strong>:</strong>
                                                        </td>
                                                        <td>Sudarshana Maha Vidyalaya, Udabadalawa, Kurunagala, Sri lanka</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="250" valign="top">
                                                            <strong>Telephone(General) </strong>
                                                        </td>
                                                        <td>
                                                            <strong>:</strong>
                                                        </td>
                                                        <td>037-2237150 / 075 617 5795</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="250" valign="top">
                                                            <strong>E-mail </strong>
                                                        </td>
                                                        <td>
                                                            <strong>:</strong>
                                                        </td>
                                                        <td>info@sudarshanamv.lk, principal@sudarshanamv.lk</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <p></p>
                                    <hr></hr>
                                    <tr>
                                        <td align="left">
                                            <h3>Drop us a line</h3>
                                            <p></p>
                                            <form>
                                                <label for="name">Your Name(required):</label><br></br>
                                                <input type="text" id="name" size={40}></input><br></br>
                                                <label for="email">Your E-mail(required):</label><br></br>
                                                <input type="text" id="email" size={40}></input><br></br>
                                                <label for="subject">Subject:</label><br></br>
                                                <input type="text" id="subject" size={40}></input><br></br>
                                                <label>Your message:<br></br>
                                                    <textarea name="message" cols="43" rows="4"></textarea>
                                                </label><br></br>
                                                <input type="submit" value="Send"></input>
                                            </form>
                                        </td>
                                        <td align="left">
                                            <div class="map-responsive">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8142.808052399231!2d80.32992892833444!3d7.52040376412379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3308de8012977%3A0x617485e80af49746!2sSudarshana%20Maha%20Vidyalaya!5e0!3m2!1sen!2slk!4v1654807660397!5m2!1sen!2slk" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </td>
                                    </tr>
                                    <p></p>
                                    <hr></hr>
                                </tbody>
                            </table>
                            <h4>Social media</h4>
                            <table border="0" cellSpacing="8" cellPadding="10" width="50px">
                                <tr>
                                    <td align="left">
                                        <a href="https://www.facebook.com/Ku-Udabadalawa-Sudarshana-Maha-Vidyalaya-545956182166562/" role="button"><i class="fab fa-facebook-f fa-2x"></i></a>
                                    </td>
                                    <td>
                                        <a href="#" role="button"><i class="fab fa-linkedin-in fa-2x"></i></a>
                                    </td>
                                    <td>
                                        <a href="#" role="button"><i class="fab fa-twitter fa-2x"></i></a>
                                    </td>

                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default Contact;