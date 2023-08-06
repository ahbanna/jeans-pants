import React from "react";
import Banner from "../Banner/Banner";
import ProductDetails from "../ProductDetails/ProductDetails";
import DenimPoster from "../DenimPoster/DenimPoster";
import ProductFeatures from "../ProductFeatures/ProductFeatures";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductDetails></ProductDetails>
      <DenimPoster></DenimPoster>
      <ProductFeatures></ProductFeatures>
    </div>
  );
};

export default Home;
