// import React from 'react'
import { Link } from "react-router-dom";
import DemoImage from "../../assets/img/property/1.jpg";

const PGCard = () => {
  return (
    <div
      className="owl-item cloned"
      style={{ width: 300, marginRight: "16px" }}
    >
      <div className="ps-project ps-project--grid">
        <div className="ps-project__thumbnail">
          <div className="ps-project__image">
            <img src={DemoImage} alt="" />
          </div>
          <a className="ps-project__overlay" href="single-property.html"></a>
          <div className="ps-project__badges">
            <a className="ps-project__badge featured" href="javascript:void(0)">
              Featured
            </a>
          </div>
          <div className="ps-project__actions">
            <a href="javascript:void(0)">
              <i className="bi bi-exclamation-circle-fill"></i>
            </a>
            <a href="javascript:void(0)">
              <i className="bi bi-heart-fill"></i>
            </a>
          </div>
        </div>
        <div className="ps-project__content">
          <h4 className="ps-project__name">
            <Link to="/pg/test">Lisa Urban House</Link>
          </h4>
          <p className="ps-project__address">5300 Lakeside, London, 2240, UK</p>
          <p className="ps-project__price">
            <strong>$24,500</strong>
          </p>
          <div className="ps-project__meta">
            <figure>
              <figcaption>Realtors</figcaption>
              <p>Ben Jr</p>
            </figure>
            <figure>
              <figcaption>Status</figcaption>
              <p>For Sell</p>
            </figure>
            <figure>
              <figcaption>Time</figcaption>
              <p>2/4/2021</p>
            </figure>
          </div>
          <div className="ps-project__services">
            <p>
              <span>
                <i className="lnil lnil-size"></i>1250 Sqft
              </span>
            </p>
            <p>
              <span>
                <i className="lnil lnil-hospital-bed"></i>4 Rooms
              </span>
            </p>
            <p>
              <span>
                <i className="icon icon-bathtub"></i>3 Rooms
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGCard;
