import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../LandingPageDesign/css/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">
            You can all our call center, we are open on weekdays from 9:00AM to
            8:00PM and on weekends from 9:00AM to 1:00PM
          </p>
          <p className="footer-text">+1-340-618-7841</p>
          <p className="footer-text">hello-bidpro@mail.com</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Useful Links</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Useful Links</h4>
          <ul className="footer-links">
            <li>Home Page</li>
            <li>Store Listing</li>
            <li>List View</li>
            <li>Blog</li>
            <li>Single Post</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="footer-text">Join our Newsletter to get updates:</p>
          <div className="footer-newsletter">
            <input
              type="text"
              className="newsletter-input"
              placeholder="Your email"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
