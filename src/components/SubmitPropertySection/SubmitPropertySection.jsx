// import React from 'react'

import BGImage from "../../assets/img/bg/submit-now-bg.jpg";

const SubmitPropertySection = () => {
  return (
    <div
      className="ps-submit-property bg--bottom"
      style={{ background: `url(${BGImage})` }}
    >
      <div className="container">
        <div className="ps-section__content">
          <h3>
            Earn <strong>$$$</strong> from your house
          </h3>
          <p>
            Earn more income from sell or for rent your house so extremely easy
            with Cove
          </p>
          <a
            className="ps-btn"
            href="#"
            style={{ fontSize: 18, color: "#fff" }}
          >
            Submit Property Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropertySection;
