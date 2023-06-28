import React from "react";
import Navbar from "../src/LandingPageDesign/navbar";
import RectangleBoxes from "../src/LandingPageDesign/RectangleBoxes";
import CarouselSlider from "../src/LandingPageDesign/CarouselSlider";
import ExploreCategories from "../src/LandingPageDesign/ExploreCategories";
import Auctions from "../src/LandingPageDesign/Auctions";
import Products from "../src/LandingPageDesign/FeaturedProducts";
import Services from "../src/LandingPageDesign/FeaturedServices";
import Cards from "../src/LandingPageDesign/FeaturedEvents";
import RecentNews from "../src/LandingPageDesign/RecentNews";
import Footer from "../src/LandingPageDesign/footer";

const LPage = () => {
  return (
    <>
      <Navbar />
      <RectangleBoxes />
      <CarouselSlider />
      <ExploreCategories />
      <Auctions />
      <Products />
      <Services />
      <Cards />
      <RecentNews />
      <Footer />
    </>
  );
};

export default LPage;
