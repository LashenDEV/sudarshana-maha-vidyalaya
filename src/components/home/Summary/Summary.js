import React from "react";
import Ticker from "../../Animations/Ticker/Ticker";

function Summary() {
    return (
        <div className="container">
            <div className="col-md-12 my-5">
                <div className="row text-center">
                    <div className="col-xl-4">
                        <div className="my-4">
                            <div className="card-body p-5 rounded" style={{backgroundColor: "#a8a5b7"}}>
                                <h2>Teachers</h2>
                                <div className="text-info p-3">
                                    <Ticker className="count" end={150} duration={1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="my-4">
                            <div className="card-body p-5 rounded" style={{backgroundColor: "#a8a5b7"}}>
                                <h2>Students</h2>
                                <div className="text-info p-3">
                                    <Ticker className="count" end={3000} duration={1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="my-4">
                            <div className="card-body p-5 rounded" style={{backgroundColor: "#a8a5b7"}}>
                                <h2>Non-Academic Staff</h2>
                                <div className="text-info p-3">
                                    <Ticker className="count" end={30} duration={1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Summary;