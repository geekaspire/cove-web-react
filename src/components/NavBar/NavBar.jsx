// import React from "react";

import LogoImage from "../../assets/img/logo.png";

const NavBar = () => {
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
                <a className="ps-logo light" href="index.html">
                  <img src={LogoImage} alt="" />
                </a>
                <a className="ps-logo" href="index.html">
                  <img src={LogoImage} alt="" />
                </a>
              </div>
              <ul className="menu menu--desktop">
                <li className="menu-item-has-children">
                  <a href="blog-grid.html">Roommates</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="properties.html">Properties</a>
                </li>
                <li>
                  <a href="agents.html">PG</a>
                </li>
                <li>
                  <a href="agents.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <div className="header__actions">
                <div className="header__account">
                  <a href="signin.html">
                    <i style={{ fontSize: 20 }} className="bi bi-person"></i>Log
                    In
                  </a>
                </div>
                <div className="header__submit-listing">
                  <button className="ps-btn ps-btn--with-opacity">
                    Submit Listing
                    <i className="bi bi-plus" style={{ fontSize: 25 }}></i>
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
            <a className="ps-logo" href="index.html">
              <img src={LogoImage} alt="" />
            </a>
          </div>
        </div>
        <div className="header__right">
          <a
            className="header__menu-toggle ps-toggle-drawer"
            style={{ color: "#333" }}
          >
            <i className="bi bi-list" style={{ fontSize: 25 }}></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default NavBar;
