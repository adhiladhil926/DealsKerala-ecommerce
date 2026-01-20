import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Category.css";

import c1 from "../assets/categories/c1.webp";
import c2 from "../assets/categories/c2.jpg";
import c3 from "../assets/categories/c3.jpg";
import c4 from "../assets/categories/c4.jpg";
import c5 from "../assets/categories/c5.jpg";
import c6 from "../assets/categories/c7.avif";
import c7 from "../assets/categories/c8.jpg";

const data = [
  { title: "Whole Spices", img: c2 },
  { title: "Spices powder", img: c1 },
  { title: "Spices Masala", img: c3 },
  { title: "pickle", img: c5 },
  { title: "Ayurveda Spices", img: c7 },
  { title: "Dry Fruits", img: c4 },
  { title: "Oil", img: c6 },
];

function Category() {
  const navigate = useNavigate();

  return (
    <section className="category-section">
      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-inner">
          <span>Handpicked Spices ✪ Pure Taste ✪ From Farm to Kitchen</span>
          <span>Nature’s Spices ✪ Traditional Quality ✪ Timeless Flavor</span>
          <span>Handpicked Spices ✪ Pure Taste ✪ From Farm to Kitchen</span>
          <span>Nature’s Spices ✪ Traditional Quality ✪ Timeless Flavor</span>
        </div>
      </div>

      <hr className="premium-divider" />

      {/* Categories */}
      <div className="round-category-wrapper">
        {data.map((item, index) => (
          <div
            className="round-category"
            key={index}
            onClick={() =>
              navigate(
                `/product?category=${encodeURIComponent(item.title)}`
              )
            }
          >
            <div className="round-img">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
