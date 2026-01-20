import { useEffect, useState } from "react";
import "../style/About.css";
import spiceImg from "../assets/a1.png";
import Feature from "../features/Feature.jsx";

const About = () => {
  const [customers, setCustomers] = useState(0);
  const [orders, setOrders] = useState(0);
  const [categories, setCategories] = useState(0);

  useEffect(() => {
        window.scrollTo(0, 0);
    const animateCount = (setter, target, duration = 2000) => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setter(Math.floor(progress * target));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    animateCount(setCustomers, 5000);
    animateCount(setOrders, 800);
    animateCount(setCategories, 40);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        {/* TEXT */}
        <div className="about-text">
          <h1>We Are Your Favourite Store.</h1>

          <p>
            Welcome to <strong>Spice Munnar</strong>, your trusted online
            destination for the finest organic spices from Kerala, India.
            We bring you the authentic flavors of Kerala’s Western Ghats,
            where the world’s best spices are grown in rich soil, pure
            mountain air, and tropical sunshine.
          </p>

          <p>
            From our farms nestled in the heart of Kerala, we carefully
            cultivate, handpick, and process the freshest and most aromatic
            spices — ensuring natural purity, rich flavor, and unmatched
            quality in every pack.
          </p>

          <p className="highlight">🌿 <strong>Our Promise</strong></p>

          <p>
            At Spice Munnar, we believe great food begins with great
            ingredients. That’s why we offer only 100% pure,
            chemical-free, farm-fresh spices.
          </p>

          <p className="highlight">🌶️ <strong>Our Products</strong></p>

          <p>
            Black Pepper, Cardamom, Cloves, Cinnamon, Nutmeg, Ginger,
            Turmeric, Masala blends, Dry Fruits, Oils, and more.
          </p>

          <p className="highlight">🚚 <strong>From Kerala to Your Kitchen</strong></p>

          <p>
            Delivered fresh across India and worldwide with premium quality
            and care.
          </p>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <img src={spiceImg} alt="Kerala Spices" />
        </div>
      </div>

      {/* STATS */}
      <div className="about-stats">
        <div className="stat">
          <h2>{customers.toLocaleString()}+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat">
          <h2>{orders.toLocaleString()}+</h2>
          <p>Orders Delivered</p>
        </div>

        <div className="stat">
          <h2>{categories}+</h2>
          <p>Product Categories</p>
        </div>
      </div>
      <div>
        <Feature />
      </div>
    </section>
  );
};

export default About;
