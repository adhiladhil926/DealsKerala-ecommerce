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
        <h1 className="privacy-heading">PRIVACY POLICY</h1>
      </div>

      <div className="privacy-content">

        <h2 className="privacy-title">Welcome to Deals Kerala</h2>

        <p className="privacy-text">
          Your privacy is important to us. This Privacy Policy explains what
          information is collected and how it is used.
        </p>

        <h3 className="privacy-subtitle">Information We Collect</h3>

        <p className="privacy-text">
          When you visit our website, we may collect:
        </p>

        <ul className="privacy-list">
          <li className="privacy-list-item">IP address</li>
          <li className="privacy-list-item">Browser type</li>
          <li className="privacy-list-item">Pages visited</li>
          <li className="privacy-list-item">Date and time of visit</li>
          <li className="privacy-list-item">Referring URLs</li>
        </ul>

        <p className="privacy-text">
          This information is used only for analytics, site administration, and
          improving user experience.
        </p>

        <h3 className="privacy-subtitle">Cookies and Web Beacons</h3>

        <p className="privacy-text">
          Deals Kerala uses cookies to store information about visitors’
          preferences and optimize user experience.
        </p>

        <h3 className="privacy-subtitle">Advertising Partners</h3>

        <p className="privacy-text">
          We may partner with advertising networks such as Google AdSense.
        </p>

        <p className="privacy-text">
          These third-party ad servers use technologies like cookies, JavaScript,
          or Web Beacons and may automatically receive your IP address.
        </p>

        <p className="privacy-text">
          Deals Kerala has no control over cookies used by third-party advertisers.
        </p>

        <h3 className="privacy-subtitle">Third-Party Privacy Policies</h3>

        <p className="privacy-text">
          Deals Kerala’s Privacy Policy does not apply to other advertisers or
          websites.
        </p>

        <p className="privacy-text">
          We advise you to review the respective Privacy Policies of third-party
          ad servers.
        </p>

        <h3 className="privacy-subtitle">Children’s Information</h3>

        <p className="privacy-text">
          Deals Kerala does not knowingly collect Personal Identifiable
          Information from children under the age of 13.
        </p>

        <p className="privacy-text">
          If you believe your child has provided such information, please contact
          us and we will remove it promptly.
        </p>

        <h3 className="privacy-subtitle">Online Privacy Policy Only</h3>

        <p className="privacy-text">
          This Privacy Policy applies only to online activities and is valid for
          visitors to our website.
        </p>

        <h3 className="privacy-subtitle">Consent</h3>

        <p className="privacy-text">
          By using our website, you consent to this Privacy Policy.
        </p>

        <h3 className="privacy-subtitle">Contact Us</h3>

        <p className="privacy-text privacy-highlight">
          If you have any questions about this Privacy Policy, contact us at:
          support@dealskerala.com
        </p>

      </div>
    </div>
  );
}

export default Privacy;
