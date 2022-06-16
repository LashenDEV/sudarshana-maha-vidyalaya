import React from "react";
import mision from "../../images/about/mision.jpg";
import vision from "../../images/about/vision.jpg";
import crest from "../../images/about/crest.png";
import goals from "../../images/about/goals.jpg";
import flag from "../../images/about/flag.png";
import map from "../../images/about/map.jpg"
import about from "../../images/about/about.png"
import "./About.css";

function About() {
  return (
 <><div class="card text-white">
      <div w-100 style={{ height: "500px" }}>
        <img
          src={about}
          class="card-img"
          alt="..."
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <p class="display-1" style={{ fontSize: "8rem" }}>
              About
            </p>
          </div>
    </div>
    
    <div class="container" data-aos="fade-up">  {/* mission section */}
        <div class="row about-cols">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100">
              <div>
                <div class="card-body">
                  <div class="img">
                    <img src={mision} alt="" class="img-fluid" />
                  </div>
                  <h2 class="title">
                    <p class="text-center"> Our vission </p> </h2>
                  <p class="text-center">
                    <p> පිරිපුන් දැයක් උදෙසා පිරිපුන් දරුවෙක්.</p>
                    <p> பூரண சாதிக்காக பூரண பிள்னை.</p>
                    <p> Total Child for a Perfect Nation.</p>
                  </p> </div>
              </div>
            </div>
          </div>

          {/* end mission section */}


          {/* start vision section */}
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100">
              <div class="about-col card">
                <div class="card-body">
                  <div class="img">
                    <img src={vision} alt="" class="img-fluid" />
                  </div>
                </div>
                <h2 class="title"> <p class="text-center"> Our mission </p> </h2>
                <p class="text-center">
                  <p> පිරිපුන් දරුවෙක් බිහි කළ හැකි ඵලදායි ඉගෙනුම් පරිසරයක් නිර්මාණය
                    කිරීම.</p>
                  <p> சிறந்த பிளளை ஒள்றை பெற்றுவதற்காக பயனுள்ள சூழலை அமையுதல்.</p>
                  <p> Creating a productive school environment capable of producing a Total Child.</p>
                </p> 
                </div>
            </div>
          </div>

          {/* end vision section */}

          {/* start goals section */}
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div class="card h-100">
              <div>
                <div class="card-body">
                  <div class="img">
                    <img src={goals} alt="" class="img-fluid" />
                    <div class="icon">
                      <i class="bi bi-bar-chart"></i>
                    </div>
                  </div>
                </div>
                <h2 class="title">
                  <p class="text-center"> Our Goals </p> </h2>
                <p class="text-center">
                  <p> The primary goal of the school is to offer its students the best
                    education possible. This goal may only be achieved when student
                    behavior and the general school atmosphere allow for teachers to
                    teach and students to learn without disruption or inappropriate
                    behavior.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* end goals section */}


        {/* start profile section */}
        <div class="row-md-12">
          <div class="row">
            <div class="col-md-6 ">
              <p style={{ textAlign: "start" }}>
                <p><b><u><h2> School Profile </h2></u></b></p>
                    <p> <b>1.School name: </b> Sudarshana maha Vidyalaya  </p>
                    <p> <b> Address :</b> Aranayake, kegalle</p>
                    <p> <b> Phone number :</b> 035-3242555 </p>
                    <p> <b> email Address :</b> sudarshanaMahaVidyalaya @gmail.com </p>
                    <p> <b> Web site :</b> surarshanamahavidyalaya.lk </p>

                    <p> <b>2.School type :</b> Central collage </p>
                    <p> <b> Class Range :</b> Grade 1-13 </p>
                    <p> <b> National type :</b> Mixed </p>
                    <p> <b> Language medium for laurning: </b> Sinhala/English </p>

                    <p> <b>3. Education Division :</b> Aranayake </p>
                    <p> <b> Education Zone: </b> kegalle </p>
                    <p> <b> Province: </b> Sabaragamuwa </p>

                    <p> <b>4.School Number :</b> 077-6753565 </p>
                    <p> <b> School Census No: </b> 54432 </p>
                    <p> <b> School Exam No: </b> 09987 </p>
              </p>
            </div>

            {/* end profile section */}


            {/* start school song section */}
            <div class="col-md-6">
              <div class="d-flex justify-content-center">
                <p className="text-start">
                  <b><u><h2> School Song </h2></u></b>

                  විද්‍යාලෝකය පතුරන හෙළ මව් දෙරණත <br></br>
                  විනේය ජන සමාජයක ඔබ වේ උල්පත <br></br>
                  ජනාධිපති බාලිකා විදුහල් ජනනිය <br></br>
                  නව විදු නැණ ගණිත මිනිත ශිල්ප නිපුණතා <br></br>

                  භාෂා සාහිත කවි නළු රස ප්‍රවීණතා <br></br>
                  සාදා දුන මැනවි නිබඳ <br></br>
                  පාසල් මෑණියනි අපට <br></br>
                  වඳිමු ඔබෙ දෙපා <br></br>

                  අකුටිල වී යුක්තිය අබියස සිරස නමා <br></br>
                  සාර දහම් දැන විරියෙන් කෙළි මඩුළු දිනා<br></br>
                  ජීවිතයේ අරුත පසිඳ <br></br>
                  පාදා දෙන් මව්නි අපට <br></br>
                  <p>වඳිමු ඔබෙ දෙපා </p>

                  <b> <p> පද රචනය: රත්න ශ්‍රී විජේසිංහයන් </p>
                    <p> ස්වර රටා: ගුරු උපදේශිකා ස්වර්ණා මොහොට්ටාල </p>
                    <p> 2006.11.19 </p> </b>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* end school song section */}

        {/* start CREST & MOTTO section */}

        <p> <h3> < u> SCHOOL CREST </u> </h3> </p>
        <img src={crest} alt="" class="img-fluid" />

        <p> <h3> <u> SCHOOL MOTTO </u> </h3> </p>
        <p> "පඤ්ඤා පදීපං ජාලෙථ" </p>
        <p>'ප්‍රඥා ප්‍රදීපය දල්වව්' යන්න මෙහි අරුතයි.</p>

        {/* end CREST & MOTTO section */}


        {/* start school flag section */}

        <p style={{ textAlign: "end", }}> <b><u><h2> SCHOOL FLAG </h2></u></b>
          <img src={flag} alt="" class="img-fluid" /> </p>

        {/* end school flag section */}

        {/* start genaral rules section */}

        <p><b><u><h2> GENERAL RULES </h2></u></b></p>
        <form>
          <ol>
            <p> <h5> <b> <li> ENTRY INTO SCHOOL </li> </b> </h5>  </p>
            <p> Every student must bring his student record book to school daily. If he fails to do so he may be refused entry to school.
              No student will be entered into the College premises without the proper uniform within school hours.
              Bringing mobile phones, all forms of disks, flash drives, music players or any form of software,
              data storage mediums or unauthorized hardware into school premises is strictly prohibited.</p>

            <p> <h5> <b> <li> COLLEGE ATTIRE </li> </b> </h5>  </p>
            <p> Students must come suitably clad wearing the school uniform and the school badge.
              Unorthodox fashions and styles will not be allowed

              Shoes –  Plain black shoes (Fancy shoes, shoes with buckles and coloured laces are not allowed).
              Canvas shoes are prohibited.<br></br>

              Socks – Plain white socks with no designs.<br></br>

              Shirts – Students must wear white shirts of inexpensive material. Shirts cannot have a double line.
              The badge should be sewn using black or navy blue thread onto the top left-hand corner of the shirt pocket.<br></br>

              Trouser (Grade 10 and above) – Senior students must wear long plain white trousers with
              the hemline falling about half an inch past the point where the top of your shoe begins so that the socks are not visible when standing.<br></br>

              Shorts (Grade 1 – 9) – Junior students must wear short navy blue trousers up to their knees.<br></br>

              Spectacles – Plain black with no designs and no other colours.<br></br>

              Watch – Only silver or black straps are allowed. No smartwatches are permitted.
              Watches must be securely fastened to the wrist.<br></br>

              Hair – Long hair or any other form of hairstyling or colouring of the hair is strictly prohibited.<br></br>

              Accessories – White and yellow religious wrist bindings are permitted to be worn on the right hand,
              black wrist bindings will be permitted only for the relevant religion,
              any other wrist bindings other than the prior mentioned bindings are strictly prohibited to be worn at school.
              Chains with talismans can only be worn with special written permission from the relevant authorities.
              Students are strictly prohibited from entering school with tattoos.</p>

            <p> <h5> <b> <li>  PUNCTUALITY </li> </b> </h5>  </p>

            <p> Students should arrive at school before 7.15 a.m.
              All students must remain in the classrooms from 7.17 a.m. to 10.20 a.m. and from 10.40 a.m. to 1.15 p.m.
              Loitering outside the respective classrooms during school hours (from 7.15 a.m.-1.20 p.m.) is strictly prohibited.
              Those who wish to leave the classroom within school hours for co-curricular and extracurricular activities should acquire permission
              from the respective teacher in charge and possess the SRB throughout the given time to produce whenever requested.</p>


            <p> <h5> <b> <li>  ABSENCE FROM SCHOOL </li> </b> </h5>  </p>

            <p> No student may keep away from school except on grounds of illness or when on leave approved by the authority.
              The reasons for absence must be submitted only on the special page,
              provided for this purpose in the SRB with the signature of the parent/guardian,
              only on the next day to be signed by the class teacher at the first opportunity.
              Letters or such documents will not be accepted. When the period of absence exceeds 3 days a medical certificate must support the entry in the SRB.
              It would be appreciated if parents refrain from making requests for leave for reasons other than illness,
              such as functions and excursions.
              It would be noted that if a student is absent for a period exceeding 2 months his name will be removed from the class register.</p>

            <p> <h5> <b> <li>  GENERAL CONDUCT </li> </b> </h5>  </p>

            <p> Strict disciplinary action will be taken against any student whose behaviour in public would bring the school into disrepute.
              This should be kept in mind by all students wherever they may be, e.g.; when travelling in public conveyances, attending functions etc. It should be particularly noted that smoking,
              the possession of cigarettes etc. & the consumption of alcoholic beverages are strictly prohibited.
              Strict disciplinary action will be taken against any student whose behaviour on any social media platform would bring the school disrepute.</p>

            <p> <h5> <b> <li>  ACADEMICS </li> </b> </h5>  </p>

            <p> Students should devote as much time as possible to their education at home on a regular basis.
              Parents should check the student’s work daily and make certain that their children are involved in their studies meaningfully.
              Each student has been instructed to put the date in their respective exercise book at the beginning of each period.
              The absence of such notes and other forms of written work may indicate regular absence and negligence on the part of the teachers or students.
              Checking the student’s work regularly will enable parents to discern such issues and bring them to the attention of the school authorities.
              The student’s work is assessed regularly and will be considered when prizes, awards and certificates are given.
              In Grade 6 students should discuss with their parents and choose an aesthetic subject and at Grade 10 students should choose a technical subject of their choice.
              No student is allowed to change his aesthetic subject or technical subject afterwards.</p>

            <p> <h5> <b> <li>  ATTENDANCE AND EXAMINATIONS </li> </b> </h5>  </p>

            <p> 80% attendance is compulsory for students sitting for the G.C.E Advanced Level Examination as a school candidate.
              Any student who has attendance below 80% will not be accepted to sit the General Examinations.
              Students who are going on sports practices/training (or) leaving school for essential purposes,
              should make a note of their attendance on the CRB & class register.
              They should also note the reason in the SRB on the relevant page to make sure that the class teacher is informed regarding the student’s absence.For this purpose attendance in the morning as well as the afternoon will be counted.</p>

          </ol>
        </form>

        {/* end genaral rules section */}

        {/* start school map section */}

        <p style={{ textAlign: "end", }}> <b><u><h2> SCHOOL MAP </h2></u></b>
          <img src={map} alt="" class="img-fluid" /> </p>

      </div></>
      );
    }
    
{/* end school map section */}

export default About;
