import React from "react";
import Ticker from "../../Animations/Ticker/Ticker";

function Summary() {
    return (
        <div className="container">
            <div className="col-md-12 mb-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className=" my-4">
                            <div className="card-body">
                                <h2>Teachers</h2>
                                <div className="text-info p-3">
                                    <h1 style={{ color: "#b8860b", }}>
                                            <Ticker className="count" end={150}/>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="my-4">
                            <div className="card-body">
                                <h2>Students</h2>
                                <div className="text-info p-3">
                                    <h1 style={{ color: "#b8860b" }}>
                                        <Ticker className="count" end={3000}/>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="my-4">
                            <div className="card-body">
                                <h2>Non-Academic Staff</h2>
                                <div className="text-info p-3">
                                    <h1 style={{ color: "#b8860b" }}>
                                        <Ticker className="count" end={30}/>
                                    </h1>
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