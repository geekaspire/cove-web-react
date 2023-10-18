import { useState } from "react";
import { Checkbox, DatePicker, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import InputUnderline from "../../components/InputUnderline/InputUnderline";
// import SelectDefault from "../../components/SelectDefault/SelectDefault";

import { getBase64 } from "../../Utils/Reusables";

import "./style.css";

const AuthUpdateUserDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload profile picture
      </div>
    </div>
  );
  return (
    <div className="ps-page ps-page--inner ps-page--auth">
      <div className="ps-page__content">
        <div className="container">
          <div className="ps-dashboard__right">
            <div className="row">
              <div className="col-12">
                <div className="ps-panel--box">
                  <div className="ps-panel__top">
                    <h3 className="ps-panel__heading">User Information</h3>
                  </div>
                  <div className="ps-panel__bottom">
                    <form className="ps-form--user-information">
                      <div className="ps-form__fields">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="form-group">
                              <div className="ps-form underline mb-50">
                                <InputUnderline
                                  className="form-control"
                                  type="text"
                                  placeholder="Full Name"
                                  //   value="Oliver"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="ps-form underline mb-50">
                                <InputUnderline
                                  className="form-control"
                                  type="text"
                                  placeholder="Last Name"
                                  //   value="Ethan"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <div
                                className="ps-form underline mb-50"
                                style={{
                                  flexWrap: "wrap",
                                  gap: 50,
                                  alignItems: "normal",
                                  flexDirection: "column",
                                }}
                              >
                                <div>
                                  <DatePicker
                                    onChange={(date, dateString) =>
                                      console.log(date, dateString)
                                    }
                                    style={{ width: "100%" }}
                                    placeholder="Date of Birth"
                                  />
                                </div>
                                <div>
                                  {/* <SelectDefault
                                    style={{
                                      width: 200,
                                    }}
                                    options={
                                      defaultRoommateSelectItems.suitableFor
                                    }
                                  /> */}
                                  <select
                                    className="form-control"
                                    style={{ fontSize: 14 }}
                                  >
                                    <option>The Grounds</option>
                                    <option>Private Houses</option>
                                    <option>Apartments</option>
                                    <option>Detached Villas</option>
                                    <option>Duplex Villas</option>
                                    <option>Townhouses</option>
                                    <option>Warehouses</option>
                                    <option>Shophouses</option>
                                    <option>Farms</option>
                                    <option>Motels</option>
                                    <option>Hotels &amp; Resorts</option>
                                    <option>Office</option>
                                  </select>
                                </div>
                                <div>
                                  <select
                                    className="form-control"
                                    style={{ fontSize: 14 }}
                                  >
                                    <option>The Grounds</option>
                                    <option>Private Houses</option>
                                    <option>Apartments</option>
                                    <option>Detached Villas</option>
                                    <option>Duplex Villas</option>
                                    <option>Townhouses</option>
                                    <option>Warehouses</option>
                                    <option>Shophouses</option>
                                    <option>Farms</option>
                                    <option>Motels</option>
                                    <option>Hotels &amp; Resorts</option>
                                    <option>Office</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="ps-form underline mb-50">
                                <InputUnderline
                                  className="form-control"
                                  type="text"
                                  placeholder="Email"
                                  //   value="12/12/1991"
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <div className="ps-form underline mb-50">
                                <InputUnderline
                                  className="form-control"
                                  type="text"
                                  placeholder="Phone Number"
                                  //   value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="ps-form__avatar">
                              <div className="ps-form__image">
                                <Upload
                                  name="avatar"
                                  listType="picture-card"
                                  className="avatar-uploader"
                                  showUploadList={false}
                                  //   action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                  //   beforeUpload={beforeUpload}
                                  style={{ width: 200, height: 200 }}
                                  onChange={handleChange}
                                >
                                  {imageUrl ? (
                                    <img
                                      src={imageUrl}
                                      alt="avatar"
                                      style={{
                                        width: "100%",
                                      }}
                                    />
                                  ) : (
                                    uploadButton
                                  )}
                                </Upload>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group ps-form__genders">
                          <div className="form-group">
                            <Checkbox style={{ marginRight: 8 }} />
                            <label>Male</label>
                          </div>
                          <div className="form-group">
                            <Checkbox style={{ marginRight: 8 }} />
                            <label>Female</label>
                          </div>
                          <div className="form-group">
                            <Checkbox style={{ marginRight: 8 }} />
                            <label>Others</label>
                          </div>
                        </div>
                      </div>
                      <div
                        className="ps-form__heading"
                        style={{ margin: "30px 0" }}
                      >
                        <h4>Social Links</h4>
                      </div>
                      <div className="ps-form__fields">
                        <div className="form-group">
                          <div className="ps-form underline mb-50">
                            <InputUnderline
                              className="form-control"
                              type="text"
                              placeholder="Facebook"
                              //   value=""
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="ps-form underline mb-50">
                            <InputUnderline
                              className="form-control"
                              type="text"
                              placeholder="Instagram"
                              //   value=""
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="ps-form underline mb-50">
                            <InputUnderline
                              className="form-control"
                              type="text"
                              placeholder="X.com"
                              //   value=""
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="ps-form underline mb-50">
                            <InputUnderline
                              className="form-control"
                              type="text"
                              placeholder="LinkedIn"
                              //   value=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ps-form__submit">
                        <button
                          className="ps-btn text-capitalize"
                          onClick={() => {
                            navigate("/verify-aadhar");
                          }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthUpdateUserDetails;
