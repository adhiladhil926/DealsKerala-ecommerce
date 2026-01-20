import React from "react";
import { FaTruck, FaUserShield, FaMoneyBillWave, FaUndo } from "react-icons/fa";
import "../style/Chooseus.css";

const ChooseUs = () => {
  const features = [
    { icon: <FaTruck />, title: "Free Shipping", subtitle: "Above ₹ 1000 Only" },
    { icon: <FaUserShield />, title: "100% Genuine", subtitle: "100% Guarantee" },
    { icon: <FaMoneyBillWave />, title: "Huge Savings", subtitle: "At Lowest Price" },
    { icon: <FaUndo />, title: "Easy Returns", subtitle: "No Questions Asked" },
  ];

  return (
    <section className="why-choose-us">
      <div className="features">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <span className="feature-icon">{item.icon}</span>
            <div className="feature-text">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
