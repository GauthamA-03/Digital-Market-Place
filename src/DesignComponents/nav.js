import React from "react";
import "../../public/css/nav.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <nav className="navbar">
        <div className="back-arrow" onClick={handleGoBack}>
          <ArrowBackIosIcon />
        </div>
        <div className="search-bar">
          <div className="product-dropdown">
            <span className="product-text">Products</span>
            <ArrowDropDownIcon />
          </div>
          <input
            type="text"
            placeholder="Search by Products & services"
            className="search-input"
          />
          <div className="search-icon">
            <SearchIcon />
          </div>
        </div>
        <div className="logo-container">
          <img src="Images/NavLogo.png" alt="Logo" className="logo" />
        </div>
      </nav>
      <div className="text-container">
        <p className="text">
          Facility management > Maintainanance services >{" "}
          <span className="highlight">level 3</span>
        </p>
      </div>
    </>
  );
};

export default Navbar;
