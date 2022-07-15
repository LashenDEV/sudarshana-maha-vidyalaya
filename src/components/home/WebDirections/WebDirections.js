import React from "react";
import "./WebDirections.css";
import Logo from "../../images/assets/online_learning.png";

function WebDirections() {
    return (
        <div style={{backgroundColor: "rgb(199 151 60)"}}>
            <div className="container">
                <div className="col-md-12">
                    <div className="row text-white">
                        <div className="col-md-6 p-5 paragraph">
                            <h1>Learning Online</h1>
                            <p>Put forward in 2020, in order to facilitate the education of the students during the
                                pandemic
                                prevailing throughout the world, the Learning Management System has grown to be more
                                than
                                just a means for live conferencing of classes. The system acts as a platform for the
                                teachers and students to communicate effectively during the education process and it
                                also
                                expedites the administration function of the College, keeping records of every
                                stakeholder.</p>
                            <div className="d-flex justify-content-around align-items-center">
                                <img src={Logo} width="70%" height="60%" alt=""/>
                                <button className="btn btn-danger h-100 btn-lg"><i
                                    className="fa-duotone fa-circle-nodes pe-2"/>Visit Now
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6 p-5 link-container">
                            <h1>USEFUL LINKS</h1>
                            <div className="py-2" style={{width: "300px"}}>
                                <div className="wrapper link my-4">
                                    <a href="https://www.e-thaksalawa.moe.gov.lk/"><span>E-Thaksalawa</span></a>
                                </div>
                                <div className="wrapper link my-4">
                                    <a href="http://www.edupub.gov.lk/BooksDownload.php"><span>Text Book Download</span></a>
                                </div>
                                <div className="wrapper link my-4">
                                    <a href="http://nie.lk/seletguide"><span>Teachers Guide</span></a>
                                </div>
                                <div className="wrapper link my-4">
                                    <a href="https://govdoc.lk/category/syllabus"><span>Syllabus Download</span></a>
                                </div>
                                <div className="wrapper link my-4">
                                    <a href="https://moe.gov.lk/"><span>Ministry Of Education</span></a>
                                </div>
                                <div className="wrapper link my-4">
                                    <a href="https://www.doenets.lk/"><span>Examination</span></a>
                                </div>
                                <div className="wrapper link My-2">
                                    <a href="/"><span>Data Management Portal</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDirections;