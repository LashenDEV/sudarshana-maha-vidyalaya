import React from "react";
import "./Features.css";

function Features() {
    return (<div style={{backgroundColor: "#fafafa"}}>
        <div className="col-12 container">
            <div className="d-flex py-5 align-items-center feature-container justify-content-between">
                <div className="col-6 d-flex flex-column align-items-center justify-content-center feature_description">
                    <div className="text-center w-75">
                        <h5>Academics</h5>
                        <p>
                            Education at the College transcends book and quill, seeking to mould a holistic personage
                            out of
                            every student. Employing the finest teachers in every field and equipped to support all
                            learning
                            needs, the Royal College strives to produce individuals who make meaningful contributions to
                            society.
                        </p>
                    </div>
                </div>
                <div className="col-6 d-flex feature_image_container">
                    <img className="image1"
                         src="https://royalcollege.lk/wp-content/uploads/2021/07/academics-Homepage-e1625820938479.jpg"/>
                    <img className="image2"
                         src="https://royalcollege.lk/wp-content/uploads/2021/07/Academics-Homepage-4-scaled-e1625826297511.jpg"/>
                </div>
            </div>

            <div className="d-flex py-5 align-items-center feature-container justify-content-between">
                <div className="col-6 d-flex feature_image_container">
                    <img className="image1"
                         src="https://royalcollege.lk/wp-content/uploads/2021/08/Clubs-homepage-2-2.jpg"/>
                    <img className="image2"
                         src="https://royalcollege.lk/wp-content/uploads/2021/08/Clubs-and-Societies-Homepage-Image-1.jpg"/>
                </div>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center feature_description">
                    <div className="text-center w-75">
                        <h5>Clubs & Societies</h5>
                        <p>
                            The Royal College celebrates the freedom given to its students to express themselves. The
                            College provides a plethora of clubs & societies to select from and the liberty to found a
                            new community. This is the birthplace of idea-driven individuals that seek to make a
                            difference in the world.
                        </p>
                    </div>

                </div>
            </div>

            <div className="d-flex py-5 align-items-center feature-container justify-content-between">
                <div className="col-6 d-flex flex-column align-items-center justify-content-center feature_description">
                    <div className="text-center w-75">
                        <h5>Sports</h5>
                        <p>
                            Taking the field with glory and honour, the gentlemen in blue and gold are shaped to be the
                            epitome of humility in victory and graciousness in defeat. With camaraderie born of hardship
                            and perseverance birthed by adversity, sportsmen at the Royal College strive to reach ever
                            greater heights.
                        </p>
                    </div>
                </div>
                <div className="col-6 d-flex feature_image_container">
                    <img className="image1"
                         src="https://royalcollege.lk/wp-content/uploads/2021/07/Main-page-sport-sailing-e1625829213650.png"/>
                    <img className="image2"
                         src="https://royalcollege.lk/wp-content/uploads/2021/07/Sports-1-e1625827606595.jpg"/>
                </div>
            </div>
        </div>
    </div>)
}

export default Features;