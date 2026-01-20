import React from "react";
import "../style/FeaturedProduct.css";
import { useNavigate } from "react-router-dom";


// images
import pepper from "../assets/featured/f1.jpg";
import chilli from "../assets/featured/f2.jpg";
import masala from "../assets/featured/f3.jpg";
import pickle from "../assets/featured/f4.jpg";
import turmeric from "../assets/featured/f5.jpg";
import cashew from "../assets/featured/f6.jpg";
import oil from "../assets/featured/f7.jpg";



function FeaturedProducts() {
  const products = [
    { img: pepper, title: "Black Pepper", weight: "250g-1kg", price: "₹398 - ₹1392" },
    { img: chilli, title: "Red Chilli", weight: "250g-1kg", price: "₹137 - ₹437" },
    { img: masala, title: "Garam Masala", weight: "250g-1kg", price: "₹347 - ₹1313" },
    { img: pickle, title: "Mango Pickle", weight: "250g-500g", price: "₹224 - ₹392" },
    { img: turmeric, title: "Turmeric Powder", weight: "250g-1kg", price: "₹137 - ₹437" },
    { img: cashew, title: "Cashew Nuts", weight: "250g-1kg", price: "₹373 - ₹1490" },
    { img: oil, title: "Coconut Oil", weight: "250ml-1L", price: "₹147 - 410" },
  ];

  const navigate = useNavigate();

  return (
    <>
      <h1 className="featured-title">Featured Products</h1>

      <div className="featured-wrapper">
        {products.map((item, index) => (
          <div className="container" key={index}>
            <div className="card">

              {/* FRONT */}
              <div className="front">
                <img src={item.img} alt={item.title} className="product-img" />
                <p className="front-heading">{item.title}</p>
              </div>

              {/* BACK */}
              <div className="back">
                <img src={item.img} alt={item.title} className="back-img" />
                <h3 className="back-title">{item.title}</h3>
                <p className="back-weight">{item.weight}</p>
                <p className="back-price">{item.price}</p>
                <button
                  className="view-btn"
                  onClick={() => navigate("/product")}
                >
                  View Product
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;
