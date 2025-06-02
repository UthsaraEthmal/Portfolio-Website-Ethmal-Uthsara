import React from "react";
import "./About.css";
import AboutPic from "../../assets/blue.webp";
import {Link}from 'react-router-dom'


const About = () => {



  return (
    
    <div className="about-main">
      
      <div className="about-sub-main">
        <div className="about-heading">
          <h1>About Me</h1>
        </div>
        <div className="about-content" >
         
            <div className="about-content-img" >
            <img src={AboutPic} className="about-pic" alt="AboutPic" />
          </div>
          <div className="about-content-details">
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
  <div className="about-contact-btn">
    Contact
  </div>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
