import React from "react";
import "./CustomTitle.css";

const CustomTitle = ({ title }) => {
  return (
    <div className="custom-title">
      <h4>{title}</h4>
    </div>
  );
};

export default CustomTitle;
