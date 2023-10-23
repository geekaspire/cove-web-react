// import React from "react";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiShoppingCart,
  FiPlusCircle,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";

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
            <FiHome size={20} />
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/saved" className={current === 2 && "active-icon"}>
            <FiShoppingCart size={20} />
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/listing" className={current === 3 && "active-icon"}>
            <FiPlusCircle size={20} />
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/profile" className={current === 4 && "active-icon"}>
            <FiMessageCircle size={20} />
          </Link>
        </div>
        <div className="navigation__item">
          <Link to="/chat" className={current === 5 && "active-icon"}>
            <FiUser size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
