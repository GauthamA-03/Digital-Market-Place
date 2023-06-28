import React from "react";
import "../../public/css/productfilter.css";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const ProductFilter = () => {
  return (
    <>
      <div className="product-filter">
        <div className="filter-item">All</div>
        <div className="filter-item">Maintainanance services</div>
        <div className="filter-item">Work wear & Uniforms</div>
        <div className="filter-item filter-item view-all">View all</div>
      </div>
      <div className="line"></div>
      <div className="results-container">
        <h1 className="results-title">90,000+ results</h1>
        <div className="sort-container">
          <ListAltOutlinedIcon className="sort-icon" />
        </div>
        <div className="sort-container">
          <SearchOutlinedIcon className="sort-icon" />
        </div>
        <div>
          <UnfoldMoreOutlinedIcon className="sort-icon icon-sort" />
          <h1 className="sort-title icon-sort">Sort</h1>
        </div>
        <div className="filter-container">
          <FilterListIcon id="filterID" />
          <h1 className="filter-name">Filter</h1>
        </div>
      </div>
      <div className="line"></div>
      <div className="tab-container">
        <div className="tab-item active">All</div>
        <div className="tab-item">Auction</div>
        <div className="tab-item">Buy it Now</div>
      </div>
      <div className="tab-line"></div>
    </>
  );
};

export default ProductFilter;
