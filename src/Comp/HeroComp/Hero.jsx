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
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import resume from "../../assets/EuB.pdf";
import { Link } from "react-router-dom";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="hero-main"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="hero-sub-main" variants={container}>
        <motion.h1 variants={item}>Ethmal Uthsara Bopearachchi</motion.h1>
        <motion.h2 variants={item}>Software Engineer</motion.h2>
        <motion.p variants={item}>
          <i>
            A software engineer crafting reliable, scalable, and user-focused
            digital experiences.
          </i>
        </motion.p>

        <motion.div className="button-section" variants={item}>
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
        </motion.div>

        <motion.div className="social-icons" variants={item}>
          <a
            href="https://github.com/UthsaraEthmal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="iconclass">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/_ethmal_uthsara_/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="iconclass">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ethmal-uthsara-823333258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="iconclass">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
