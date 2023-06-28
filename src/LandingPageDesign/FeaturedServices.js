import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageNull from "../../public/Images/NullImage.png";
import "../LandingPageDesign/css/ProductsCard.css";

const Services = () => {
  const FeaturedServices = [
    {
      image: ImageNull,
      title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!",
      price: "$18.50",
      TimePlaceHolder: "Time Left",
      timeLeft: "6d 13h 52 sec",
      bids: "5 bids",
      shipping: "+$11.60 shipping"
    },
    {
      image: ImageNull,
      title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!",
      price: "$18.50",
      TimePlaceHolder: "Time Left",
      timeLeft: "6d 13h 52 sec",
      bids: "5 bids",
      shipping: "+$11.60 shipping"
    },
    {
      image: ImageNull,
      title: "MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!",
      price: "$18.50",
      TimePlaceHolder: "Time Left",
      timeLeft: "6d 13h 52 sec",
      bids: "5 bids",
      shipping: "+$11.60 shipping"
    }
    // Add more auctions here if u need
  ];

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-9">
          <h1 className="auction-heading">Featured Services</h1>
        </div>
        <div className="col-3 text-end">
          <a href="/" className="view-all-link">
            View All
          </a>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <p className="auction-subtitle">
            See what's popular across thousands of Products
          </p>
        </div>
      </div>
      <div className="row mt-3">
        {FeaturedServices.map((FeatureService, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <img
                src={FeatureService.image}
                className="card-img-top"
                alt="Auction"
              />
              <div className="card-body">
                <h5 className="card-title">{FeatureService.title}</h5>
                <p className="card-text auction-price">
                  {FeatureService.price}
                </p>
                <div className="card-subtitle mb-2 text-muted">
                  <span className="time">{FeatureService.TimePlaceHolder}</span>
                  <br />
                  <span className="time-left">{FeatureService.timeLeft}</span>
                  <br />
                  <span className="subtitle-details">
                    {FeatureService.bids}
                  </span>
                  <br />
                  <span className="subtitle-details">
                    {FeatureService.shipping}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
