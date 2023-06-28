import React from "react";
import "../LandingPageDesign/css/rectangleBoxes.css";

const RectangleBoxes = () => {
  return (
    <div className="rectangle-container">
      <div className="rectangle">
        <div className="name">Request Anything</div>
      </div>
      <div className="rectangle">
        <div className="name">Create Events</div>
      </div>
      <div className="rectangle">
        <div className="name">Auction Items</div>
      </div>
    </div>
  );
};

export default RectangleBoxes;
