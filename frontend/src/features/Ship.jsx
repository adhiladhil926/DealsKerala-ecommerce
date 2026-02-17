import React, { useEffect } from "react";
import "../style/Privacy.css";

function Privacy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">

      {/* Banner */}
      <div className="privacy-banner">
        <h1 className="privacy-heading">Shipping & Delivery Policy</h1>
      </div>

      <div className="privacy-content">

        <h2 className="privacy-title">Welcome to Deals Kerala</h2>

        <p className="privacy-text">
          Your privacy is important to us. This Privacy Policy explains what
          information is collected and how it is used.
        </p>

        <h3 className="privacy-subtitle">1. Shipping Coverage</h3>

        <p className="privacy-text">
        Deals Kerala delivers products across India. Delivery availability depends on courier partner serviceability for the customer’s location.
        </p>
        
 <h3 className="privacy-subtitle">2. Order Processing Time</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Orders are processed within 24–48 working hours after confirmation</li>
          <li className="privacy-list-item">Orders placed on Sundays or public holidays are processed on the next working day</li>
          <li className="privacy-list-item">Bulk or special orders may require additional processing time</li>
        </ul>
                
 <h3 className="privacy-subtitle">3. Estimated Delivery Time</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Metro cities: 3–6 working days.</li>
          <li className="privacy-list-item">Non-metro & rural areas: 5–10 working days.</li>
          <li className="privacy-list-item">Remote locations: May take longer depending on courier access.</li>
        </ul>

 <h3 className="privacy-subtitle">4. Shipping Charges</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Shipping charges (if applicable) are calculated at checkout.</li>
          <li className="privacy-list-item">Bulk or heavy orders may incur additional logistics charges.</li>
          <li className="privacy-list-item">Any extra charges will be communicated before dispatch.</li>
        </ul>

        <h3 className="privacy-subtitle">5. Dispatch & Tracking</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Once shipped, tracking details will be shared via SMS or email</li>
          <li className="privacy-list-item">Customers can track orders using the provided courier tracking link</li>
          <li className="privacy-list-item">Delays caused by courier partners are beyond Deals Kerala’s control</li>
        </ul>
         <h3 className="privacy-subtitle">6. Delivery Guidelines</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Ensure someone is available at the delivery address to receive the order</li>
          <li className="privacy-list-item">Provide accurate and complete shipping details while placing the order</li>
          <li className="privacy-list-item">Courier partners may contact customers before delivery</li>
        </ul>
               <h3 className="privacy-subtitle">7. Damaged or Missing Packages</h3>
<p>If a package appears damaged or tampered with at the time of delivery:</p>
        <ul className="privacy-list">
          <li className="privacy-list-item">Do not accept the delivery</li>
          <li className="privacy-list-item">Take clear photos of the package</li>
          <li className="privacy-list-item">Report the issue within 24 hours of delivery</li>
        </ul>
         <p className="return-text return-highlight">
          📧 Report to: <strong>support@dealskerala.com</strong>
        </p>

  <h3 className="privacy-subtitle">8. Delivery Delays</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Delays due to weather conditions, strikes, natural calamities, or logistics issues may occur</li>
          <li className="privacy-list-item">Such delays do not qualify for cancellation or compensation</li>
                  </ul>

  <h3 className="privacy-subtitle">9. Cash on Delivery (COD)</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">COD is available for selected products and locations</li>
          <li className="privacy-list-item">Additional verification may be required for COD orders</li>
                    <li className="privacy-list-item">Deals Kerala reserves the right to cancel COD orders if verification fails</li>
                  </ul>
                  
  <h3 className="privacy-subtitle">10. Incorrect Address or Failed Delivery</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Orders with incorrect or incomplete addresses may be delayed or cancelled</li>
          <li className="privacy-list-item">Re-delivery charges may apply if delivery fails due to customer unavailability</li>
                  </ul>

                  
  <h3 className="privacy-subtitle">11. Final Notes</h3>

        <ul className="privacy-list">
          <li className="privacy-list-item">Delivery timelines are estimates, not guarantees</li>
          <li className="privacy-list-item">Deals Kerala reserves the right to modify this policy at any time without prior notice</li>
                  </ul>

        <h3 className="return-subtitle">Contact Us</h3>
        <ul className="return-list">
          <li className="return-list-item">
            📧 Email: <strong>storedealskerala@gmail.com</strong>
          </li>
          <li className="return-list-item">
           📞 Customer Support: <strong>+91 8129230500</strong>
          </li>
          <li className="return-list-item">
          🌐 Website:: <strong>https://www.dealskerala.com</strong>
          </li>
        </ul>


       

      </div>
    </div>
  );
}

export default Privacy;
