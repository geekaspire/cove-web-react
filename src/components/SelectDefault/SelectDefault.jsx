// import React from 'react'
import { Select } from "antd";

const SelectDefault = ({ options, style }) => {
  return <Select style={style} options={options} defaultValue={options[1]} />;
};

export default SelectDefault;
