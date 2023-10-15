// import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleSearchFilter } from "../../store/reducers/global";
import { Modal, Radio } from "antd";
import InputUnderline from "../InputUnderline/InputUnderline";
import MultiSelectDefault from "../MultiSelectDefault/MultiSelectDefault";
import { defaultRoommateSelectItems } from "../../Utils/Reusables";
import SliderDefault from "../SliderDefault/SliderDefault";
import { useState } from "react";

const SearchFilterModal = () => {
  const dispatch = useDispatch();
  const isSearchModalOpen = useSelector(
    (state) => state.global.searchFilterModal
  );

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleOk = () => {
    dispatch(toggleSearchFilter());
  };
  const handleCancel = () => {
    dispatch(toggleSearchFilter());
  };

  return (
    <Modal
      title="Search filter"
      open={isSearchModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      style={{ zIndex: 1 }}
      width="85vh"
      footer={() => {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="ps-btn ps-btn--fullwidth ps-btn--gray"
              id="close-search-extra"
            >
              Cancel
            </button>
            <button className="ps-btn ps-btn--fullwidth" type="submit">
              Search
            </button>
          </div>
        );
      }}

      // okButtonProps={() => (
      // )}
    >
      <div className="ps-dialog__wrapper">
        <form className="ps-form--projects-search ps-form--projects-search-extra">
          <div className="ps-form__extra">
            <div className="ps-form__fields">
              <div className="ps-form__block">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon">
                        <i
                          className="bi bi-geo-alt-fill"
                          style={{ color: "rgba(0, 0, 0, 0.25)" }}
                        ></i>
                        <InputUnderline placeholder="Location" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.liveWith}
                          placeholder="Who do you want to live with?"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.religion}
                          placeholder="Religions"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.suitableFor}
                          placeholder="Roommate suitable for you"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.foodType}
                          placeholder="Food Preference"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.languages}
                          placeholder="Languages"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.personality}
                          placeholder="Personality & Interests"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <div className="ps-form underline with-icon select">
                        <MultiSelectDefault
                          options={defaultRoommateSelectItems.petType}
                          placeholder="Pets"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <small>Age</small>
                      <div className="ps-form underline with-icon select">
                        <SliderDefault
                          marks={{ 0: 0, 60: 60 }}
                          defaultValue={[18, 28]}
                          max={60}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="form-group">
                      <small>Price (k)</small>
                      <div className="ps-form underline with-icon select">
                        <SliderDefault
                          marks={{ 0: 0, 100: 100 }}
                          defaultValue={[5, 30]}
                          max={100}
                        />
                      </div>
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
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-0"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-0">Air Condition</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-1"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-1">Gym</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-2"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-2">Refrigerator</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-3"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-3">Doorman</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-4"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-4">Barbeque</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-5"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-5">Microwave</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-6"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-6">Stunning Views</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-7"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-7">
                          Central Heating
                        </label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-8"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-8">Dryer</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-9"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-9">Laudry</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-10"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-10">Lawn</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-11"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-11">
                          Outdoor Shower
                        </label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-12"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-12">
                          Outdoor Shower
                        </label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-13"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-13">Waterfront</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-14"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-14">Parking</label>
                      </div>
                    </div>
                    <div className="ps-form__item">
                      <div className="ps-checkbox">
                        <input
                          className="form-control"
                          type="checkbox"
                          id="dialog-feature-15"
                          name="feature"
                          checked="checked"
                        />
                        <label htmlFor="dialog-feature-15">TV Cable</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SearchFilterModal;
