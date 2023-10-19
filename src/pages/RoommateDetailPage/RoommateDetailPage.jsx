// import React from "react";

import RoommateGallery from "../../components/RoommateDetailComponents/RoommateGallery";
import FeaturedPG from "../../components/FeaturedPG/FeaturedPG";

import RoommateAmenitiesSection from "../../components/RoommateDetailComponents/RoommateAmenitiesSection/RoommateAmenitiesSection";
import RoommateDescContentSection from "../../components/RoommateDetailComponents/RoommateDescContentSection/RoommateDescContentSection";

const RoommateDetailPage = () => {
  return (
    <div className="ps-page--single-property">
      <div className="ps-page__header">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="properties.html">Properties</a>
            </li>
            <li>Single Property</li>
          </ul>
        </div>
      </div>
      <div className="ps-page__content">
        <div className="container">
          <div className="ps-section--single-project ps-project--detail">
            <div className="ps-project__top">
              <RoommateGallery />
              <div className="ps-project__header">
                <div className="ps-project__header-left">
                  <h1 className="ps-project__name">Santorina Blue Homestay</h1>
                  <p className="ps-project__address">
                    192 King Avenue, Mahattan, FL 5603, USA
                  </p>
                  <p className="ps-project__price">
                    <strong>
                      $1,250/ <span>month</span>
                    </strong>
                  </p>
                </div>
                <div className="ps-project__header-right">
                  <div className="ps-project__actions">
                    <a href="#">
                      <i className="bi bi-heart-fill"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-share-fill"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
              <RoommateAmenitiesSection />
            </div>
            <RoommateDescContentSection />
          </div>
          <div className="ps-section with-carousel ps-project-listing">
            <div className="container">
              <div className="ps-section__content">
                <FeaturedPG />
                {/* TOP SIMILAR PROPERTIES & ROOMMATES GOES HERE */}
              </div>
            </div>
          </div>
          <div className="ps-section with-carousel ps-project-listing">
            <div className="container">
              <div className="ps-section__content">
                {/* TOP SIMILAR PROPERTIES & ROOMMATES GOES HERE */}
                <FeaturedPG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetailPage;
