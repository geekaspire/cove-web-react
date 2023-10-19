// import React from 'react'
import InputUnderline from "../../InputUnderline/InputUnderline";
import { DatePicker, Rate } from "antd";

import UserImage from "../../../assets/img/user/3.png";

const RoommateDescContentSection = () => {
  return (
    <div className="ps-project__content">
      <div className="ps-project__block ps-project__desc">
        <div className="ps-project__heading">Description</div>
        <p>
          Located at the end of a cul-de-sac just a few minutes North of Harrah
          and the Kickapoo Turnpike between I40 and I44. Cute rustic living
          space floods with natural light during the day. Open concept kitchen
          with an eat-in dining area, breakfast bar, large windows, and plenty
          of storage. The covered front porch is the perfect place to enjoy
          morning coffee surround by wilderness. 1 car garage, storm shelter,
          dog pen, and plenty of wildlife. The house has had a metal roof,
          windows, &amp; HVAC all within the last 10 years.
        </p>
        <p>
          This 14+ acre site would make an ideal place for your new home with
          926 of road frontage. Well already in!! owner has survey wich shows a
          home and pond! Ideal development parcel, Endless possibilities to
          enjoy this land. easy access to US 23.A perfect place to build your
          dream home. Chose the home you want and the landscape as you wish.
          Bring your horses or llamas! close to shopping.
        </p>
      </div>
      <div className="ps-project__block">
        <div className="ps-project__heading">Amenities</div>
        <div className="ps-project__amenities">
          <a href="#">Air Condition</a>
          <a href="#">Gym</a>
          <a href="#">Refrigerator</a>
          <a href="#">Doorman</a>
          <a href="#">Barbeque</a>
          <a href="#">Microwave</a>
          <a href="#">Stunning Views</a>
          <a href="#">Central Heating</a>
          <a href="#">Dryer</a>
          <a href="#">Lawn</a>
          <a href="#">Waterfront</a>
          <a href="#">TV Cable</a>
          <a href="#">Laudry</a>
          <a href="#">Outdoor Shower</a>
          <a href="#">Parking</a>
        </div>
      </div>
      <div className="ps-project__block"></div>
      <div className="ps-project__block">
        <div className="ps-project__heading">Nearby</div>
        <div className="ps-project__nearby">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ps-block--project-nearby">
                <div className="ps-block__top">
                  <p className="ps-block__heading">
                    <i className="bi bi-geo-fill"></i>Famous Places
                  </p>
                </div>
                <div className="ps-block__bottom">
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>Terapin Ocean Mart Supermarket</p>
                      <span>(0.32 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>12</small>
                      </p>
                    </div>
                  </div>
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>New Cerntury Montesorries Shool</p>
                      <span>(0.46 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>4</small>
                      </p>
                    </div>
                  </div>
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>Statue of Liberty</p>
                      <span>(0.15 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>70</small>
                      </p>
                    </div>
                  </div>
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>Michelin Wheel Repair Automotive</p>
                      <span>(0.89 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>1</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="ps-block--project-nearby">
                <div className="ps-block__top">
                  <p className="ps-block__heading">
                    <i className="bi bi-shop-window"></i>
                    Restaurants
                  </p>
                </div>
                <div className="ps-block__bottom">
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>Gaucho Beeftsteak &amp; Bistro Restaurant</p>
                      <span>(0.2 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>10</small>
                      </p>
                    </div>
                  </div>
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>KFC Fast Food Restaurant</p>
                      <span>(0.55 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>19</small>
                      </p>
                    </div>
                  </div>
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>MC Donald Fast Food Restaurant</p>
                      <span>(0.16 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>20</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="ps-block--project-nearby">
                <div className="ps-block__top">
                  <p className="ps-block__heading">
                    <i className="bi bi-film"></i>
                    Entertainments
                  </p>
                </div>
                <div className="ps-block__bottom">
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>Muzino Wine Bar Club</p>
                      <span>(1.76 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>2</small>
                      </p>
                    </div>
                  </div>
                  <div className="ps-block__item">
                    <div className="ps-block__item-left">
                      <p>Kidzoona Kidss Play Area</p>
                      <span>(1.24 mi)</span>
                    </div>
                    <div className="ps-block__item-right">
                      <p>
                        <Rate defaultValue={4} />
                        <small>2</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-project__block ps-project__location">
        <div className="ps-project__heading">Location</div>
        <div className="ps-project__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1697678116881!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="ps-project__block">
        <div className="ps-project__heading">Schedule A Tour</div>
        <form className="ps-form--project-schedule-tour">
          <div className="ps-form__fields">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline select">
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder="Select Time"
                    />
                    <i className="lnil lnil-chevron-down ps-form__select-toggle"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline with-icon">
                    <i className="ps-form__icon lnil lnil-user"></i>
                    <DatePicker
                      onChange={(date, dateString) =>
                        console.log(date, dateString)
                      }
                      style={{ width: "100%" }}
                      placeholder="Date of Birth"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline with-icon">
                    <i className="ps-form__icon lnil lnil-timer"></i>
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder="Select Time"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline with-icon">
                    <i className="ps-form__icon lnil lnil-user"></i>
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline with-icon">
                    <i className="ps-form__icon lnil lnil-mobile-alt-2"></i>
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline with-icon">
                    <i className="ps-form__icon lnil lnil-envelope"></i>
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: "5rem" }}>
              <div className="ps-form text-area underline">
                <textarea
                  className="ps-form form-control underline"
                  rows="4"
                  placeholder=" "
                ></textarea>
                <label>Your message</label>
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: "5rem" }}>
              <div className="ps-checkbox">
                <InputUnderline
                  className="form-control"
                  type="checkbox"
                  id="agree-term"
                  name="agree"
                  checked="checked"
                />
                <label>
                  By submitting this form I agree to{" "}
                  <a href="#">Terms of Use</a>
                </label>
              </div>
            </div>
          </div>
          <div className="ps-form__bottom">
            <button className="ps-btn">Submit A Tour Request</button>
          </div>
        </form>
      </div>
      <div className="ps-project__block">
        <div className="ps-project__heading">Walkscore</div>
        <div className="ps-block--walkscore">
          <div className="ps-block__top">
            <p>174 Broadway St, Richmond, San Francisco, CA 5325, USA</p>
          </div>
          <div className="ps-block__middle">
            <div className="ps-block__links">
              <a className="active" href="#">
                Scores
              </a>
              <a href="#">Nearby</a>
            </div>
            <div className="ps-block__items">
              <div className="ps-block__item">
                <figure
                  className="bg--cover"
                  data-background="img/bg/score.png"
                  // style='background: url("img/bg/score.png");'
                >
                  <span>26</span>
                  <small>walk Score</small>
                </figure>
                <div className="ps-block__item-bottom">
                  <h5>Car-Dependent</h5>
                  <p>Most errands require a car</p>
                </div>
              </div>
              <div className="ps-block__item">
                <figure
                  className="bg--cover"
                  data-background="img/bg/score.png"
                  // style='background: url("img/bg/score.png");'
                >
                  <span>75</span>
                  <small>Transit Score</small>
                </figure>
                <div className="ps-block__item-bottom">
                  <h5>Some Transit</h5>
                  <p>A few nearby public transportation options</p>
                </div>
              </div>
              <div className="ps-block__item">
                <figure
                  className="bg--cover"
                  data-background="img/bg/score.png"
                  // style='background: url("img/bg/score.png");'
                >
                  <span>50</span>
                  <small>Bike Score</small>
                </figure>
                <div className="ps-block__item-bottom">
                  <h5>Somewhat Bikeable</h5>
                  <p>Minimal bike infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-project__block ps-project__review">
        <div className="ps-project__heading">Customer Reviews</div>
        <div className="ps-block--project-reviews">
          <div className="ps-block__top">
            <p>
              <strong>4.5/5</strong>
              <span className="ps-rating">
                <i className="lnil lnil-star-fill active"></i>
                <i className="lnil lnil-star-fill active"></i>
                <i className="lnil lnil-star-fill active"></i>
                <i className="lnil lnil-star-fill active"></i>
                <i className="lnil lnil-star-fill active"></i>
              </span>
              <small> (2 reviews)</small>
            </p>
          </div>
          <div className="ps-block__middle">
            <div className="ps-block--agent-review">
              <div className="ps-block__left">
                <img src={UserImage} alt="" />
              </div>
              <div className="ps-block__right">
                <div className="ps-block__header">
                  <h4>Quality product &amp; very comfortable!</h4>
                  <div className="ps-block__rating">
                    <span className="ps-rating">
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                    </span>
                  </div>
                </div>
                <div className="ps-block__content">
                  <p>
                    Location,fantastic. Accommodation, fantastic. Host,
                    fantastic. If you have a chance to book this beautiful
                    cottage do not hesitate. You will be glad you did. Thank you
                    alison for a great stay and we will definitely be returning.
                    Dave and sue.
                  </p>
                </div>
                <div className="ps-block__bottom">
                  <p>
                    <strong> Paulo Dybala</strong>. on 25 April, 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="ps-block--agent-review">
              <div className="ps-block__left">
                <img src={UserImage} alt="" />
              </div>
              <div className="ps-block__right">
                <div className="ps-block__header">
                  <h4>Awesome Property!</h4>
                  <div className="ps-block__rating">
                    <span className="ps-rating">
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                    </span>
                  </div>
                </div>
                <div className="ps-block__content">
                  <p>
                    Great experience overall. Love the user interface and
                    usability
                  </p>
                </div>
                <div className="ps-block__bottom">
                  <p>
                    <strong>Jamies Vardy</strong>. on 26 April, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ps-block__bottom">
            <form>
              <div className="ps-form__top">
                <h4>Add A Review</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked <sup>*</sup>
                </p>
              </div>
              <div className="ps-form__content">
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <label>Your Rating</label>
                  <div className="ps-form__content">
                    <span className="ps-rating">
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                      <i className="lnil lnil-star-fill active"></i>
                    </span>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form underline">
                    <InputUnderline
                      className="form-control"
                      type="text"
                      placeholder=" "
                    />
                    <label>Title</label>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "5rem" }}>
                  <div className="ps-form text-area underline">
                    <textarea
                      className="ps-form form-control underline"
                      rows="4"
                      placeholder=" "
                    ></textarea>
                    <label>You review here...</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div
                      className="form-group"
                      style={{ marginBottom: "5rem" }}
                    >
                      <div className="ps-form underline">
                        <InputUnderline
                          className="form-control"
                          type="text"
                          placeholder=" "
                        />
                        <label>
                          Your name <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="form-group"
                      style={{ marginBottom: "5rem" }}
                    >
                      <div className="ps-form underline">
                        <InputUnderline
                          className="form-control"
                          type="text"
                          placeholder=" "
                        />
                        <label>
                          Your email <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-form__bottom">
                <button className="ps-btn">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ps-project__review"></div>
    </div>
  );
};

export default RoommateDescContentSection;
