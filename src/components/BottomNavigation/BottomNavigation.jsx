// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";

const BottomNavigation = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    switch (location?.pathname) {
      case "/":
        setCurrent(1);
        break;
      case "/saved":
        setCurrent(2);
        break;
      case "/listing":
        setCurrent(3);
        break;
      case "/profile":
        setCurrent(4);
        break;
      case "/chat":
        setCurrent(5);
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <nav className="navigation--bottom">
      <div className="navigation__wrapper">
        <div className="navigation__item">
          <Link to="/" className={current === 1 && "active-icon"}>
            <i
              className="bi bi-house-heart icon-size-big"
              style={{ fontSize: 22 }}
            ></i>
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/saved" className={current === 2 && "active-icon"}>
            <i
              className="bi bi-bookmark-heart icon-size-big"
              style={{ fontSize: 18 }}
            ></i>
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/listing" className={current === 3 && "active-icon"}>
            <i
              className="bi bi-plus-circle icon-size-big"
              // style={{ fontSize: 22 }}
            ></i>
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/profile" className={current === 4 && "active-icon"}>
            <i
              className="bi bi-person icon-size-big"
              style={{ fontSize: 23 }}
            ></i>
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/chat" className={current === 5 && "active-icon"}>
            <i
              className="bi bi-chat-heart icon-size-big"
              // style={{ fontSize: 22 }}
            ></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
