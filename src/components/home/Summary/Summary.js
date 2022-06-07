import React from "react";

function Summary() {
    return (
        <div className="container">
            <div className="col-md-12 mb-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="card my-2">
                            <div className="card-body">
                                <h2>Teachers</h2>
                                <div className="text-info p-3">
                                    <h1>150</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card my-2">
                            <div className="card-body">
                                <h2>Students</h2>
                                <div className="text-info p-3">
                                    <h1>3000</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card my-2">
                            <div className="card-body">
                                <h2>Non-Academic Staff</h2>
                                <div className="text-info p-3">
                                    <h1>30</h1>
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