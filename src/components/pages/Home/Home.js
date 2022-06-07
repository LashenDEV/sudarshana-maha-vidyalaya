import React from "react";
import ImageSlider from "../../home/imageSlider/ImageSlider";
import Intro from "../../home/Intro/Intro";
import Welcome from "../../home/Welcome/Welcome";
import Summary from "../../home/Summary/Summary";
import Motto from "../../home/Motto/Motto";
import Features from "../../home/Features/Features";
import WebDirections from "../../home/WebDirections/WebDirections";

function Home() {
    return (
        <div>
            <ImageSlider/>
            <Intro/>
            <Summary/>
            <Welcome/>
            <WebDirections/>
            <Features/>
            <Motto/>
        </div>
    )
}

export default Home;