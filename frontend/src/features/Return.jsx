import React, { useEffect } from "react";
import "../style/Return.css";

function ReturnPolicy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="return-page">

      {/* Banner */}
      <div className="return-banner">
        <h1 className="return-heading">RETURN & REFUND POLICY</h1>
      </div>

      <div className="return-content">

        <h2 className="return-title">Welcome to Deals Kerala</h2>

        <h3 className="return-subtitle">1. Return / Exchange Eligibility</h3>
        <p className="return-text">
          Deals Kerala allows return or replacement only in the following cases:
        </p>

        <ul className="return-list">
          <li className="return-list-item">Wrong product delivered</li>
          <li className="return-list-item">Manufacturing defect</li>
          <li className="return-list-item">
            Damaged product (must be reported within 24 hours with clear images)
          </li>
          <li className="return-list-item">
            Product significantly different from the description
          </li>
        </ul>

        <p className="return-text return-highlight">
          📧 Report issues at: <strong>storedealskerala@gmail.com</strong>
        </p>

        <h3 className="return-subtitle">2. Non-Returnable Situations</h3>
        <ul className="return-list">
          <li className="return-list-item">Customer does not like the product</li>
          <li className="return-list-item">Used, worn, altered, or tampered product</li>
          <li className="return-list-item">Damage after delivery</li>
          <li className="return-list-item">
            Missing original packaging, labels, or invoice
          </li>
          <li className="return-list-item">Opened sealed products</li>
        </ul>

        <h3 className="return-subtitle">3. Conditions for Return / Replacement</h3>
        <ul className="return-list">
          <li className="return-list-item">Product must be unused and original</li>
          <li className="return-list-item">Request within 3 days of delivery</li>
          <li className="return-list-item">Invoice and packaging required</li>
        </ul>

        <h3 className="return-subtitle">4. Refund & Replacement Timeline</h3>
        <ul className="return-list">
          <li className="return-list-item">Refund processed within 48 hours of approval</li>
          <li className="return-list-item">Amount credited in 7–10 working days</li>
          <li className="return-list-item">Replacement subject to availability</li>
        </ul>

        <h3 className="return-subtitle">5. How to Raise a Return Request</h3>
        <ul className="return-list">
          <li className="return-list-item">
            📞 Call: <strong>+91 7510155444</strong>
          </li>
          <li className="return-list-item">
            📧 Email Order ID and issue details
          </li>
        </ul>

        <h3 className="return-subtitle">6. Order Cancellation Policy</h3>
        <ul className="return-list">
          <li className="return-list-item">Before shipment</li>
          <li className="return-list-item">Within 4 hours of placing order</li>
        </ul>

        <p className="return-text">
          ❌ Once shipped, cancellation is not allowed and treated as RTO.
        </p>

        <h3 className="return-subtitle">7. Refund for Cancelled Orders</h3>
        <ul className="return-list">
          <li className="return-list-item">Refund within 24 hours of confirmation</li>
          <li className="return-list-item">Credit within 7–10 working days</li>
          <li className="return-list-item">2% payment gateway fee deducted</li>
        </ul>

        <h3 className="return-subtitle">8. Cancellation by Deals Kerala</h3>
        <ul className="return-list">
          <li className="return-list-item">Product out of stock</li>
          <li className="return-list-item">Non-serviceable location</li>
          <li className="return-list-item">Quantity restrictions</li>
          <li className="return-list-item">Payment or fraud issues</li>
          <li className="return-list-item">Incorrect shipping details</li>
        </ul>

        <h3 className="return-subtitle">9. COD Orders</h3>
        <p className="return-text">
          COD orders may require additional verification. Orders may be cancelled
          if verification fails.
        </p>

        <h3 className="return-subtitle">10. Advance Payment Policy</h3>
        <ul className="return-list">
          <li className="return-list-item">
            Not shipped: advance refunded (2% fee deducted)
          </li>
          <li className="return-list-item">
            Shipped or pickup booked: advance non-refundable
          </li>
          <li className="return-list-item">
            Refused delivery: advance non-refundable
          </li>
        </ul>

        <h3 className="return-subtitle">11. Final Notes</h3>
        <ul className="return-list">
          <li className="return-list-item">All refunds subject to quality checks</li>
          <li className="return-list-item">Company decision is final</li>
        </ul>

        <h3 className="return-subtitle">Contact Us</h3>
        <p className="return-text return-highlight">
          📧 Email: <strong>support@dealskerala.com</strong><br />
          📞 Support: <strong>+91 7510155444</strong><br />
          🌐 Website: <strong>https://www.dealskerala.com</strong>
        </p>

      </div>
    </div>
  );
}

export default ReturnPolicy;
