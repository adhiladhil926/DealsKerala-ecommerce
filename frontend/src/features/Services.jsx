import React, { useState } from "react";
import { FaLeaf,FaTimes, FaBox, FaTruck, FaHeadset, FaCertificate } from "react-icons/fa";
import "../style/Services.css";

const serviceDetails = {
"Product Freshness": [
    "Guaranteed high-quality, natural ingredients",
    "Regular quality checks & food safety standards",
    "Proper storage guidance for maximum shelf life",
    "Batch-wise tracking for freshness assurance",
  ],

  "Packaging": [
    "Airtight and hygienic packaging",
    "Available in retail & bulk pack sizes",
    "Tamper-proof seals for safety",
    "Eco-friendly & food-grade material",
  ],

  "Delivery & Availability": [
    "Fast and reliable nationwide delivery",
    "Stock availability updates",
    "Bulk orders for retailers & wholesalers",
    "Express delivery options on request",
  ],

  "Customer Support": [
    "Assistance with product selection",
    "Easy communication via phone/WhatsApp/email",
    "Replacement support in case of damage",
    "Feedback & complaint resolution",
  ],

  "Quality Assurance": [
    "100% pure & authentic spices",
    "No artificial colors or harmful additives",
    "Processed with hygiene and industry standards",
    "FSSAI certified sourcing partners",
  ],
};

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState("");

  const openModal = (service) => {
    setCurrentService(service);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

const services = [
  { name: "Product Freshness", icon: <FaLeaf /> },
  { name: "Packaging", icon: <FaBox /> },
  { name: "Delivery & Availability", icon: <FaTruck /> },
  { name: "Customer Support", icon: <FaHeadset /> },
  { name: "Quality Assurance", icon: <FaCertificate /> },
];


  return (
    <section className="service-support">
      <h2 className="service-title">Service & Support</h2>
      <p className="service-subtitle">
        Professional support for every products you purchase
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <div
            key={service.name}
            className="service-card"
            onClick={() => openModal(service.name)}
          >
            <div className="icon">{service.icon}</div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <FaTimes/>
            </button>
            <h3>{currentService}</h3>
            <ul>
  {(serviceDetails[currentService] || []).map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
