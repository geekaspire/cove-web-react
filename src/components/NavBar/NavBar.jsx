// import React from "react";
import { Link, useNavigate } from "react-router-dom";

import LogoImage from "../../assets/img/logo.png";
import { FiMenu } from "react-icons/fi";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const NavBar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <header
        className="header header--desktop header--one header--fixed"
        data-sticky="true"
      >
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <div className="header__logo">
                <Link to="/" className="ps-logo light">
                  <img src={LogoImage} alt="" onClick={goHome} />
                </Link>
                <Link className="ps-logo" to="/">
                  <img src={LogoImage} alt="" onClick={goHome} />
                </Link>
              </div>
              <ul className="menu menu--desktop">
                <li className="menu-item-has-children">
                  <Link to="/roommate">Roommates</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/property">Properties</Link>
                </li>
                <li>
                  <Link to="/pg">PG</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <div className="header__actions">
                <div className="header__account">
                  <Link to="login">
                    <Avatar icon={<UserOutlined />} size="default" />
                    {/* <i style={{ fontSize: 20 }} className="bi bi-person"></i>Log
                    In */}
                  </Link>
                </div>
                <div className="header__submit-listing">
                  <button
                    onClick={() => {
                      navigate("/listing");
                    }}
                    className="ps-btn ps-btn--with-opacity"
                  >
                    Submit Listing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header header--mobile" data-sticky="true">
        <div className="header__left">
          <div className="header__logo">
            <Link className="ps-logo" to="/">
              <img src={LogoImage} alt="" />
            </Link>
          </div>
        </div>
        <div className="header__right">
          <a
            className="header__menu-toggle ps-toggle-drawer"
            style={{ color: "#333" }}
          >
            <FiMenu size={23} />
            {/* <i className="bi bi-list" style={{ fontSize: 25 }}></i> */}
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;
