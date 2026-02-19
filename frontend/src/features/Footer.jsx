import React from "react";
import "../style/Footer.css";

import fafa from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import you from "../assets/youtube.png";

// import amazon from "../assets/amazon.png";
// import visa from "../assets/visa.jpg";
// import master from "../assets/mastercard.png";
import payment from "../assets/payment.png";

import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="footer-animated-bg">
            <div className="footer">

                {/* TOP ICONS */}
                <div className="footer-top-icons">
                    <div className="icon-box"><i>💎</i><p>Best Quality Material</p></div>
                    <div className="icon-box"><i>💳</i><p>Safe Payment Method</p></div>
                    <div className="icon-box"><i>📦</i><p>Reliable Delivery</p></div>
                    <div className="icon-box"><i>🎧</i><p>24/7 Customer Support</p></div>
                </div>

                {/* MAIN CONTENT */}
                <div className="footer-main">

                    <div className="footer-col">
                        <img src={Logo} alt="Deals Kerala Logo" className="logo-img" />
                        <p>
                            Deals Kerala is a trusted destination for premium-quality spices,
                            dry fruits, tea, and traditional Kerala delicacies. We bring you
                            authentic flavors sourced directly from local farmers and trusted
                            suppliers.
                            <br /><br />
                            Pure taste, pure Kerala — delivered to your doorstep. 🍃🌶️
                        </p>
                    </div>

                    <div className="footer-col">
                        <h3>Let Us Help You</h3>
                        <a href="/terms">Terms & Conditions</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/return">Refund & Return Policy</a>
                        <a href="/ship">Shipping & Delivery</a>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <a href="/about">About Us</a>
                        <a href="/product">Products</a>
                        <a href="/contact">Contact Us</a>
                    </div>

                    <div className="footer-col social-section">
                        <h3>Follow Us</h3>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={fafa} alt="Facebook" className="social-img" />
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className="social-img" />
                            </a>

                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <img src={you} alt="YouTube" className="social-img1" />
                            </a>
                        </div>

                        <a href="tel:+918129230500">+91 8129230500</a>
                        <a href="mailto:storedealskerala@gmail.com">
                            storedealskerala@gmail.com
                        </a>

                        <p>
                            <strong>Deals Kerala</strong><br />
                            Karimattathil, Mannamkandam P.O,<br />
                            Adimali, Munnar, Idukki – 685561<br />
                            Kerala, India
                        </p>
<div className="footer-certifications">
  <p className="fs">
    <strong>FSSAI:</strong>
       <span>21324174000731</span>
  </p>

  <p className="fs">
    <strong>MSME:</strong>
    <span>UDYAM-KL-03-00116191</span>
  </p>
</div>

                    </div>

                </div>

                <hr className="footer-divider" />

                {/* BOTTOM */}
                <div className="footer-bottom">
                    <div className="payment-icons">
                        {/* <img src={amazon} alt="Amazon Pay" />
            <img src={visa} alt="Visa" />
            <img src={master} alt="Mastercard" /> */}
                        <img src={payment} alt="Razorpay" />
                    </div>
                </div>

                <div className="copy">
                    <p>
                        All Rights Reserved © 2026
                        Powered by <strong>ONENEXT DIGITAL VENTURES LLP</strong>
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
