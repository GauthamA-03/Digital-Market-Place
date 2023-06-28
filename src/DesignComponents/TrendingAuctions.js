import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageNull from "../../public/Images/NullImage.png";
import "../../public/css/TrendingAuctions.css";

const Auctions = () => {
  const auctions = [
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
    // Add more auctions here
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        {auctions.map((auction, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-3">
              <img src={auction.image} className="card-img-top" alt="Auction" />
              <div className="card-body">
                <h5 className="card-title">{auction.title}</h5>
                <p className="card-text auction-price">{auction.price}</p>
                <div className="card-subtitle mb-2 text-muted">
                  <span className="time">{auction.TimePlaceHolder}</span>
                  <br />
                  <span className="time-left">{auction.timeLeft}</span>
                  <br />
                  <span className="subtitle-details">{auction.bids}</span>
                  <br />
                  <span className="subtitle-details">{auction.shipping}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;
