import React from "react";
import styleButton from "./button.module.css";

const Card = () => {
  return (
    <div className="bg-green-700 p-5">
      <button className={styleButton.btn_dark}>Thêm nội dung</button>
    </div>
  );
};

export default Card;
