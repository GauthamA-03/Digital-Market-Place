import React from "react";
import "../LandingPageDesign/css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-icon">
          <MenuIcon />
        </button>
      </div>
      <div className="navbar-center">
        <div className="search-box">
          <div className="product-dropdown">
            <span className="product-text">Product</span>
            <ArrowDropDownIcon className="dropdown-icon" />
          </div>
          <input type="text" placeholder="Search" className="search-input" />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <div className="navbar-right">
        <FilterListIcon id="filterID" />
        <h1 className="filter-name">Filter</h1>
      </div>
    </nav>
  );
};

export default Navbar;
