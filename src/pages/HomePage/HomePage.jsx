// import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleSearchFilter,
  toggleDefaultRoommate,
} from "../../store/reducers/global";

import HomeBGImage from "../../assets/img/bg/home-search-2.jpg";
import SearchFilterModal from "../../components/SearchFilterModal/SearchFilterModal";
import FeaturedRoommates from "../../components/FeaturedRoommates/FeaturedRoommates";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import FeaturedPG from "../../components/FeaturedPG/FeaturedPG";
import Neighborhoods from "../../components/Neighborhoods/Neighborhoods";
import SubmitPropertySection from "../../components/SubmitPropertySection/SubmitPropertySection";

const HomePage = () => {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state?.global);

  return (
    <div id="homepage-two">
      <SearchFilterModal />
      <div
        className="ps-home-search-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img src={HomeBGImage} alt="coveapp-lading-bg" />
        <div className="container ps-section__wrapper">
          <div className="ps-section__content">
            <div className="ps-section__top">
              <h3 style={{ fontWeight: 600 }}>Find, Connect, Live, Enjoy!</h3>
              <p>Cove, the trusted solutions for roommate & property search</p>
            </div>
            <div className="ps-section__form">
              <form className="ps-form--projects-search-3">
                <div className="ps-form__top">
                  <button
                    className={`ps-btn ps-form__type-toggle ${
                      globalState?.isDefaultRoommate && "active"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(toggleDefaultRoommate(true));
                    }}
                  >
                    Roommate
                  </button>
                  <button
                    className={`ps-btn ps-form__type-toggle ${
                      !globalState?.isDefaultRoommate && "active"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(toggleDefaultRoommate(false));
                    }}
                  >
                    Property
                  </button>
                </div>
                <div className="ps-form__bottom">
                  <div className="ps-form__fields">
                    <div className="form-group">
                      <div className="ps-form underline with-icon">
                        <input
                          className="form-control"
                          type="text"
                          placeholder={
                            globalState?.isDefaultRoommate
                              ? "Search roommate"
                              : "Search property"
                          }
                        />
                        <i
                          className="bi bi-search-heart"
                          style={{ color: "#888" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="ps-form__actions">
                    <a
                      className="ps-form__toggle ps-search-open"
                      onClick={() => dispatch(toggleSearchFilter())}
                    >
                      Advance Search<i className="bi bi-chevron-down"></i>
                    </a>
                    <button className="ps-btn ps-btn--fullwidth" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED ROOMMATES SECTION */}
      <FeaturedRoommates />

      {/* FEATURED PROPERTIES SECTION */}
      <FeaturedProperties />

      {/* FEATURED PG SECTION */}
      <FeaturedPG />

      {/* FEATURED NEIGHBORHOOD SECTION */}
      <Neighborhoods />

      {/* FEATURED NEIGHBORHOOD SECTION */}
      <SubmitPropertySection />
    </div>
  );
};

export default HomePage;
