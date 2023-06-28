import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../LandingPageDesign/css/FeaturedEvents.css";
import CalenderImage from "../../public/Images/Calendar.png";
import ProfileImage from "../../public/Images/Profile.png";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";

const Cards = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-9">
          <h1 className="featured-events-heading">Featured Events</h1>
        </div>
        <div className="col-3 text-end">
          {/* <a href="#" className="view-all-link"> */}
          View All
          {/* </a> */}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <p className="featured-events-subtitle">
            See what's popular across thousands of Events
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="badge">New</div>
                <div className="badge spaced-badge">Scheduled</div>
                <div className="card-title-container">
                  <h5 className="card-title">
                    Requirement of 2000 Diodes at Peenya Plant
                  </h5>
                  <img
                    src={CalenderImage}
                    alt="Calendar"
                    className="calendar-image"
                  />
                </div>
                <p className="card-date">Sat, 02:PM onwards</p>
              </div>
              <div className="profile-info">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <p className="profile-text">
                  Andrew Smith
                  <br />
                  <span className="profile-text-span">Global Foundries</span>
                </p>
              </div>
              <div className="onetoone-container">
                <div className="onetoone-circle">
                  <PeopleAltSharpIcon className="onetoone-logo" />
                </div>
                <p className="onetoone-text">One To One</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="badge">New</div>
                <div className="badge spaced-badge">Scheduled</div>
                <div className="card-title-container">
                  <h5 className="card-title">
                    Requirement of 2000 Diodes at Peenya Plant
                  </h5>
                  <img
                    src={CalenderImage}
                    alt="Calendar"
                    className="calendar-image"
                  />
                </div>
                <p className="card-date">Sat, 02:PM onwards</p>
              </div>
              <div className="profile-info">
                <img
                  src={ProfileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <p className="profile-text">
                  Andrew Smith
                  <br />
                  <span className="profile-text-span">Global Foundries</span>
                </p>
              </div>
              <div className="onetoone-container">
                <div className="onetoone-circle">
                  <PeopleAltSharpIcon className="onetoone-logo" />
                </div>
                <p className="onetoone-text">One To One</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
