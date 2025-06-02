import React, { useState } from "react";
import "./Service1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRibbon,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Service1 = () => {
  return (
    <div className="Service-main">
      <div className="Service-sub-main-1">
        <h1>Services</h1>
      </div>

      <div className="warp-service">
        <div className="Service-sub-main-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            
          </svg>
          <div className="Service-card">
            <FontAwesomeIcon icon={faHouse} className="service-icon" />
            <h3>Web Development</h3>
            <p>
              I create responsive, visually appealing, and user-friendly
              websites using HTML, CSS, JavaScript, React.js, and WordPress.
            </p>
          </div>

          <div className="Service-card">
            <FontAwesomeIcon icon={faHouse} className="service-icon" />
            <h3>Mobile App Development</h3>
            <p>
              Building cross-platform mobile applications using React Native,
              designed for seamless performance and intuitive user experience on
              both Android and iOS.
            </p>
          </div>

          <div className="Service-card">
            <FontAwesomeIcon icon={faHouse} className="service-icon" />
            <h3>ERP & BI Solutions</h3>
            <p>
              Hands-on experience working with Business Intelligence systems and
              ERP tools to improve business operations through data-driven
              solutions.
            </p>
          </div>

          <div className="Service-card">
            <FontAwesomeIcon icon={faHouse} className="service-icon" />
            <h3>Software Solutions</h3>
            <p>
              Designing and developing bespoke software tools like grade
              calculators, ticket systems, and puzzle games with Java and
              Python.
            </p>
          </div>
        </div>

        <div className="Service-sub-main-3">
          <p>
            {" "}
            I build modern websites, mobile apps, and custom software solutions
            that are fast, responsive, and easy to use. From web development to
            ERP and BI tools, I focus on creating practical, effective solutions
            that deliver real value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service1;
