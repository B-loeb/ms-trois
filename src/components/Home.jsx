import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img src="/assets/images/home/img10.jpg" 
            class="d-block w-100" alt="Drone with mountains." height="700px" />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/home/img4.jpg" 
            class="d-block w-100" alt="Snow covered trees." height="700px" />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/home/img7.jpg" 
            class="d-block w-100" alt="Seaside roof inspection." height="700px" />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/home/img9.jpg" 
            class="d-block w-100" alt="Bride on sandbar." height="700px" />
          </div>
          {/* <div class="carousel-item">
            <img src="/assets/images/home/img6.jpg" 
            class="d-block w-100" alt="Construction site." />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/home/img10.jpg" 
            class="d-block w-100" alt="Drone with mountains." />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/home/img5.jpg" 
            class="d-block w-100" alt="Shipwreck with diver." />
          </div>
          <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/images/home/img3.jpg" 
            class="d-block w-100" alt="Autumn with lake." />
          </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
