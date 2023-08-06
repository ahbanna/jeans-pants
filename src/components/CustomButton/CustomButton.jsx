import React from "react";
import "./CustomButton.css";

const CustomButton = ({ btnText }) => {
  return (
    <div className="custom-btn">
      <button>{btnText}</button>
    </div>
  );
};

export default CustomButton;
