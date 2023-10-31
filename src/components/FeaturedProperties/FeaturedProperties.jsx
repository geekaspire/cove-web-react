// import React from 'react'

import Slider from "react-slick";
import PropertyCard from "../PropertyCard/PropertyCard";

const FeaturedProperties = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ps-section ps-project-listing with-carousel">
      <div className="container">
        <div className="ps-section__header">
          <h3 className="ps-section__heading">
            Featured Properties
            <a className="ps-section__morelink active" href="properties.html">
              See all 24.560 listing
              <i className="lnil lnil-arrow-top-right"></i>
            </a>
          </h3>
        </div>
        <div className="ps-section__content">
          <div className="owl-slider ps-carousel owl-carousel owl-loaded">
            <div className="owl-stage-outer">
              <div>
                <Slider {...settings} autoplay>
                  {Array.from({ length: 10 }, (ele, i) => {
                    return <PropertyCard key={ele + i} />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
