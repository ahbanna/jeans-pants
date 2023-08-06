import React from "react";
import "./DenimPoster.css";
import deminPoster from "../../../assets/denim-bg.png";
import CustomButton from "../../../components/CustomButton/CustomButton";

const DenimPoster = () => {
  return (
    <div
      className="demin-poster-area"
      style={{ backgroundImage: `url(${deminPoster})` }}
    >
      <div className="container">
        <div className="top-text">
          <h3>ডেনিম ফেব্রিক জিন্স সাইজ</h3>
          <div className="size">
            <p>30</p>
            <p>32</p>
            <p>34</p>
            <p>36</p>
          </div>
        </div>
        <div className="bottom-text">
          <h3>সবচেয়ে কম দামে আমাদের থেকে কিনুন</h3>
          <CustomButton btnText={"অর্ডার করুন"}></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default DenimPoster;
