import React from "react";
import "./About.css";
import AboutPic from "../../assets/red_pic.jpg";
import { Link } from "react-router-dom";
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-main"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="about-sub-main" variants={container}>
        <motion.div className="about-heading" variants={item}>
          <h1>About Me</h1>
        </motion.div>
        <motion.div className="about-content">
          <div className="about-content-img" variants={item}>
            <img src={AboutPic} className="about-pic" alt="AboutPic" />
          </div>
          <motion.div className="about-content-details" variants={item}>
            <p>
              {" "}
              I’m a passionate Software Engineering undergraduate at the
              University of Westminster. With a solid foundation in web and
              mobile development, I enjoy transforming ideas into impactful
              digital solutions. I thrive in collaborative environments, love
              exploring new technologies, and continuously challenge myself
              through creative projects and lifelong learning..
            </p>
            <Link to="/contact">
              <div className="about-contact-btn">Contact</div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
