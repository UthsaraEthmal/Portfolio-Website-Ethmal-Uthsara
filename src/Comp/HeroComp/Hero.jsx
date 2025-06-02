import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRibbon,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import resume from "../../assets/EuB.pdf";
import { Link } from "React-router-dom";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-sub-main">
        <motion.h1>Ethmal Uthsara Bopearachchi</motion.h1>
        <h2>Software Engineer</h2>
        <p>
          A software engineer crafting reliable, scalable, and user-focused
          digital experiences.
        </p>
        <div className="button-section">
          <a
            href={resume}
            download="Ethmal_Uthsara-CV"
            style={{ textDecoration: "none" }}
          >
            <div className="btndiv">Resume</div>
          </a>

          <Link to="/contact">
            <div className="btndiv">Contact</div>
          </Link>
        </div>
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
  );
};

export default Hero;
