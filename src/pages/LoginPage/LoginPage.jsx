// import React from 'react'

import { Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";

import InputUnderline from "../../components/InputUnderline/InputUnderline";

const LoginPage = () => {
  const navigate = useNavigate();
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
          <form className="ps-form--auth ps-form--login">
            <div className="ps-form__top">
              <h3>Login your account</h3>
              <p>Welcome back to Cove! Let&apos;s dive in together.</p>
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
                    placeholder="Email"
                  />
                </div>
              </div>
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
            <div
              className="ps-form__actions"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <div className="form-group">
                <Checkbox style={{ marginRight: 8 }} />
                <label>Remember me</label>
              </div>
              <a href="reset-password.html">Reset Password?</a>
            </div>
            <div className="ps-form__submit">
              <button
                className="ps-btn"
                onClick={() => {
                  navigate("/setup-profile");
                }}
              >
                Log In
              </button>
            </div>
            <div className="ps-form__methods">
              <a href="#">
                <i className="lnir lnir-google"></i>
                <span>Continue with Google</span>
              </a>
            </div>
            <div className="ps-form__links">
              <p>
                Dont have an account yet?<Link to="/signup"> Join now</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
