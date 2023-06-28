import React from "react";
import "../../public/css/nav.css";
import Navbar from "../DesignComponents/nav.js";
import ProductFilter from "../DesignComponents/productfilter";
import Auctions from "../DesignComponents/TrendingAuctions";

const FMLevel = () => {
  return (
    <>
      <Navbar />
      <ProductFilter />
      <Auctions />
      <Auctions />
      <Auctions />
      <Auctions />
      <div className="line"></div>
    </>
  );
};

export default FMLevel;
