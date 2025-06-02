import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
            <p>+94 704720732</p>
            
          </div>
          <div className="contact-card">
           
            <div className="contact-details"> <FontAwesomeIcon icon={faLocationDot} className="iconP" /><h3>None</h3></div>
            <p>I specialize in</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
