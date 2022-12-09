import React from "react";
import Service from './Service'
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
              <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="/assets/images/home/img10.jpg" 
            className="d-block w-100" alt="Drone with mountains." height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img4.jpg" 
            className="d-block w-100" alt="Snow covered trees." height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img7.jpg" 
            className="d-block w-100" alt="Seaside roof inspection." height="700px" />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img9.jpg" 
            className="d-block w-100" alt="Bride on sandbar." height="700px" />
          </div>
          {/* <div className="carousel-item">
            <img src="/assets/images/home/img6.jpg" 
            className="d-block w-100" alt="Construction site." />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img10.jpg" 
            className="d-block w-100" alt="Drone with mountains." />
          </div>
          <div className="carousel-item">
            <img src="/assets/images/home/img5.jpg" 
            className="d-block w-100" alt="Shipwreck with diver." />
          </div>
          <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/images/home/img3.jpg" 
            className="d-block w-100" alt="Autumn with lake." />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Service />
    </div>
  );
};

export default Home;
