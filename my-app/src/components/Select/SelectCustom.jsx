import React from "react";
import { Select } from "antd";
const SelectCustom = ({ labelContent, options }) => {
  return (
    <div>
      <label htmlFor="" className="font-medium mb-2">
        {labelContent}
      </label>
      <Select className="w-full" size="large" options={options} />
    </div>
  );
};

export default SelectCustom;
