import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ sectionTitle }) => {
  return (
    <div className="section-title">
      <h3>{sectionTitle}</h3>
    </div>
  );
};

export default SectionTitle;
