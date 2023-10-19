// import React from "react";

const RoommateAmenitiesSection = () => {
  return (
    <div className="ps-project__information">
      <div className="ps-project__meta">
        <figure>
          <figcaption>Status</figcaption>
          <p>For Rent</p>
        </figure>
        <figure>
          <figcaption>Time</figcaption>
          <p>26/10/2021</p>
        </figure>
        <figure>
          <figcaption>Type</figcaption>
          <p>Private House</p>
        </figure>
        <figure>
          <figcaption>Direction</figcaption>
          <p>South East</p>
        </figure>
        <figure>
          <figcaption>Property ID</figcaption>
          <p>PV53706412</p>
        </figure>
      </div>
      <div className="ps-project__services">
        <p>
          <span>
            <i className="bi bi-bounding-box"></i>195 Sqft
          </span>
        </p>
        <p>
          <span>
            <i className="bi bi-layout-sidebar-inset"></i>3 Bedrooms
          </span>
        </p>
        <p>
          <span>
            <i className="bi bi-water"></i>2 Bathrooms
          </span>
        </p>
        <p>
          <span>
            <i className="bi bi-car-front-fill"></i>1 Parking
          </span>
        </p>
        <p>
          <span>
            <i className="bi bi-water"></i>1 Pool
          </span>
        </p>
      </div>
    </div>
  );
};

export default RoommateAmenitiesSection;
