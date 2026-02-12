import React from "react";
import "../style/Terms.css";

function Terms() {
  return (
    <div className="terms-page">

      {/* Banner */}
      <div className="terms-banner">
        <h1 className="terms-heading">TERMS AND CONDITIONS</h1>
      </div>

      <div className="terms-content">

        <h2 className="terms-title">Welcome to Deals Kerala</h2>

        <p className="terms-text">
          These Terms and Conditions govern your use of the Deals Kerala website
          and mobile application, operated under the domain
          https://www.dealskerala.com.
        </p>

        <p className="terms-text">
          By accessing or using our platform, you agree to comply with and be
          bound by these Terms and Conditions.
        </p>

        <h3 className="terms-subtitle">Terminology</h3>

        <p className="terms-text">
          “User”, “You”, “Your” refers to any person accessing or using Deals Kerala.
        </p>
          “Company”, “We”, “Our”, “Us” refers to Deals Kerala.
          “Platform” refers to the Deals Kerala website and mobile application.
          “Products” refer to spices and related items sold through the platform.
        <h3 className="terms-subtitle">Use of the Platform</h3>

        <ul className="terms-list">
          <li className="terms-list-item">Use the platform only for lawful purposes</li>
          <li className="terms-list-item">No fraudulent or illegal activities</li>
          <li className="terms-list-item">No unauthorized system access</li>
          <li className="terms-list-item">No misuse of product or pricing data</li>
        </ul>

        <h3 className="terms-subtitle">Cookies</h3>

        <p className="terms-text">
          Deals Kerala uses cookies to enhance user experience in accordance with
          our Privacy Policy.
        </p>

        <h3 className="terms-subtitle">Orders & Payments</h3>

        <ul className="terms-list">
          <li className="terms-list-item">Orders are subject to availability</li>
          <li className="terms-list-item">Prices include/exclude taxes as mentioned</li>
          <li className="terms-list-item">Payments via authorized gateways only</li>
          <li className="terms-list-item">Orders may be cancelled if required</li>
        </ul>

        <h3 className="terms-subtitle">Disclaimer</h3>

        <p className="terms-text terms-highlight">
          The information on Deals Kerala is provided “as is” without warranties
          of any kind.
        </p>

        <h3 className="terms-subtitle">Governing Law</h3>

        <p className="terms-text">
          These terms are governed by the laws of India.
        </p>

      </div>
    </div>
  );
}

export default Terms;
