import React, { useState, useEffect } from "react";
import "../style/Home.css"
// import Navbar from "../features/Navbar.jsx";
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"

import Services from "../features/Services.jsx";
import FeaturedProducts from "../features/FeaturedProducts.jsx";
import ChooseUs from "../features/ChooseUs.jsx";
import Category from "../features/Category.jsx"
import Feature from "../features/Feature.jsx";

export default function Home() {

    const images = [b3, b2, b1]
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className='hero'
                style={{ backgroundImage: `url(${images[currentIndex]})` }}>

                <div className="hero-content fade-slide">
                    <button className="button" type="button">
                        <div className="wrap">
                            <p>
                                <span>✧</span>
                                <span>✦</span>
                                SHOP NOW ⮞
                            </p>
                        </div>
                    </button>
                </div>
            </section>
            <div>
                <Category />
            </div>
            <div>
                <FeaturedProducts />
            </div>
            <div>
                <ChooseUs />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Feature />
            </div>
            <div className="why-choose-us1">
                <h2 className="title1">Our Manufacturing Partners</h2>

                <div className="features1">
                    <div className="feature1">
                        <img src={c1} alt="bosch" />
                    </div>
                    <div className="feature1">
                        <img src={c2} alt="cat" />
                    </div>
                    <div className="feature1">
                        <img src={c3} alt="johndeere" />
                    </div>
                    <div className="feature1">
                        <img src={c4} alt="kirloskari" />
                    </div>

                </div>
            </div>
        </>
    )
}