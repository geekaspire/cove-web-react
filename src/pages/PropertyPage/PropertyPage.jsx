import React from "react";
import Drawer from "react-bottom-drawer";

import InputUnderline from "../../components/InputUnderline/InputUnderline";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const PropertyPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  return (
    <div className="ps-page--inner ps-page--projects">
      <div className="ps-page__header">
        <div className="container">
          <h1 className="ps-page__heading">Properties</h1>
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="properties.html">Property</a>
            </li>
          </ul>
          <form className="ps-form--projects-search">
            <div className="ps-form__top">
              <div className="ps-form__top-right">
                <div className="ps-form__items">
                  <div className="ps-form underline with-icon">
                    <i className="lnil lnil-map-marker ps-form__icon"></i>
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder="Search for city, neighborhood..."
                    />
                  </div>
                  <div className="ps-form underline with-icon select">
                    <i className="lnil lnil-map ps-form__icon"></i>
                    <select className="form-control">
                      <option value="placeholder">Location</option>
                      <option value="Chicago">Chicago</option>
                      <option value="new_york">New York</option>
                    </select>
                    <i className="lnil lnil-chevron-down ps-form__select-toggle"></i>
                  </div>
                  <div className="ps-form underline with-icon select">
                    <i className="lnil lnil-apartment ps-form__icon"></i>
                    <select className="form-control">
                      <option value="placeholder">Property Type</option>
                      <option value="the_grounds">The Grounds</option>
                      <option value="private-house">Private House</option>
                      <option value="aparments">Aparments</option>
                    </select>
                    <i className="lnil lnil-chevron-down ps-form__select-toggle"></i>
                  </div>
                </div>
                <div className="ps-form__actions">
                  <a
                    className="ps-form__toggle ps-btn ps-btn--gray ps-form__toggle-btn"
                    href="#"
                  >
                    Cancel<i className="lnil lnil-chevron-down"></i>
                  </a>
                  <button className="ps-btn">Search</button>
                </div>
              </div>
            </div>
            <div className="ps-form__bottom">
              <div className="ps-form__block">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <i className="lnil lnil-bolt ps-form__icon"></i>
                        <select className="form-control">
                          <option value="placeholder">Status</option>
                          <option value="sale">Sell</option>
                          <option value="rent">Rent</option>
                        </select>
                        <i className="lnil lnil-chevron-down ps-form__select-toggle"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <i className="lnil lnil-hospital-bed ps-form__icon"></i>
                        <select className="form-control">
                          <option value="placeholder">Bathroom</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <i className="lnil lnil-chevron-down ps-form__select-toggle"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <i className="icon icon-bathtub ps-form__icon"></i>
                        <select className="form-control">
                          <option value="placeholder">Bedroom</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                        <i className="lnil lnil-chevron-down ps-form__select-toggle"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline">
                        <InputUnderline
                          className="form-control"
                          type="text"
                          placeholder=" "
                        />
                        <label>Property ID</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-form__block row">
                <div className="col-md-6 col-12">
                  <div className="form-group form-group--with-slider">
                    <label>
                      <i className="lnil lnil-coin"></i>Price Range (US Dollar)
                    </label>
                    <div className="ps-form--slider">
                      <div className="ps-form__range">
                        <div
                          className="ps-nouislider noUi-target noUi-ltr noUi-horizontal"
                          id="price_range"
                        >
                          <div className="noUi-base">
                            <div className="noUi-connects">
                              <div
                                className="noUi-connect"
                                // style="transform: translate(0%, 0px) scale(1, 1);"
                              ></div>
                            </div>
                            <div
                              className="noUi-origin"
                              //   style="transform: translate(-1000%, 0px); z-index: 5;"
                            >
                              <div
                                className="noUi-handle noUi-handle-lower"
                                data-handle="0"
                                role="slider"
                                aria-orientation="horizontal"
                                aria-valuemin="0.0"
                                aria-valuemax="1000.0"
                                aria-valuenow="0.0"
                                aria-valuetext="0.00"
                              >
                                <div className="noUi-touch-area"></div>
                              </div>
                            </div>
                            <div
                              className="noUi-origin"
                              //   style="transform: translate(0%, 0px); z-index: 4;"
                            >
                              <div
                                className="noUi-handle noUi-handle-upper"
                                data-handle="1"
                                role="slider"
                                aria-orientation="horizontal"
                                aria-valuemin="0.0"
                                aria-valuemax="1000.0"
                                aria-valuenow="1000.0"
                                aria-valuetext="1000.00"
                              >
                                <div className="noUi-touch-area"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="ps-form__attributes">
                        <span>From :</span>
                        <strong className="ps-form__attribute ps-form__min">
                          <span className="ps-form__unit">$</span>
                          <span className="value">0</span>
                        </strong>
                        -
                        <strong className="ps-form__attribute ps-form__max">
                          <span className="ps-form__unit">$</span>
                          <span className="value">1000</span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group form-group--with-slider">
                    <label>
                      <i className="lnil lnil-size"></i>Land Area (SQFT)
                    </label>
                    <div className="ps-form--slider">
                      <div className="ps-form__range">
                        <div
                          id="land_area_range"
                          className="noUi-target noUi-ltr noUi-horizontal"
                        >
                          <div className="noUi-base">
                            <div className="noUi-connects">
                              <div
                                className="noUi-connect"
                                // style="transform: translate(0%, 0px) scale(1, 1);"
                              ></div>
                            </div>
                            <div
                              className="noUi-origin"
                              //   style="transform: translate(-1000%, 0px); z-index: 5;"
                            >
                              <div
                                className="noUi-handle noUi-handle-lower"
                                data-handle="0"
                                role="slider"
                                aria-orientation="horizontal"
                                aria-valuemin="0.0"
                                aria-valuemax="1000.0"
                                aria-valuenow="0.0"
                                aria-valuetext="0.00"
                              >
                                <div className="noUi-touch-area"></div>
                              </div>
                            </div>
                            <div
                              className="noUi-origin"
                              //   style="transform: translate(0%, 0px); z-index: 4;"
                            >
                              <div
                                className="noUi-handle noUi-handle-upper"
                                data-handle="1"
                                role="slider"
                                aria-orientation="horizontal"
                                aria-valuemin="0.0"
                                aria-valuemax="1000.0"
                                aria-valuenow="1000.0"
                                aria-valuetext="1000.00"
                              >
                                <div className="noUi-touch-area"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="ps-form__attributes">
                        <span>From :</span>
                        <strong className="ps-form__attribute ps-form__min">
                          <span className="value">0</span>
                          <span className="ps-form__unit">sqft</span>
                        </strong>
                        -
                        <strong className="ps-form__attribute ps-form__max">
                          <span className="value">1000</span>
                          <span className="ps-form__unit">sqft</span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-form__block">
                <div className="ps-form__features">
                  <p>Other Feature</p>
                  <div className="ps-form__feature-items">
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-0"
                          name="feature"
                          checked="checked"
                        />
                        <label>Air Condition</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-1"
                          name="feature"
                          checked="checked"
                        />
                        <label>Gym</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-2"
                          name="feature"
                          checked="checked"
                        />
                        <label>Refrigerator</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-3"
                          name="feature"
                          checked="checked"
                        />
                        <label>Doorman</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-4"
                          name="feature"
                          checked="checked"
                        />
                        <label>Barbeque</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-5"
                          name="feature"
                          checked="checked"
                        />
                        <label>Microwave</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-6"
                          name="feature"
                          checked="checked"
                        />
                        <label>Stunning Views</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-7"
                          name="feature"
                          checked="checked"
                        />
                        <label>Central Heating</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-8"
                          name="feature"
                          checked="checked"
                        />
                        <label>Dryer</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-9"
                          name="feature"
                          checked="checked"
                        />
                        <label>Laudry</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-10"
                          name="feature"
                          checked="checked"
                        />
                        <label>Lawn</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-11"
                          name="feature"
                          checked="checked"
                        />
                        <label>Outdoor Shower</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-12"
                          name="feature"
                          checked="checked"
                        />
                        <label>Outdoor Shower</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-13"
                          name="feature"
                          checked="checked"
                        />
                        <label>Waterfront</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-14"
                          name="feature"
                          checked="checked"
                        />
                        <label>Parking</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="feature-15"
                          name="feature"
                          checked="checked"
                        />
                        <label>TV Cable</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-form__submit">
                <button className="ps-btn ps-btn--gray" type="reset">
                  Reset All
                </button>
                <button className="ps-btn ps-btn--gray" type="submit">
                  Save Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="ps-page__content">
        <div className="container">
          <div className="ps-projects ps-projects--with-sidebar">
            <Drawer
              duration={250}
              hideScrollbars={true}
              onClose={closeDrawer}
              isVisible={isVisible}
            >
              <div
                className="ps-projects__left"
                style={{ paddingBottom: 90, paddingTop: 20, paddingLeft: 10 }}
              >
                <aside className="ps-widget ps-widget--project">
                  <h4 className="ps-widget__heading">Property Types</h4>
                  <div className="ps-widget__content">
                    <div className="ps-widget__attributes">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-0"
                          name="type"
                        />
                        <label>
                          The Grounds<span>628</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-1"
                          name="type"
                        />
                        <label>
                          Private Houses<span>1250</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-2"
                          name="type"
                        />
                        <label>
                          Apartments<span>950</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-3"
                          name="type"
                        />
                        <label>
                          Detached Villas<span>95</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-4"
                          name="type"
                        />
                        <label>
                          Duplex Villas<span>175</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-5"
                          name="type"
                        />
                        <label>
                          Townhouses<span>2539</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-6"
                          name="type"
                        />
                        <label>
                          Warehouses<span>205</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-7"
                          name="type"
                        />
                        <label>
                          Shophouses<span>129</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-8"
                          name="type"
                        />
                        <label>
                          Farms<span>92</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-9"
                          name="type"
                        />
                        <label>
                          Motels<span>119</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-10"
                          name="type"
                        />
                        <label>
                          Hotels &amp; Resorts<span>998</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="type-11"
                          name="type"
                        />
                        <label>
                          Office<span>184</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="ps-widget ps-widget--project">
                  <h4 className="ps-widget__heading">Price</h4>
                  <div className="ps-widget__content">
                    <div className="ps-widget__attributes">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-0"
                          name="price"
                        />
                        <label>
                          Under $500<span>1245</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-1"
                          name="price"
                        />
                        <label>
                          $500 - $1K<span>923</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-2"
                          name="price"
                        />
                        <label>
                          $1K - $2K<span>334</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-3"
                          name="price"
                        />
                        <label>
                          $2K - $5K<span>612</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-4"
                          name="price"
                        />
                        <label>
                          $5K - $10K<span>501</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-5"
                          name="price"
                        />
                        <label>
                          $10K - $100K<span>184</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-6"
                          name="price"
                        />
                        <label>
                          $100K - $1M<span>184</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-7"
                          name="price"
                        />
                        <label>
                          $1M - $5M<span>92</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="price-8"
                          name="price"
                        />
                        <label>
                          Over $5M<span>11</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="ps-widget ps-widget--project">
                  <h4 className="ps-widget__heading">Land Area</h4>
                  <div className="ps-widget__content">
                    <div className="ps-widget__attributes">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="area-0"
                          name="area"
                        />
                        <label>
                          Under 100 sqft<span>2450</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="area-1"
                          name="area"
                        />
                        <label>
                          100 sqft - 500 sqft<span>2450</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="area-2"
                          name="area"
                        />
                        <label>
                          500 sqft - 1000 sqft<span>992</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="area-3"
                          name="area"
                        />
                        <label>
                          1000 sqft - 5000 sqft<span>123</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="area-4"
                          name="area"
                        />
                        <label>
                          5000 sqft - 10,000 sqft<span>92</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="area-5"
                          name="area"
                        />
                        <label>
                          Over 10,000 sqft<span>92</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </aside>
                <aside className="ps-widget ps-widget--project">
                  <h4 className="ps-widget__heading">Location</h4>
                  <div className="ps-widget__content">
                    <div className="ps-widget__attributes">
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-0"
                          name="location"
                        />
                        <label>
                          Los Angeles<span>151</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-1"
                          name="location"
                        />
                        <label>
                          California<span>262</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-2"
                          name="location"
                        />
                        <label>
                          Miami<span>99</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-3"
                          name="location"
                        />
                        <label>
                          San Jose<span>315</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-4"
                          name="location"
                        />
                        <label>
                          Wasington<span>923</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-5"
                          name="location"
                        />
                        <label>
                          New York<span>105</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-6"
                          name="location"
                        />
                        <label>
                          Mahattan<span>21</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-7"
                          name="location"
                        />
                        <label>
                          Capri<span>11</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-8"
                          name="location"
                        />
                        <label>
                          Metropolis<span>9</span>
                        </label>
                      </div>
                      <div className="ps-checkbox">
                        <InputUnderline
                          className="form-control"
                          type="checkbox"
                          id="location-9"
                          name="location"
                        />
                        <label>
                          Oakland<span>2</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </Drawer>
            <div className="ps-projects__right">
              <div className="ps-projects__top">
                <div className="ps-projects__top-left">
                  <p>
                    <strong>7,120</strong> Properties found
                  </p>
                </div>
                <div className="ps-projects__top-right">
                  <div className="ps-projects__sorting">
                    <div className="ps-form select">
                      <i className="lnil lnil-chevron-down"></i>
                      <select className="form-control">
                        <option>Sort by Newest</option>
                        <option>Sort by Oldest</option>
                        <option>Sort by Name A-Z</option>
                        <option>Sort by Name Z-A</option>
                      </select>
                    </div>
                  </div>
                  <div className="ps-projects__layout-switchers">
                    <a className="active" onClick={() => openDrawer()}>
                      <i
                        className="bi bi-funnel-fill"
                        style={{ fontSize: 20, color: "#999" }}
                      ></i>
                    </a>
                    <a href="properties-list.html">
                      <i
                        className="bi bi-x-circle-fill"
                        style={{ fontSize: 20, color: "#999" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="ps-projects__items ps-grid" data-columns="3">
                {Array.from({ length: 9 }, (ele, i) => {
                  return <PropertyCard key={ele + i} />;
                })}
              </div>
              <div className="ps-projects__pagination">
                <ul className="ps-pagination">
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lnil lnil-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
