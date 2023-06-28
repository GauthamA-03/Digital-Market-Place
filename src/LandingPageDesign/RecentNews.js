import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../LandingPageDesign/css/RecentNews.css";

const RecentNews = () => {
  return (
    <div className="container recent-news-container">
      <div className="blank-space"></div> {/* Add blank space above */}
      <h2 className="recent-news-heading">Recent News</h2>
      <div className="blank-space"></div> {/* Add blank space below */}
    </div>
  );
};

export default RecentNews;
