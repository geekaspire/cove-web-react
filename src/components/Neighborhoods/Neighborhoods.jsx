// import React from "react";

import NImae from "../../assets/img/neighborhoods/1.jpg";

const Neighborhoods = () => {
  return (
    <div className="ps-section ps-neighborhoods with-carousel">
      <div className="container">
        <div className="ps-section__header">
          <h3 className="ps-section__heading">Discover The Neighborhoods</h3>
        </div>
        <div className="ps-section__content">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">Los Angeles</a>
                  </h3>
                  <p>
                    <strong>265</strong> Properties
                  </p>
                  <p>
                    <strong>30 Minutes</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">San Francisco</a>
                  </h3>
                  <p>
                    <strong>104</strong> Properties
                  </p>
                  <p>
                    <strong>1.5 Hours</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">San Jose</a>
                  </h3>
                  <p>
                    <strong>55</strong> Properties
                  </p>
                  <p>
                    <strong>5 Hours</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">Santa Monica</a>
                  </h3>
                  <p>
                    <strong>63</strong> Properties
                  </p>
                  <p>
                    <strong>4.5 Hours</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">San Diego</a>
                  </h3>
                  <p>
                    <strong>86</strong> Properties
                  </p>
                  <p>
                    <strong>45 Minutes</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">California</a>
                  </h3>
                  <p>
                    <strong>334</strong> Properties
                  </p>
                  <p>
                    <strong>2.5 Hours</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">Oakland</a>
                  </h3>
                  <p>
                    <strong>45</strong> Properties
                  </p>
                  <p>
                    <strong>4 Hours</strong> Driving
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="ps-block--neighborhood">
                <div className="ps-block__image">
                  <img src={NImae} alt="" />
                  <a className="ps-block__overlay" href="#"></a>
                </div>
                <div className="ps-block__content">
                  <h3>
                    <a href="#">Huntington Beach</a>
                  </h3>
                  <p>
                    <strong>7</strong> Properties
                  </p>
                  <p>
                    <strong>5.5 Hours</strong> Driving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighborhoods;
