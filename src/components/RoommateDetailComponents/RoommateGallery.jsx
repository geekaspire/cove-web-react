// import React from 'react'

import Slider from "react-slick";
import DemoGallery from "../../assets/img/project/5.jpg";

const RoommateGallery = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="ps-project__gallery" style={{ margin: "40px auto" }}>
      <div className="owl-slider ps-carousel owl-carousel owl-loaded">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <Slider {...settings}>
              {Array.from({ length: 2 }, (ele, i) => {
                return (
                  <div
                    key={ele + i}
                    className="owl-item"
                    style={{ width: 835, marginRight: 16 }}
                  >
                    <div className="ps-block--gallery-image">
                      <img src={DemoGallery} alt="" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateGallery;
