import React from "react";
import {Carousel} from "react-bootstrap";

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images
}
const SliderImages = importAll(require.context('../../images/image slider/', false, /\.(png|jpe?g|svg)$/));

function ImageSlider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                         src={SliderImages['slider (1).jpg']}
                         alt="First slide"
                         style={{width: "100%", objectFit: "cover", height: "500px", objectPosition: "40% 70%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SliderImages['slider (2).jpg']}
                        alt="Second slide"
                        style={{width: "100%", objectFit: "cover", height: "500px", objectPosition: "40% 70%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SliderImages['slider (3).jpg']}
                        alt="Third slide"
                        style={{width: "100%", objectFit: "cover", height: "500px", objectPosition: "20% 20%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SliderImages['slider (4).jpg']}
                        alt="Third slide"
                        style={{width: "100%", objectFit: "cover", height: "500px", objectPosition: "10% 10%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SliderImages['slider (5).jpeg']}
                        alt="Third slide"
                        style={{width: "100%", objectFit: "cover", height: "500px", objectPosition: "40% 40%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SliderImages['slider (6).jpeg']}
                        alt="Third slide"
                        style={{width: "100%", objectFit: "cover", height: "500px", objectPosition: "20% 40%"}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )

}

export default ImageSlider;