import React from "react";
import InputUnderline from "../../components/InputUnderline/InputUnderline";

const RoommatesPage = () => {
  return (
    <div className="ps-page--inner ps-page--projects">
      <div className="ps-page__header">
        <div className="container">
          <form className="ps-form--projects-search">
            <div className="ps-form__top">
              <div className="ps-form__top-left">
                <button className="ps-btn">Sell</button>
                <button className="ps-btn ps-btn--gray">Rent</button>
              </div>
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
                    Advance Search<i className="lnil lnil-chevron-down"></i>
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
          <h1 className="ps-page__heading">Properties In California</h1>
          <ul className="breadcrumb">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="properties.html">Properties</a>
            </li>
            <li>Properties With Sidebar</li>
          </ul>
        </div>
      </div>
      <div className="ps-page__content">
        <div className="container">
          <div className="ps-projects ps-projects--with-sidebar">
            <div className="ps-projects__left">
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
                    <a className="active" href="properties.html">
                      <i className="lnil lnil-thumbnail"></i>
                    </a>
                    <a href="properties-list.html">
                      <i className="lnil lnil-list"></i>
                    </a>
                    <a href="properties-grid-with-map.html">
                      <i className="lnil lnil-map"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="ps-projects__items ps-grid" data-columns="3">
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/1.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">David Villa</a>
                      </h4>
                      <p className="ps-project__address">
                        3 Industrial Road, Boston, MA 5502, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$7,250</strong> / <span>month</span>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>Robertson</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Rent</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>7/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>250 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>3 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>2 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/2.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">Lisa Urban House</a>
                      </h4>
                      <p className="ps-project__address">
                        5300 Lakeside, London, 2240, UK
                      </p>
                      <p className="ps-project__price">
                        <strong>$24,500</strong>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>Ben Jr</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Sell</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>2/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>1250 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>4 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>3 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/3.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">75A Cera Residence</a>
                      </h4>
                      <p className="ps-project__address">
                        75A Cera Residence, Brooklyn, NY 53207, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$54,500</strong>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>ACA Group</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Sell</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>1/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>4250 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>6 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>4 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/4.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">
                          123 Brooklyn Str, Motel
                        </a>
                      </h4>
                      <p className="ps-project__address">
                        123 Brooklyn Str, NY 19204, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$1,250</strong> / <span>month</span>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>US Property</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Rent</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>26/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>515 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>2 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>3 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/5.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">Dmitry Private House</a>
                      </h4>
                      <p className="ps-project__address">
                        5300 Lakeside, London, 2240, UK
                      </p>
                      <p className="ps-project__price">
                        <strong>$1,75,000</strong>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>ACA Group</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Sell</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>11/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>560 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>4 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>3 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/6.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">Block Office 365</a>
                      </h4>
                      <p className="ps-project__address">
                        75A Cera Residence, Brooklyn, NY 53207, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$2,000</strong> / <span>month</span>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>ACA Group</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Rent</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>11/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>160 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>2 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>1 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/7.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">Harry Super Villa</a>
                      </h4>
                      <p className="ps-project__address">
                        Elizaberth Royal Residence, CA 19204, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$1,02,00,000</strong>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>ACA Group</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Sell</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>20/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>24000 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>8 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>5 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/8.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">
                          GoBird Small Office 25m2
                        </a>
                      </h4>
                      <p className="ps-project__address">
                        243 Lakeside, London, 2240, UK
                      </p>
                      <p className="ps-project__price">
                        <strong>$5,700</strong> / <span>month</span>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>US Property</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Rent</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>20/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>24000 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>2 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>3 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/9.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">
                          Indochina Private House
                        </a>
                      </h4>
                      <p className="ps-project__address">
                        577C Beach Side, Miami, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$5,90,000</strong>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>ACA Group</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Sell</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>20/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>860 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>3 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>2 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/10.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">
                          Santorina Blue Homestay
                        </a>
                      </h4>
                      <p className="ps-project__address">
                        192 King Avenue, Mahattan, FL 5603, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$1,350</strong> / <span>month</span>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>ACA Group</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Rent</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>20/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>160 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>3 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>2 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/11.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">Boutique 292 King Ave</a>
                      </h4>
                      <p className="ps-project__address">
                        292 King Avenue, Mahattan, FL 5603, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$2,500</strong> / <span>month</span>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>Robertson</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Rent</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>20/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>64 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>3 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>2 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-grid__item">
                  <div className="ps-project ps-project--grid">
                    <div className="ps-project__thumbnail">
                      <div className="ps-project__image">
                        <img src="img/projects/12.jpg" alt="" />
                      </div>
                      <a
                        className="ps-project__overlay"
                        href="single-property.html"
                      ></a>
                      <div className="ps-project__badges">
                        <a
                          className="ps-project__badge featured"
                          href="javascript:void(0)"
                        >
                          Featured
                        </a>
                      </div>
                      <div className="ps-project__actions">
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-switch"></i>
                        </a>
                        <a href="javascript:void(0)">
                          <i className="lnil lnil-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ps-project__content">
                      <h4 className="ps-project__name">
                        <a href="single-property.html">
                          Townhouse 56 Beverly Hill
                        </a>
                      </h4>
                      <p className="ps-project__address">
                        56 Beverly Hill, Mahattan, FL 5603, USA
                      </p>
                      <p className="ps-project__price">
                        <strong>$2,45,000</strong>
                      </p>
                      <div className="ps-project__meta">
                        <figure>
                          <figcaption>Realtors</figcaption>
                          <p>US Property</p>
                        </figure>
                        <figure>
                          <figcaption>Status</figcaption>
                          <p>For Sell</p>
                        </figure>
                        <figure>
                          <figcaption>Time</figcaption>
                          <p>20/4/2021</p>
                        </figure>
                      </div>
                      <div className="ps-project__services">
                        <p>
                          <span>
                            <i className="lnil lnil-size"></i>64 Sqft
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="lnil lnil-hospital-bed"></i>4 Rooms
                          </span>
                        </p>
                        <p>
                          <span>
                            <i className="icon icon-bathtub"></i>4 Rooms
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default RoommatesPage;
