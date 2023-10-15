// import React from 'react'
import { Input } from "antd";

// eslint-disable-next-line react/prop-types
const InputUnderline = ({ type, placeholder, onChange, value }) => {
  return (
    <Input
      className="form-control"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputUnderline;
