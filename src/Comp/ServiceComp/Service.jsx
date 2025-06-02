import React, { useState } from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHouse,
  faRibbon,
  faEnvelope,
  faLaptopCode,
  faMobileScreen,
  faChartColumn,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { FaLaptopCode } from "react-icons/fa6";


const Service = () => {
  return (
    <div className="Service-main">
      <div className="Service-sub-main-1">
        <h1>Services</h1>
      </div>
      <div className="Service-sub-main-2">
        <div className="Service-card">
          <FontAwesomeIcon icon={faLaptopCode} className="service-icon" />
          <h3>Web Development</h3>
                    <p>
            I create responsive, visually appealing, and user-friendly websites
            using HTML, CSS, JavaScript, React.js, and WordPress.
          </p>
        </div>

        <div className="Service-card">
          <FontAwesomeIcon icon={faMobileScreen} className="service-icon" />
          <h3>Mobile App Development</h3>
          <p>
            Building cross-platform mobile applications using React Native,
            designed for seamless performance and intuitive user experience on
            both Android and iOS.
          </p>
        </div>

        <div className="Service-card">
          <FontAwesomeIcon icon={faChartColumn} className="service-icon" />
          <h3>ERP & BI Solutions</h3>
          <p>
            Hands-on experience working with Business Intelligence systems and
            ERP tools to improve business operations through data-driven
            solutions.
          </p>
        </div>

        <div className="Service-card">
          <FontAwesomeIcon icon={faCode} className="service-icon" />
          <h3>Software Solutions</h3>
          <p>
            Designing and developing bespoke software tools like grade
            calculators, ticket systems, and puzzle games with Java and Python.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
