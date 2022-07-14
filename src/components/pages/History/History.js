import React from "react";
import { useSpring, animated } from 'react-spring';


function History() {
  
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 600,})

  return (
    <div className="container-">
      <div class="col-lg-12">
        <div class="card text-white">
          <div w-100 style={{ height: "500px" }}>
            <img
              src="http://www.richmondcollege.lk/wp-content/uploads/2016/07/l-block-old-age.jpg"
              class="card-img"
              alt="..."
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={props} class="card-img-overlay d-flex align-items-center justify-content-center">
            <p class="display-1 animate__animated animate__fadeInLeft" style={{ fontSize: "8rem" }}>
              History
            </p>
          </div>
        </div>
      </div>
      <animated.div style={props} className="border-none d-flex justify-content-center mt-5">
        <div className="w-50 text-center">
          <h1>100 Years of Excellence.</h1>
          <p>
            Sudarshana Maha Vidyalaya was founded by Sir Colonel Henry Steel
            Olcott, as a mixed high school. The school started with only 11
            students. The first few years of the school's existence were a
            struggle for Blaze. During that time, most schools on the island had
            been classified as state‑aided government schools. But during that
            time the government grants were available until a school showed
            itself established, with a solid core of able teachers and an
            expanding role, but institutions run by individuals did not qualify
            for government assistance.
          </p>
        </div>
      </animated.div>
      <div className="col-12 container">
        <div className="d-flex py-5 align-items-center feature-container justify-content-between">
          <div className="col-6 d-flex flex-column align-items-center justify-content-center feature_description">
            <div className="text-center w-75">
              <h5>Founders</h5>
              <p>
                Illuminating the way for countless lives, these gentlemen were
                at the forefront of leading the institution to greatness. Sir
                Colonel Henry Steel Olcott integrated the principles of his alma
                mater into the Badulla Academy, and thus the school was modeled
                upon the ideals of Eton. Similarly, each eminent luminary who
                took its reigns left their mark upon the foundation of the
                College, molding it to what it is today.
              </p>
            </div>
          </div>
          <div className="col-6 d-flex feature_image_container">
            <img
              className="image1"
              src="https://www.theosophy-nw.org/theosnw/theos/hpbtm-74.jpg"
              alt=""
            />
            <img
              className="image2"
              src="https://cdn.britannica.com/20/173720-050-4729ECB4/Henry-Steel-Olcott.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="d-flex py-5 align-items-center feature-container justify-content-between">
          <div className="col-6 d-flex feature_image_container">
            <img
              className="image1"
              src="https://royalcollege.lk/wp-content/uploads/2021/07/Bradby-Group-2-scaled.jpg"
              alt=""
            />
            <img
              className="image2"
              src="https://www.ais.lk/wp-content/uploads/2013/01/HP2.jpg"
              alt=""
            />
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center feature_description">
            <div className="text-center w-75">
              <h5>Principals</h5>
              <p>
                Sir Colonel Henry Steel Olcott (Founder) , P.H Nonis ,
                L.W.N.Laboothale , E.S.Liyanage , A.B.Aberathna , R.Chadrasekara
                , P.G.S.Bandara , L.S.P.D.K. Gunawardana , P.D.K.
                Vidanapathirana (present)
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex py-5 align-items-center feature-container justify-content-between">
          <div className="col-6 d-flex flex-column align-items-center justify-content-center feature_description">
            <div className="text-center w-75">
              <h5>Archives</h5>
              <p>
                Owing to the unwavering love for the College embedded in each
                student's heart, accounts of nearly all occasions of note have
                been passed down through generations in meticulous detail. As
                such, the Sudarshana Maha Vidyalaya Archives is host to a nearly
                inconceivable amount of historic documents and memorabilia
                relating to The Sudarshana Maha Vidyalaya and The Sudarshana
                Maha Vidyalaya Preparatory School. Stepping foot over its
                threshold is akin to walking through the sands of time; the
                experience continues to ensure the legacy of this institution is
                never forgotten.
              </p>
            </div>
          </div>
          <div className="col-6 d-flex feature_image_container">
            <img
              className="image1"
              src="https://royalcollege.lk/wp-content/uploads/2021/07/Scouting-Queen-scaled.jpg"
              alt=""
            />
            <img
              className="image2"
              src="https://royalcollege.lk/wp-content/uploads/2021/07/Archives-Homepage-e1626205159643.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
