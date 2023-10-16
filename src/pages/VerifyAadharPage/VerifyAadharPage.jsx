// import React from "react";

import InputUnderline from "../../components/InputUnderline/InputUnderline";

const VerifyAadharPage = () => {
  return (
    <div className="ps-page ps-page--inner ps-page--auth">
      <div className="container">
        <div className="ps-page__header">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Verify Aadhar</li>
          </ul>
        </div>
      </div>
      <div className="ps-page__content">
        <div className="container">
          <form className="ps-form--auth ps-form--login">
            <div className="ps-form__top">
              <h3>Verify your identity with Aadhar</h3>
              <p>We don’t spam your data. We value your privacy</p>
            </div>
            <div
              className="ps-form__fields"
              style={{ display: "flex", flexDirection: "column", gap: 30 }}
            >
              <div className="form-group">
                <div className="ps-form underline">
                  <InputUnderline
                    className="form-control"
                    type="text"
                    placeholder="Aadhar Number"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="ps-form underline">
                  <InputUnderline
                    className="form-control"
                    type="password"
                    placeholder="OTP"
                  />
                </div>
              </div>
            </div>
            <div className="ps-form__submit">
              <button className="ps-btn">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyAadharPage;
