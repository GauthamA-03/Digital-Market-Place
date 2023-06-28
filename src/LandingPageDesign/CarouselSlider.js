import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../LandingPageDesign/css/CarouselSlider.css";
import carouselImage1 from "../../public/Images/carousel1.jpg";
import Carousel2 from "../../public/Images/Carousel2.jpg";

const CarouselSlider = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index) => {
        return (
          <li
            className={`indicator ${isSelected ? "selected" : ""}`}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`Slide ${index + 1}`}
          >
            <div className="indicator-circle" />
          </li>
        );
      }}
    >
      <div className="carousel-slide">
        <img src={carouselImage1} alt="Image 1" />
      </div>
      <div className="carousel-slide">
        <img src={Carousel2} alt="Image 2" />
      </div>
      <div className="carousel-slide">
        <img src={carouselImage1} alt="Image 3" />
      </div>
      <div className="carousel-slide">
        <img src={Carousel2} alt="Image 4" />
      </div>
      <div className="carousel-slide">
        <img src={carouselImage1} alt="Image 5" />
      </div>
      <div className="carousel-slide">
        <img src={Carousel2} alt="Image 6" />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
