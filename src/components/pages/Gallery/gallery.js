import React from "react";
import {Link} from 'react-router-dom';
import "./Gallery.css";
import gallery from "../../images/gallery/Childrens-Course-IME-Institute-of-Multimedia-Education.jpg";

function GalleryCard({title, imgurl}) {
    return (
        <>
            <div className="card text-center" style={{marginBottom: "20px"}}>
                <div className="card ">
                    <img src={imgurl} alt="" className="card-img-top-custom" style={{objectFit: "cover"}}/>
                </div>
                <div className="card-body" style={{backgroundColor: "#cba257"}}>
                    <h4 className="btn btn-outline-primary btn-lg text-white my-2" id="gallery-btn">{title}</h4>
                </div>
            </div>
        </>
    );
}

function Gallery() {

    return (
        <>
            <div className="card text-white">
                <div w-100 style={{height: "500px"}}>
                    <img
                        src={gallery}
                        className="card-img"
                        alt="..."
                        style={{width: "100%", height: "100%", objectFit: "cover"}}
                    />
                </div>
                <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <p className="display-1 animate__animated animate__fadeInLeft d-none d-md-block"
                       style={{fontSize: "8rem"}}>
                        Gallery
                    </p>
                    <p className="display-1 animate__animated animate__fadeInLeft d-block d-md-none "
                       style={{fontSize: "6rem"}}>
                        Gallery
                    </p>
                </div>
            </div>
            <div className="container">
                <div style={{marginTop: "20px"}}>
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4 animate__animated animate__bounceIn">
                                <Link to='/sudarshana-maha-vidyalaya/galleryPageSportmeet'><GalleryCard
                                    title="Sportmeet"
                                    imgurl="https://www.thepapare.com/wp-content/uploads/705bb26fd753f4567479c69a19885d22.jpg"/></Link>
                            </div>
                            <div className="col-md-4 animate__animated animate__bounceIn">
                                <Link to='/sudarshana-maha-vidyalaya/galleryPageartday'><GalleryCard title="Art Day"
                                                                                                     imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjg8ac50ipo9ljhZ9t96LCZkGA4cWppiZEGVQEQ-COYHEuqM3mIo1nuRoVdefdfj4r_s&usqp=CAU"/></Link>
                            </div>
                            <div className="col-md-4 animate__animated animate__bounceIn">
                                <Link to='/sudarshana-maha-vidyalaya/galleryPagescience'><GalleryCard
                                    title="Science Day"
                                    imgurl="https://i0.wp.com/alethea.lk/androdollarservices_content/uploads/2020/04/IMG_5475-1024x683-1.jpg?fit=683%2C683&ssl=1"/></Link>
                            </div>
                            <div className="col-md-4 animate__animated animate__bounceIn">
                                <Link to='/sudarshana-maha-vidyalaya/galleryPageChildrensday'><GalleryCard
                                    title="Children Day"
                                    imgurl="https://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2021/09/24/Untitled-30.jpg?itok=FQpG5Dj2"/></Link>
                            </div>
                            <div className="col-md-4 animate__animated animate__bounceIn">
                                <Link to='/sudarshana-maha-vidyalaya/galleryPageEnglishday'><GalleryCard
                                    title="English Day"
                                    imgurl="https://i0.wp.com/alethea.lk/androdollarservices_content/uploads/2018/10/IMG_5424.jpg?ssl=1"/></Link>
                            </div>
                            <div className="col-md-4 animate__animated animate__bounceIn">
                                <Link to='/sudarshana-maha-vidyalaya/galleryPageEnvironmentday'><GalleryCard
                                    title="Environment Day"
                                    imgurl="http://s3.amazonaws.com/bizenglish/wp-content/uploads/2019/06/08193944/IMG_3428.jpg"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default Gallery;
