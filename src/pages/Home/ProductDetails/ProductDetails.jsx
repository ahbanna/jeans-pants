import React from "react";
import blueJeansDetails from "../../../assets/blue-jeans-details.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./ProductDetails.css";
import { AiOutlineRightSquare } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <div className="product-details-area">
      <div className="container">
        <p className="details-text">
          আমাদের এই ডেনিম ফেব্রিক ১০০% কটন টুইল বা স্টেচ টুইল দিয়ে তৈরি হয়। এই
          ফেব্রিক দিয়ে তৈরি হয় শার্ট, জিন্স, ব্যাগ, জ্যাকেটসহ আরও অনেক কিছু।
          নিয়মিত ব্যবহারের জন্য জিন্স প্যান্টের কোনো তুলনা হয় না। জিন্স তৈরিতে
          ব্যবহার করা হয় ডেনিম কটন যা সম্পূর্ণ সুতি। ছেলেদের জিন্স প্যান্টের দাম
          ও ডিজাইন দেখে কিনুন বাংলাদেশের অন্যতম সেরা অনলাইন শপ অফুরন্ত থেকে।
        </p>
        <div className="row">
          <div className="col-lg-4">
            <div className="product-detail-img">
              <img src={blueJeansDetails} alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <SectionTitle
              sectionTitle={"আমাদের ডেনিম জিন্স প্যান্টের বিবরন"}
            ></SectionTitle>
            <div className="product-details">
              <div className="left">
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Men's denim
                  pants
                </p>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Size:
                  30-32-34-36
                </p>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Spandax: 2%
                </p>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Fabrics: Denim
                </p>
              </div>
              <div>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Light
                  Distressing
                </p>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Style: Narrow
                  slim fit
                </p>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Vary comfortable
                  to wear
                </p>
                <p>
                  <AiOutlineRightSquare></AiOutlineRightSquare> Nice stylush
                  narrow slim fit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
