import React from "react";
import {Link} from 'react-router-dom';
import "./Gallery.css";

function GalleryCard({title, imgurl}) {
  return (
    <>
    <div className="card text-center" style={{marginBottom: "20px"}}>
      <div className="card ">
        <img src={imgurl} alt="" className="card-img-top-custom" style={{objectFit: "cover"}} />
      </div>
      <div className="card-body">
        <h4 className="btn btn-outline-info btn-lg btn-block">{title}</h4>
      </div>
    </div>
    </>
  );
}

function Gallery() {

  return (
    <div className="container">

      <div style={{ marginTop: "20px" }}>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
            <Link to='/galleryPageSportmeet'><GalleryCard title="Sportmeet" imgurl="https://www.thepapare.com/wp-content/uploads/705bb26fd753f4567479c69a19885d22.jpg"/></Link>
            </div>
            <div className="col-md-4">
            <Link to='/galleryPageartday'><GalleryCard title="Art Day" imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjg8ac50ipo9ljhZ9t96LCZkGA4cWppiZEGVQEQ-COYHEuqM3mIo1nuRoVdefdfj4r_s&usqp=CAU"/></Link>
            </div>
            <div className="col-md-4">
            <Link to='/galleryPagescience'><GalleryCard title="Science Day" imgurl="https://i0.wp.com/alethea.lk/androdollarservices_content/uploads/2020/04/IMG_5475-1024x683-1.jpg?fit=683%2C683&ssl=1"/></Link>
            </div>
            <div className="col-md-4">
            <Link to='/galleryPageChildrensday'><GalleryCard title="Children Day" imgurl="https://www.sundayobserver.lk/sites/default/files/styles/large/public/news/2021/09/24/Untitled-30.jpg?itok=FQpG5Dj2"/></Link>
            </div>
            <div className="col-md-4">
            <Link to='/galleryPageEnglishday'><GalleryCard title="English Day" imgurl="https://i0.wp.com/alethea.lk/androdollarservices_content/uploads/2018/10/IMG_5424.jpg?ssl=1"/></Link>
            </div>
            <div className="col-md-4">
            <Link to='/galleryPageEnvironmentday'><GalleryCard title="Environment Day" imgurl="http://s3.amazonaws.com/bizenglish/wp-content/uploads/2019/06/08193944/IMG_3428.jpg"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );



}

export default Gallery;
