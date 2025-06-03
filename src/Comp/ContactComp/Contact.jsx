import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot ,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/EuB.pdf";

const Contact = () => {
  return (
    <div className="Contact-main">
      <div className="contact-main-1"></div>

      <div className="contact-main-2">
        <div className="contact-sub-main-2-heading">
          
          <h1>Contact me</h1>
        </div>
        <div className="contact-sub-main-2-content">
          <div className="contact-card">
            
            <div className="contact-details"><FontAwesomeIcon icon={faLocationDot} className="iconP" /><h3>Address</h3></div>
            <p>209,1st lane ,Egodawaththa ,Boralesgamuwa</p>
            
          </div>
          <div className="contact-card">
            
            <div className="contact-details"> <FontAwesomeIcon icon={faEnvelope} className="iconP" /><h3>Email</h3></div>
            <p>uthsaraethmal@gmail.com</p>
            
          </div>
          <div className="contact-card">
            
            <div className="contact-details" ><FontAwesomeIcon icon={faPhone} className="iconP" /><h3>Telephone</h3></div>
            <p>+94 70 431 0732</p>
            
          </div>
          <div className="contact-card">
  <div className="contact-details">
    <FontAwesomeIcon icon={faDownload} className="iconP" />
    <h3>Resume</h3>
  </div>
  <a
    href={resume}
    download="Ethmal_Uthsara-CV"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <p>Download my resume</p>
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
