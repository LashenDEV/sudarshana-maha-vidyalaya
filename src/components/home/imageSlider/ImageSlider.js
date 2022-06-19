import React from "react";
import {Carousel} from "react-bootstrap";

function ImageSlider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item style={{height: "500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://imgs.search.brave.com/c6AZCAXnreG5cf6wXtkHliA0m6yiDpA0Rdedzcmc6ho/rs:fit:1200:600:1/g:ce/aHR0cHM6Ly9pbmR1/c3Njcm9sbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA2LzYwNTkxMTQw/XzM2MjMzNTgwMTA2/NzM5NF8xMzc4OTY0/NDM1MDk5NDUxMzky/X24uanBn"
                        alt="First slide"
                        style={{ width: "100%", objectFit: "cover" }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: "500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://imgs.search.brave.com/kK_bIlTZ2b8J3Ax2CVtmZeacSbhE1LfZMGgemH6bXl0/rs:fit:1024:576:1/g:ce/aHR0cHM6Ly93d3cu/YWRiLm9yZy9zaXRl/cy9kZWZhdWx0L2Zp/bGVzL3N0eWxlcy9j/b250ZW50X21lZGlh/L3B1YmxpYy9jb250/ZW50LW1lZGlhLzY2/NzMtc2Vjb25kYXJ5/LXN0dWRlbnRzLWxl/YXZpbmctbmV3LWxh/Yi5qcGc_aXRvaz16/aTdqOEdGcg"
                        alt="Second slide"
                        style={{ width: "100%", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: "500px"}}>
                    <img
                        className="d-block w-100"
                        src="https://imgs.search.brave.com/id1OBhk0OS3xF9FAVE85k1p7zNfp5k9XolP89Ycl_7o/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5y/ZWRjcm9zcy5say93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/OC9JTUdfNzEwMS5q/cGc"
                        alt="Third slide"
                        style={{ width: "100%", objectFit: "cover" }}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}

export default ImageSlider;