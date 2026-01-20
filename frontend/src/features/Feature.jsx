import React from "react";
import "../style/Feature.css";
import { useNavigate } from "react-router-dom";
import spiceImg from "../assets/a2.jpg";
// import userImg from "../assets/user.png"; 

const Feature = () => {
      const navigate = useNavigate();
  return (
    <section className="feature-section">
      <div className="feature-container">

        {/* LEFT CARD */}
        <div className="feature-card1">
          <img src={spiceImg} alt="Premium Spices" className="feature-image1" />

        </div>

        {/* RIGHT CONTENT */}
        <div className="feature-content">
          <div className="badge">
            🌿 Certified Products
          </div>

          <p className="badge-text">
            Experience the authentic taste of Kerala with Deals Kerala
            Organic — where purity, flavor, and tradition meet.
          </p>

          <h2>
            💚 Why Choose Deals Kerala <br />
            Online Spices Store!
          </h2>

          <div className="feature-list">
            <ul>
              <li>100% Pure & Natural Spices</li>
              <li>Direct from Kerala Farmers</li>
              <li>Hygienic Grading & Packaging</li>
              <li>Worldwide Delivery</li>
              <li>Best Prices All Year</li>
            </ul>

            <ul>
              <li>Easy Return</li>
              <li>Courier Facility</li>
              <li>Customer Support</li>
              <li>Wholesale & Retail</li>
              <li>UPI Payment Available</li>
            </ul>
          </div>

          <button 
           onClick={() =>
              navigate("/product"
              )
            }
          className="feature-btn">
            🛒 START SHOPPING
          </button>
        </div>

      </div>
    </section>
  );
};

export default Feature;
