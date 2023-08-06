import React from "react";
import CustomTitle from "../../../components/CustomTitle/CustomTitle";
import CustomButton from "../../../components/CustomButton/CustomButton";
import bannerImage from "../../../assets/banner-bg.png";
import blueJeans from "../../../assets/blue-jeans.png";
import "./Banner.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import phone from "../../../assets/phone.png";

const Banner = () => {
  return (
    // <div className="banner-area">
    <div
      className="banner-area"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-left">
              <CustomTitle
                title={"পুরুষ ও মহিলাদের জন্য ডেনিম জিন্স"}
              ></CustomTitle>
              <h2>স্টাইরিশ ন্যারো ফিটিং সেমি স্টিচড ডেনিম জিন্স প্যান্ট</h2>
              <p>সর্বমোট মূল্য</p>
              <p className="price">
                <span>৳ 750.00</span> ৳ 550.00
              </p>
              <CustomButton btnText={"অর্ডার করুন"}></CustomButton>
              <p className="order-con">
                ঢাকার বাহিরে থেকে অর্ডার করতে চাইলে ১৫০ টাকা অগ্রিম ডেলিভারি
                পরিশোধ করুন
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-right">
              <div className="jeans-img">
                <img src={blueJeans} alt="" />
              </div>
              <div className="phone-no">
                <img src={phone} alt="" />
                <CustomTitle title={"01894844452"}></CustomTitle>
              </div>
              <div className="direct-call">
                <CustomTitle title={"সরাসরি কিনতে ফোন করুন"}></CustomTitle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
