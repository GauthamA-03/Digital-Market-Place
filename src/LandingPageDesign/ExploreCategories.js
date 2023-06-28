import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Business, Construction } from "@mui/icons-material";
import logistic from "../../public/Images/logistic.png";
import "../LandingPageDesign/css/CarouselSlider.css";
import { Link } from "react-router-dom";

const ExploreCategories = () => {
  const categories = [
    { name: "Facility Management", icon: <Business /> },
    { name: "Logistics", icon: <img src={logistic} alt="Logistics" /> },
    { name: "Construction", icon: <Construction /> }
  ];

  return (
    <div className="container explore-categories">
      <div className="row">
        <div className="col-9">
          <h1 className="explore-heading">Explore Popular Categories</h1>
        </div>
        <div className="col-3 text-end">
          <Link to="/all-category" className="view-all-link">
            View All
          </Link>
          {/* <BrowserRouter> */}
          {/* <Link to="/all-category" className="view-all-link">
            {" "} */}
          {/* Use the Link component and specify the path to the AllCategory component */}
          {/* View All
          </Link> */}
          {/* </BrowserRouter> */}
        </div>
      </div>
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <div className="category-icon">{category.icon}</div>
                <h3 className="card-title category-name">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
