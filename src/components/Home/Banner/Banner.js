import React from "react";
import bannerImgFirst from "../../../Images/banner_top_first.png";
import bannerImgSecond from "../../../Images/banner_top_second.png";




// home header banner section
const Banner = () => {
  return (
    <div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">
          <div className="carousel-item">

            {/* carousel first part */}
            <img src={bannerImgFirst} className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption d-none text-white d-md-block text-black">
              <h1>Are You Ready to Set on a New Journey</h1>
              <p>Just browse through and choose your own journey</p>
            </div> */}
          </div>

          {/* carousel second part */}
          <div className="carousel-item active">
            <img src={bannerImgSecond} className="d-block w-100" alt="..." />
            {/* <div className="carousel-caption text-white d-none d-md-block text-dark">
              <h1>Go Where There Is No Path and Leave a Trail</h1>
              <p>Just browse through and choose your own journey</p>
            </div> */}
          </div>
        </div>


        {/* carousel slider */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};





export default Banner;