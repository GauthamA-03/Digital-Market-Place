import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../public/css/FacilityManagement.css";

const FacilityManagement = () => {
  const navigate = useNavigate();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleGoBack = () => {
    navigate("/all-category");
  };

  const handleDropdownClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="back-arrow" onClick={handleGoBack}>
          <ArrowBackIosIcon />
        </div>
        <h1 className="navbar-title">Facility Management</h1>
      </nav>
      <div className="dropdown" onClick={handleDropdownClick}>
        <div className="dropdown-title">Maintainance services</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
        {showSubMenu && (
          <div className="dropdown-content">
            <Link to="/fmlevel" className="dropdown-item">
              Level 1
            </Link>
            <div className="dropdown-item">Level 2</div>
            <div className="dropdown-item">Level 3</div>
            <div className="dropdown-item">Level 4</div>
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-title">Work wear & Uniforms</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-title">Custodial services</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-title">Facility management</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-title">Facility management</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-title">Facility management</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-title">Facility management</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="dropdown">
        <div className="dropdown-title">Facility management</div>
        <div className="dropdown-arrow">
          <ExpandMoreIcon />
        </div>
      </div>
    </>
  );
};

export default FacilityManagement;
