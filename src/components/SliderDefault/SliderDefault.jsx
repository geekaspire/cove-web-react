// import React from 'react'
import { Slider } from "antd";

const SliderDefault = ({ defaultValue, disabled, onChange, marks, max }) => {
  console.log(defaultValue);
  return (
    <Slider
      range
      defaultValue={defaultValue}
      onChange={onChange}
      marks={marks}
      disabled={disabled}
      style={{ width: "100%" }}
      nChange={onChange}
      max={max}
    />
  );
};

export default SliderDefault;
