import React, { useState } from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRibbon,
  faEnvelope,
  faLaptopCode,
  faMobileScreen,
  faChartColumn,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FaLaptopCode } from "react-icons/fa6";
import { motion } from "framer-motion";
const MotionIcon = motion(FontAwesomeIcon);

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

const Service = () => {
  return (
    <motion.div
      className="Service-main"
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="Service-sub-main-1">
        <h1>Services</h1>
      </div>
      <motion.div className="Service-sub-main-2" variants={container}>

        <motion.div className="Service-card" variants={container}>
          <MotionIcon
            icon={faLaptopCode}
            className="service-icon"
            variants={item}
          />
          <h3>Web Development</h3>
          <p>
            I create responsive, visually appealing, and user-friendly websites
            using HTML, CSS, JavaScript, React.js, and WordPress.
          </p>
        </motion.div>

        <motion.div className="Service-card" variants={container}>
          <MotionIcon
            icon={faMobileScreen}
            className="service-icon"
            variants={item}
          />
          <h3>Mobile App Development</h3>
          <p>
            Building cross-platform mobile applications using React Native,
            designed for seamless performance and intuitive user experience on
            both Android and iOS.
          </p>
        </motion.div>

        <motion.div className="Service-card" variants={container}>
          <MotionIcon
            icon={faChartColumn}
            className="service-icon"
            variants={item}
          />
          <h3>ERP & BI Solutions</h3>
          <p>
            Hands-on experience working with Business Intelligence systems and
            ERP tools to improve business operations through data-driven
            solutions.
          </p>
        </motion.div>

        <motion.div className="Service-card" variants={container}>
          <MotionIcon icon={faCode} className="service-icon" variants={item} />
          <h3>Software Solutions</h3>
          <p>
            Designing and developing bespoke software tools like grade
            calculators, ticket systems, and puzzle games with Java and Python.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
