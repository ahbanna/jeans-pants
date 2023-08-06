import React from "react";
import "./ProductFeatures.css";
import item1 from "../../../assets/item1.png";
import item2 from "../../../assets/item2.png";
import item3 from "../../../assets/item3.png";
import item4 from "../../../assets/item4.png";
import CustomTitle from "../../../components/CustomTitle/CustomTitle";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AiOutlineRightSquare } from "react-icons/ai";

const ProductFeatures = () => {
  return (
    <div className="products-features-area ">
      <div className="container">
        <div className="products">
          <div className="single-product">
            <img src={item4} alt="" srcset="" />
            <CustomTitle title={"মেনস ডেনিম জিন্স প্যান্ট"}></CustomTitle>
          </div>
          <div className="single-product">
            <img src={item3} alt="" srcset="" />
            <CustomTitle
              title={"স্লিম ফিট স্ট্রেচেবল ডেনিম জিন্স"}
            ></CustomTitle>
          </div>
          <div className="single-product">
            <img src={item2} alt="" srcset="" />
            <CustomTitle title={"সেমি ন্যারো ক্লাসিক ফিট বেসিক"}></CustomTitle>
          </div>
          <div className="single-product">
            <img src={item1} alt="" srcset="" />
            <CustomTitle title={"স্ট্রেইট লেগ জিন্স"}></CustomTitle>
          </div>
        </div>
        <div className="features">
          <SectionTitle
            sectionTitle={"আমাদের ডেনিম ও জিন্সের কিছু বৈশিষ্ট্য"}
          ></SectionTitle>
          <div className="product-details">
            <div className="left">
              <p>
                <AiOutlineRightSquare></AiOutlineRightSquare> ডেনিম ফেব্রিক ১০০%
                কটন টুইল বা স্টেচ টুইল দিয়ে তৈরী হয়।
              </p>
              <p>
                <AiOutlineRightSquare></AiOutlineRightSquare> ডেনিম ফেব্রিক দিয়ে
                তৈরী পোশাকে অনেকদিন ব্যবহার করা যায়।
              </p>
              <p>
                <AiOutlineRightSquare></AiOutlineRightSquare> দীর্ঘদিন ব্যবহার
                করা যায়।
              </p>
            </div>
            <div>
              <p>
                <AiOutlineRightSquare></AiOutlineRightSquare> সহজে ভাঁজ পড়ে না।
                ফলে আয়রনের ঝামেলা ছাড়াই পরা যায়।
              </p>
              <p>
                <AiOutlineRightSquare></AiOutlineRightSquare> জিন্স বারবার ধোয়ার
                প্রয়োজন হয় না।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
