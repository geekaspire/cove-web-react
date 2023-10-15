// import React from "react";
import { Select } from "antd";

const MultiSelectDefault = ({ placeholder, options, defaultValue }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      mode="multiple"
      allowClear
      style={{
        width: "100%",
      }}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleChange}
      options={options}
    />
  );
};

export default MultiSelectDefault;
