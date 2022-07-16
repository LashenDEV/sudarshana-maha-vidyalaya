import React from "react";
import mission from "../../images/about/mission.png";
import vision from "../../images/about/vision.jpg";
import crest from "../../images/logo/crest.png";
import goals from "../../images/about/goals.jpg";
import flag from "../../images/about/flag.png";
import map from "../../images/about/map.jpg";
import about from "../../images/about/about.jpg";
import school from "../../images/about/school.jpg";
import song from "../../images/about/song.jpg";
import "./About.css";

function About() {
    return (
        <div>
            <div className="card text-white">
                <div className="w-100" style={{height: "500px"}}>
                    <img
                        src={about}
                        class="card-img"
                        alt="..."
                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                    />
                </div>
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <p class="display-1 animate__animated animate__fadeInLeft d-none d-md-block" style={{fontSize: "8rem"}}>
                        About
                    </p>
                    <p className="display-1 animate__animated animate__fadeInLeft d-block d-md-none " style={{fontSize: "6rem"}}>
                        About
                    </p>
                </div>
            </div>
            <div className="border-none d-flex justify-content-center py-5" style={{backgroundColor: "#FFFACD"}}>
                <div className="w-50 text-center animate__animated animate__zoomIn">
                    <h1>About Sudarshana Maha Vidyalaya</h1>
                    <p>
                        Sudarshana Maha Vidyalaya, located in the heart of Uva Province Sri
                        Lanka, is one of the country's leading schools. Sudarshana is
                        devoted to excelling in education and developing leaders in many
                        disciplines who crave to make a difference. Sudarshana, which has
                        its origins in the beautiful city, of Badulla in Sri Lanka, has an
                        enrollment of over 3750 students. Since its opening in 1892,
                        Sudarshana has been dedicated to preparing students with unique
                        diversities for leadership in a complex world. Sudarshana is known
                        for its character, drawn from the legacy of the people who built her
                        glory. Areas of excellence range from various academic successes to
                        various sports and athletic victories. Sudarshana is located in one
                        of the highest lands in Badulla and is standing tall on one of the
                        most beautiful landscapes in Sri Lanka.
                    </p>
                </div>
            </div>
            {/* start profile section */}
            <div className="col-md-12 container-fluid">
                <div className="row pb-5 p-5">
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <div style={{width: "100%", height: "250px"}}>
                                <img
                                    className="align-items-center"
                                    src={school}
                                    alt="school"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                        <div className="card shadow p-3 pt-0 mb-5 bg-body rounded h-75">
                            <div className="card-body">
                                <h3 className="d-flex justify-content-center align-items-center py-3">
                                    School Profile
                                </h3>
                                <p className="paragraph">
                                    <b>School Name: </b> Sudarshana maha Vidyalaya <br/>
                                    <br/>
                                    <b> Address :</b> Passara, Badulla <br/>
                                    <br/>
                                    <b> Phone Number :</b> +9435-3242555 <br/>
                                    <br/>
                                    <b> Email Address :</b> sudarshanamv@info.com <br/>
                                    <br/>
                                    <b> Web Site :</b> sudarshanamv.lk <br/>
                                    <br/>
                                    <b>School Type :</b> Central collage <br/>
                                    <br/>
                                    <b> Class Range :</b> Grade 1-13 <br/>
                                    <br/>
                                    <b> National Type :</b> Mixed <br/>
                                    <br/>
                                    <b> Language medium for laurning: </b> Sinhala/English
                                    <br/>
                                    <br/>
                                    <b>Education Division :</b> Passara <br/>
                                    <br/>
                                    <b> Education Zone: </b> badulla <br/>
                                    <br/>
                                    <b> Province: </b> Uva <br/>
                                    <br/>
                                    <b>School Number :</b> +9477-6753565<br/>
                                    <br/>
                                    <b> School Census No: </b> 54432 <br/>
                                    <br/>
                                    <b> School Exam No: </b> 09987
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end profile section */}
                    {/* start school song section */}
                    <div className="col-md-4">
                        <div className="d-flex justify-content-center">
                            <div style={{width: "100%", height: "250px"}}>
                                <img
                                    className="align-items-center"
                                    src={song}
                                    alt="Song"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                        <div className="card shadow p-3 pt-0 mb-5 bg-body rounded h-75">
                            <div className="card-body">
                                <h3 className="d-flex justify-content-center align-items-center py-3">
                                    School Song
                                </h3>
                                <p className="d-flex justify-content-center align-items-center">
                                    විද්‍යාලෝකය පතුරන හෙළ මව් දෙරණත <br/>
                                    <br/>
                                    විනේය ජන සමාජයක ඔබ වේ උල්පත <br/>
                                    <br/>
                                    සුදර්ශන මහා විදුහල් ජනනිය <br/>
                                    <br/>
                                    නව විදු නැණ ගණිත මිනිත ශිල්ප නිපුණතා <br/>
                                    <br/>
                                    භාෂා සාහිත කවි නළු රස ප්‍රවීණතා <br/>
                                    <br/>
                                    සාදා දුන මැනවි නිබඳ <br/>
                                    <br/>
                                    පාසල් මෑණියනි අපට <br/>
                                    <br/>
                                    වඳිමු ඔබෙ දෙපා <br/>
                                    <br/>
                                    අකුටිල වී යුක්තිය අබියස සිරස නමා <br/>
                                    <br/>
                                    සාර දහම් දැන විරියෙන් කෙළි මඩුළු දිනා<br/>
                                    <br/>
                                    ජීවිතයේ අරුත පසිඳ <br/>
                                    <br/>
                                    පාදා දෙන් මව්නි අපට <br/>
                                    <br/>
                                    වඳිමු ඔබෙ දෙපා <br/>
                                    <br/>
                                </p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <b>
                                        <p>
                                            පද රචනය: රත්න ශ්‍රී විජේසිංහයන් <br/>
                                            <br/>
                                            ස්වර රටා: ගුරු උපදේශිකා ස්වර්ණා මොහොට්ටාල<br/>
                                            <br/>
                                            නිර්මාණය කල දිනය: 2006.11.19
                                        </p>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end school song section */}

                    <div className="col-md-4 d-flex align-items-center">
                        <div className="card-body p-0 d-md-flex">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <div className="mb-4 p-md-4">
                                    <h3 className="d-flex justify-content-center align-items-center">
                                        SCHOOL CREST
                                    </h3>
                                    <div style={{width: "300px", height: "250px"}}>
                                        <img
                                            className="align-items-center"
                                            src={crest}
                                            alt="School Cheast"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 p-md-4">
                                    <h3 className="d-flex justify-content-center align-items-center pb-4">
                                        SCHOOL FLAG
                                    </h3>
                                    <div style={{width: "300px", height: "200px"}}>
                                        <img
                                            className="align-items-center"
                                            src={flag}
                                            alt="School flag"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 p-md-4">
                                    <h3 className="d-flex justify-content-center align-items-center">
                                        SCHOOL MOTTO
                                    </h3>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <p className="text-center fs-2">
                                            "පඤ්ඤා නරානං රතනං"<br/>
                                            'ප්‍රඥාව මිනිසාට මාණික්‍යයක් බඳුය' යන්න මෙහි අරුතයි.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end school song section */}

            <div class="container" data-aos="fade-up">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img
                                src={vision}
                                class="card-img-top "
                                alt="Vision"
                                height="300px"
                                style={{objectFit: "cover"}}
                            />
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-center">
                                    <p>
                                        <i
                                            class="fa-duotone fa-crosshairs fa-2x me-3"
                                            style={{color: "#080c34"}}
                                        />
                                    </p>
                                </div>
                                <h2 class="card-title text-center "> Our Vission </h2>
                                <p class="card-text">
                                    <p class="text-center">
                                        <p> පිරිපුන් දැයක් උදෙසා පිරිපුන් දරුවෙක්.</p>
                                        <p> பூரண சாதிக்காக பூரண பிள்னை.</p>
                                        <p> Total Child for a Perfect Nation.</p>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img
                                src={mission}
                                class="card-img-top"
                                alt="Mission"
                                height="300px"
                                style={{objectFit: "cover"}}
                            />
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-center">
                                    <p>
                                        <i
                                            class="fa-duotone fa-eye fa-2x me-3"
                                            style={{color: "#080c34"}}
                                        />
                                    </p>
                                </div>
                                <h2 class="card-title text-center">Our Mission</h2>
                                <p class="card-text">
                                    <p class="text-center">
                                        <p>
                                            පිරිපුන් දරුවෙක් බිහි කළ හැකි ඵලදායි ඉගෙනුම් පරිසරයක්
                                            නිර්මාණය කිරීම.
                                        </p>
                                        <p>
                                            சிறந்த பிளளை ஒள்றை பெற்றுவதற்காக பயனுள்ள சூழலை அமையுதல்.
                                        </p>
                                        <p>
                                            Creating a productive school environment capable of
                                            producing a Total Child.
                                        </p>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img
                                src={goals}
                                class="card-img-top"
                                alt="Goals"
                                height="300px"
                                style={{objectFit: "cover"}}
                            />
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-center">
                                    <p>
                                        <i
                                            class="fa-solid fa-bullseye-arrow fa-2x me-3"
                                            style={{color: "#080c34"}}
                                        />
                                    </p>
                                </div>
                                <h2 class="card-title text-center">Our Goals</h2>
                                <p class="card-text">
                                    <p class="text-center">
                                        <p>
                                            The primary goal of the school is to offer its students
                                            the best education possible. This goal may only be
                                            achieved when student behavior and the general school
                                            atmosphere allow for teachers to teach and students to
                                            learn without disruption or inappropriate behavior.
                                        </p>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* start genaral rules section */}
                <div className="p-4">
                    <p>
                        <b>
                            <u>
                                <h2> GENERAL RULES </h2>
                            </u>
                        </b>
                    </p>

                    <form>
                        <ol>
                            <h5>
                                <b>
                                    <li> ENTRY INTO SCHOOL</li>
                                </b>
                            </h5>

                            <p>
                                Every student must bring his student record book to school
                                daily. If he fails to do so he may be refused entry to school.
                                No student will be entered into the College premises without the
                                proper uniform within school hours. Bringing mobile phones, all
                                forms of disks, flash drives, music players or any form of
                                software, data storage mediums or unauthorized hardware into
                                school premises is strictly prohibited.
                            </p>

                            <h5>
                                <b>
                                    <li> COLLEGE ATTIRE</li>
                                </b>
                            </h5>

                            <p>
                                Students must come suitably clad wearing the school uniform and
                                the school badge. Unorthodox fashions and styles will not be
                                allowed Shoes – Plain black shoes (Fancy shoes, shoes with
                                buckles and coloured laces are not allowed). Canvas shoes are
                                prohibited.
                                <br/>
                                Socks – Plain white socks with no designs.<br/>
                                Shirts – Students must wear white shirts of inexpensive
                                material. Shirts cannot have a double line. The badge should be
                                sewn using black or navy blue thread onto the top left-hand
                                corner of the shirt pocket.<br/>
                                Trouser (Grade 10 and above) – Senior students must wear long
                                plain white trousers with the hemline falling about half an inch
                                past the point where the top of your shoe begins so that the
                                socks are not visible when standing.<br/>
                                Shorts (Grade 1 – 9) – Junior students must wear short navy blue
                                trousers up to their knees.<br/>
                                Spectacles – Plain black with no designs and no other colours.
                                <br/>
                                Watch – Only silver or black straps are allowed. No smartwatches
                                are permitted. Watches must be securely fastened to the wrist.
                                <br/>
                                Hair – Long hair or any other form of hairstyling or colouring
                                of the hair is strictly prohibited.<br/>
                                Accessories – White and yellow religious wrist bindings are
                                permitted to be worn on the right hand, black wrist bindings
                                will be permitted only for the relevant religion, any other
                                wrist bindings other than the prior mentioned bindings are
                                strictly prohibited to be worn at school. Chains with talismans
                                can only be worn with special written permission from the
                                relevant authorities. Students are strictly prohibited from
                                entering school with tattoos.
                            </p>

                            <h5>
                                <b>
                                    <li> PUNCTUALITY</li>
                                </b>
                            </h5>

                            <p>
                                Students should arrive at school before 7.15 a.m. All students
                                must remain in the classrooms from 7.17 a.m. to 10.20 a.m. and
                                from 10.40 a.m. to 1.15 p.m. Loitering outside the respective
                                classrooms during school hours (from 7.15 a.m.-1.20 p.m.) is
                                strictly prohibited. Those who wish to leave the classroom
                                within school hours for co-curricular and extracurricular
                                activities should acquire permission from the respective teacher
                                in charge and possess the SRB throughout the given time to
                                produce whenever requested.
                            </p>

                            <h5>
                                <b>
                                    <li> ABSENCE FROM SCHOOL</li>
                                </b>
                            </h5>

                            <p>
                                No student may keep away from school except on grounds of
                                illness or when on leave approved by the authority. The reasons
                                for absence must be submitted only on the special page, provided
                                for this purpose in the SRB with the signature of the
                                parent/guardian, only on the next day to be signed by the class
                                teacher at the first opportunity. Letters or such documents will
                                not be accepted. When the period of absence exceeds 3 days a
                                medical certificate must support the entry in the SRB. It would
                                be appreciated if parents refrain from making requests for leave
                                for reasons other than illness, such as functions and
                                excursions. It would be noted that if a student is absent for a
                                period exceeding 2 months his name will be removed from the
                                class register.
                            </p>

                            <h5>
                                <b>
                                    <li> GENERAL CONDUCT</li>
                                </b>
                            </h5>

                            <p>
                                Strict disciplinary action will be taken against any student
                                whose behaviour in public would bring the school into disrepute.
                                This should be kept in mind by all students wherever they may
                                be, e.g.; when travelling in public conveyances, attending
                                functions etc. It should be particularly noted that smoking, the
                                possession of cigarettes etc. & the consumption of alcoholic
                                beverages are strictly prohibited. Strict disciplinary action
                                will be taken against any student whose behaviour on any social
                                media platform would bring the school disrepute.
                            </p>

                            <h5>
                                <b>
                                    <li> ACADEMICS</li>
                                </b>
                            </h5>

                            <p>
                                Students should devote as much time as possible to their
                                education at home on a regular basis. Parents should check the
                                student’s work daily and make certain that their children are
                                involved in their studies meaningfully. Each student has been
                                instructed to put the date in their respective exercise book at
                                the beginning of each period. The absence of such notes and
                                other forms of written work may indicate regular absence and
                                negligence on the part of the teachers or students. Checking the
                                student’s work regularly will enable parents to discern such
                                issues and bring them to the attention of the school
                                authorities. The student’s work is assessed regularly and will
                                be considered when prizes, awards and certificates are given. In
                                Grade 6 students should discuss with their parents and choose an
                                aesthetic subject and at Grade 10 students should choose a
                                technical subject of their choice. No student is allowed to
                                change his aesthetic subject or technical subject afterwards.
                            </p>

                            <h5>
                                <b>
                                    <li> ATTENDANCE AND EXAMINATIONS</li>
                                </b>
                            </h5>

                            <p>
                                80% attendance is compulsory for students sitting for the G.C.E
                                Advanced Level Examination as a school candidate. Any student
                                who has attendance below 80% will not be accepted to sit the
                                General Examinations. Students who are going on sports
                                practices/training (or) leaving school for essential purposes,
                                should make a note of their attendance on the CRB & class
                                register. They should also note the reason in the SRB on the
                                relevant page to make sure that the class teacher is informed
                                regarding the student’s absence.For this purpose attendance in
                                the morning as well as the afternoon will be counted.
                            </p>
                        </ol>
                    </form>
                </div>
                {/* end genaral rules section */}
                {/* start school map section */}
                <p style={{textAlign: "left"}}>
                    <b>
                        <u>
                            <h2> SCHOOL MAP </h2>
                        </u>
                    </b>
                    <img
                        src={map}
                        alt="School Map"
                        class="img-fluid"
                        width="700px"
                        height="400px"
                    />
                </p>
            </div>
            {/* end school map section */}
        </div>
    );
}

export default About;
