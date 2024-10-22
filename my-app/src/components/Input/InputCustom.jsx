import React from "react";
import { Input } from "antd";
const InputCustom = ({ labelContent, placeholder, iconPrefix }) => {
  return (
    <div>
      <label htmlFor="" className="font-medium mb-2">
        {labelContent}
      </label>
      <Input size="large" placeholder={placeholder} prefix={iconPrefix} />
    </div>
  );
};

export default InputCustom;
