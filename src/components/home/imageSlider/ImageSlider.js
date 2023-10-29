import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images
}

const SliderImages = importAll(require.context('../../images/image slider/', false, /\.(png|jpe?g|svg)$/));

function ImageSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    // Define an array of image keys
    const imageKeys = Object.keys(SliderImages);

    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the next index by incrementing the current activeIndex
            const nextIndex = (activeIndex + 1) % imageKeys.length;
            setActiveIndex(nextIndex);
        }, 10000); // Change images every 5 seconds (adjust the interval as needed)

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, [activeIndex, imageKeys.length]);

    return (
        <div>
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                {imageKeys.map((imageKey, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={SliderImages[imageKey]}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                height: "500px",
                                objectPosition: "40% 70%",
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageSlider;
