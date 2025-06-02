import React from "react";
import "./Footer.css"; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faLinkedin,faInstagram}  from "@fortawesome/free-brands-svg-icons";
import { IoIosArrowForward } from "react-icons/io";
import {Link}from 'React-router-dom'

const Footer = () => {
  return (
    <div className="linefooter">
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & Description */}
        <div className="footer-section">
           <h1></h1>
          <h2 className="down-h2">Ethmal Uthsara</h2>
          <p>A software engineer crafting reliable, scalable, and user-focused digital experiences.</p>
        </div>

        {/* Navigation Links */}
     <div className="footer-section1">
      <h2>Sections</h2>
  <ul>
    <li><Link to="/"><IoIosArrowForward className="footer-arrow" /> Home</Link></li>
    <li><Link to="/About"><IoIosArrowForward className="footer-arrow" /> About me</Link></li>
    <li><Link to="/Service"><IoIosArrowForward className="footer-arrow" /> Service</Link></li>
    <li><Link to="/Projects"><IoIosArrowForward className="footer-arrow" /> Projects</Link></li>
    <li><Link to="/Contact"><IoIosArrowForward className="footer-arrow" /> Contact me</Link></li>
  </ul>
</div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h2 >Soical media</h2>
               <div className="social-icons">
                   <a href="https://github.com/UthsaraEthmal" target="_blank" rel="noopener noreferrer">
             <div className="iconclass">
               <FontAwesomeIcon icon={faGithub} className="icon" />
             </div>
           </a>
                   <a href="https://www.instagram.com/_ethmal_uthsara_/#" target="_blank" rel="noopener noreferrer">
             <div className="iconclass">
               <FontAwesomeIcon icon={faInstagram} className="icon" />
             </div>
           </a>
                    <a href="https://www.linkedin.com/in/ethmal-uthsara-823333258/" target="_blank" rel="noopener noreferrer">
             <div className="iconclass">
               <FontAwesomeIcon icon={faLinkedin} className="icon" />
             </div>
           </a>
                 </div>
        </div>

      </div>

      
      <div className="footer-bottom">
        © {new Date().getFullYear()} Ethmal Uthsara | All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
