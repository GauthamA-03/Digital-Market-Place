import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../../public/css/AllCategory.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BusinessIcon from "@mui/icons-material/Business";
import { categoryData } from "./../Components/AllCategoryData";
import { useNavigate } from "react-router-dom";

const AllCategory = () => {
  const RecentCat = [
    { name: "Facility Management", icon: <BusinessIcon /> },
    { name: "Lights and Lightings", icon: <TipsAndUpdatesIcon /> }
  ];

  const businessIcon = <BusinessIcon />;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false); // New state variable

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const results = searchTerm
      ? categoryData.filter((category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : categoryData;

    setRecentSearches((prevSearches) => [searchTerm, ...prevSearches]);
    setSearchResults(results);
    setIsSearching(true);
    updateRecentSearches(searchTerm);
    setIsSearchActive(true); // Set search active when submitting the search
  };

  const clearSearchResults = () => {
    setRecentSearches([]);
    setSearchTerm("");
    setSearchResults([]);
    setIsSearching(false);
    setIsSearchActive(false); // Set search inactive when clearing the search results
  };

  const updateRecentSearches = (searchTerm) => {
    if (searchTerm.trim() === "") return;
    const updatedSearches = [
      searchTerm,
      ...recentSearches.filter((search) => search !== searchTerm)
    ];
    setRecentSearches(updatedSearches.slice(0, 3));
  };

  const handleFacilityManagementClick = () => {
    navigate("/facility-management", { replace: true });
  };

  const handleGoBack = () => {
    if (isSearchActive) {
      setIsSearchActive(false); // Set search inactive when going back from search results
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar container-fluid">
        <div className="back-arrow" onClick={handleGoBack}>
          {isSearchActive ? <h1> Back </h1> : <ArrowBackIosIcon />}
        </div>
        {recentSearches.length > 0 && isSearchActive && (
          <div className="back-button" onClick={clearSearchResults}>
            <ArrowBackIosIcon className="back-icon" />
          </div>
        )}
        <div className="navbar-right">
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <div>
              <input
                type="text"
                placeholder="Search Categories' insights"
                className="search-input"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-icon">
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="recent-section">
        <div>
          <h1 className="recent-heading">Recent</h1>
        </div>
        <div className="recent-content row">
          {RecentCat.map((RecentCats, index) => (
            <div className="col-md-4" key={index}>
              {RecentCats.name === "Facility Management" ? (
                <div className="card" onClick={handleFacilityManagementClick}>
                  <div className="card-body">
                    <div className="category-icon">{businessIcon}</div>
                    <h3 className="card-title category-name">
                      {RecentCats.name}
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="card">
                  <div className="card-body">
                    <div className="category-icon">{RecentCats.icon}</div>
                    <h3 className="card-title category-name">
                      {RecentCats.name}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <h1 className="all-categories-heading">All Categories</h1>
      <div className="categories-container">
        <div className="row">
          {(isSearching && searchResults.length > 0
            ? searchResults
            : categoryData
          ).map((category, index) => (
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
    </>
  );
};

export default AllCategory;
