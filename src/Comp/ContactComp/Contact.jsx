import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import resume from "../../assets/EuB.pdf";
import { motion } from "framer-motion";

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
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <div className="Contact-main">
      <div className="contact-main-1"></div>

      <motion.div className="contact-main-2"   variants={container}
      initial="hidden"
      animate="show">
        <div className="contact-sub-main-2-heading">
          <h1>Contact me</h1>
        </div>
        <motion.div className="contact-sub-main-2-content" variants={container}>
          <motion.div className="contact-card" variants={item}>
            <motion.div className="contact-details"  variants={item}>
              <FontAwesomeIcon icon={faLocationDot} className="iconP" />
              <h3>Address</h3>
            </motion.div>
            <p>209,1st lane ,Egodawaththa ,Boralesgamuwa</p>
          </motion.div>

          <motion.div className="contact-card" variants={item}>
            <motion.div className="contact-details"  variants={item}>
              {" "}
              <FontAwesomeIcon icon={faEnvelope} className="iconP" />
              <h3>Email</h3>
            </motion.div>
            <p>uthsaraethmal@gmail.com</p>
          </motion.div>

          <motion.div className="contact-card" variants={item}>
            <motion.div className="contact-details"  variants={item}>
              <FontAwesomeIcon icon={faPhone} className="iconP" />
              <h3>Telephone</h3>
            </motion.div>
            <p>+94 70 431 0732</p>
          </motion.div>

          <motion.div className="contact-card" variants={item}>
            <motion.div className="contact-details"  variants={item}>
              <FontAwesomeIcon icon={faDownload} className="iconP" />
              <h3>Resume</h3>
            </motion.div>
            <a
              href={resume}
              download="Ethmal_Uthsara-CV"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p>Download my resume</p>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
