// import React from "react";
import { Checkbox } from "antd";

import InputUnderline from "../../components/InputUnderline/InputUnderline";

import "./style.css";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="ps-page ps-page--inner ps-page--auth">
      <div className="container">
        <div className="ps-page__header">
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <div className="ps-page__content">
        <div className="container">
          <form className="ps-form--auth ps-form--sinup">
            <div className="ps-form__top">
              <h3>Register New Account</h3>
              <p>
                Let&apos;s get you all set up so you can verify your personal
                account and begin setting up your profile.
              </p>
            </div>
            <div className="ps-form__fields">
              <div className="row">
                <div className="col-sm-6 mt-20">
                  <div className="form-group">
                    <div className="ps-form underline">
                      <InputUnderline
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-20">
                  <div className="form-group">
                    <div className="ps-form underline">
                      <InputUnderline
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-20">
                  <div className="form-group">
                    <div className="ps-form underline">
                      <InputUnderline
                        className="form-control"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-20">
                  <div className="form-group">
                    <div className="ps-form underline">
                      <InputUnderline
                        className="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-20">
                  <div className="form-group">
                    <div className="ps-form underline">
                      <InputUnderline
                        className="form-control"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-20">
                  <div className="form-group">
                    <div className="ps-form underline">
                      <InputUnderline
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Checkbox style={{ marginRight: 8 }} />
                <label>Remember me</label>
              </div>
            </div>
            <div className="ps-form__submit">
              <button className="ps-btn">Create Account</button>
            </div>
            <div className="ps-form__methods">
              <a href="#">
                <i className="lnir lnir-google"></i>
                <span>Continue with Google</span>
              </a>
            </div>
            <div className="ps-form__links">
              <p>
                Already have an account?<Link to="/login"> Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
