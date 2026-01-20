import React from "react";
import "../style/Footer.css";
import fafa from "../assets/facebook.png"
import insta from "../assets/instagram.png"
import you from "../assets/youtube.png"
import amazon from "../assets/amazon.png";
import visa from "../assets/visa.jpg";
import master from "../assets/mastercard.png";
import razor from "../assets/razor.png";
import Logo from "../assets/logo.png"
// import Snowfall from 'react-snowfall'

const Footer = () => {
    return (
        <footer className="footer">
            {/* <Snowfall /> */}
            <div className="footer-top-icons">
                <div className="icon-box"><i>💎</i><p>Best Quality Material</p></div>
                <div className="icon-box"><i>💳</i><p>Safe Payment Method</p></div>
                <div className="icon-box"><i>🚚</i><p>Free Delivery</p></div>
                <div className="icon-box"><i>📦</i><p>Reliable Delivery</p></div>
                <div className="icon-box"><i>🎧</i><p>24/7 Customer Support</p></div>
            </div>
            <div className="footer-main">

                <div className="footer-col">
                    <img src={Logo} alt="logo" className="logo-img" />
                    <p>
                        Deals Kerala is a trusted destination for premium-quality spices, dry fruits, tea, and traditional Kerala delicacies. We bring you authentic flavors sourced directly from local farmers and trusted suppliers to ensure purity, freshness, and real taste in every bite.
                        From everyday kitchen essentials to exotic regional specialties, Deals Kerala proudly delivers the finest products that enrich your meals and bring the true essence of Kerala to your home.
                        Pure taste, pure Kerala — delivered to your doorstep. 🍃🌶️
                    </p>

                </div>
                <div className="footer-col">
                    <h3>Let Us Help You</h3>
                    {/* <a href="#">Shipping policy</a> */}
                    <a href="/terms">Terms and conditions</a>
                    <a href="/privacy" >Privacy and policy</a>
                    <a href="/return">Refund and return policy</a>
                    <a href="/ship">Shipping & Delivery Policy</a>
                </div>
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <a href="#">About us</a>
                    <a href="#">Products</a>
                    <a href="#">Contact us</a>
                    {/* <a href="/login">Login</a> */}
                </div>
                <div className="footer-col social-section">
                    <h3>Follow Us</h3>

                    <div className="social-icons">
                        <a href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={fafa} alt="facebook" className="social-img" />
                        </a>

                        <a href="https://www.instagram.com/" target="_blank"
                            rel="noopener noreferrer">
                            <img src={insta} alt="instagram" className="social-img" />
                        </a>

                        <a href="https://www.facebook.com/" target="_blank"
                            rel="noopener noreferrer">
                            <img src={you} alt="facebook" className="social-img1" />
                        </a>
                    </div>
                    <a href="tel:+917510155444">+91 00000000</a>
                    <a href="mailto:mmshoppes@gmail.com">mmshoppes@gmail.com</a>
                    <br />
                    <strong>  Deals Kerala</strong>
                    <p>
                        ERNAKULAM,KERALA,INDIA<br />
                        683501
                    </p>
                    <strong>GST:93**********</strong>

                </div>
            </div>
            <hr className="footer-divider" />
            <div className="footer-bottom">
                <div className="payment-icons">
                    <img src={amazon} alt="Amazon Pay" />
                    <img src={visa} alt="Visa" />
                    <img src={master} alt="Mastercard" />
                    <img src={razor} alt="razor" />
                </div>

                <p>All Rights Reserved © 2025 , Powered by Wondermill Studio LLP</p>
            </div>
        </footer>
    );
};

export default Footer;
