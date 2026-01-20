import React, { useState } from "react";
import "../style/ContactUs.css";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
 window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Response submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error submitting form!");
    }
  };

  return (
    <>
   <div className="feedback"><h2>FEEDBACK</h2></div>
      <div className="contact-wrapper">
        
        {/* Left Form */}
        <div className="contact-left">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Your Phone"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Submit Now
          </button>
        </div>

        <div className="contact-middle">
  <h3 className="person-name">
    <u>For Trade Enquiry</u>
  </h3>

  <div className="info-item">
    <MdLocationPin className="icon1" />
    <p>
      Deals Kerala<br /> munnar<br />
    </p>
  </div>

  <div className="info-item">
    <MdPhone className="icon" />
    <a href="tel:+917510155444">+91 00000000</a>
  </div>

  <div className="info-item">
    <MdEmail className="icon" />
    <a href="mailto:mmshoppes@gmail.com">dealskerala@gmail.com</a>
  </div>

  <div className="social-icons">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaYoutube />
  </div>
</div>


        {/* Google Map */}
        <div className="contact-right">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.899610460645!2d77.0641779!3d10.08064955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799794d099a6d%3A0x63250e5553c7e0c!2sMunnar%2C%20Kerala%20685612!5e0!3m2!1sen!2sin!4v1767587375804!5m2!1sen!2sin"
        loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
