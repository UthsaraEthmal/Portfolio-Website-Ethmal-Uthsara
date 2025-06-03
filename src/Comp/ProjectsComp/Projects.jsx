import React from "react";
import "./Projects.css"; // Ensure this is the correct path
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides per view for better layout
    slidesToScroll: 1,
    centerMode: true, // Ensures spacing between slides
    centerPadding: 20, // Adjust space between items
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="outer-loop">
    <div className="container">
      
      <div className="contact-sub-main-2-heading">
        <h1>Projects</h1>
      </div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="cardp">
            <h3>University Grade Calculator</h3>
            <p>
              A Python script that calculates university grades via command line
              by taking inputs of exams, then computes the final grade based on
              the specified criteria. Two separate paths for students and for
              the academic staff
            </p>

            <a
              href="https://github.com/UthsaraEthmal/University-Grade-Calculator.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
          <div className="cardp">
            <h3 className="projectstyleh1">Theatre Tickets Booking System</h3>
            <p>
              A Java-based Theatre Tickets Booking System manages ticket
              reservations and availability through a command-line interface,
              facilitating easy booking (including file handling, and exception
              handling).
            </p>
            <a
              href="https://github.com/UthsaraEthmal/Theatre-Tickets-Booking-System.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
          <div className="cardp">
            <h3> AutoInsight Pro(group project)</h3>
            <p>
              AutoInsight Pro" is a mobile-based software application that
              utilizes React Native for the front-end, Spring Boot for the
              back-end, and Python for machine learning. It offers real-time
              monitoring and several other features for vehicles.
            </p>

            <a
              href="https://github.com/Thenu27/AutoInsightPro-Real-time-Vehicle-Monitoring-Application.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
          <div className="cardp">
            <h3> Online Shopping Managing System</h3>
            <p>
              An online shopping management system, developed in Java, utilizes
              "object-oriented programming principles" and Java Swing for the
              user interface. It offers two separate versions for staff and
              customers.
            </p>

            <a
              href="https://github.com/UthsaraEthmal/Online-Shopping-Managing-System.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
          <div className="cardp">
            <h3> "SnakeHub" Web Page (group project)</h3>
            <p>
              "SnakeHub" is an educational website created using HTML, CSS, and
              JavaScript, offering interactive content and resources focused on
              snake conservation and ecology, along with an educational quiz
            </p>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
          <div className="cardp">
            <h3>Sliding Puzzles</h3>
            <p>
              Puzzle game designed to find the shortest path between the
              starting and ending points, utilizing the Dijkstra algorithm. The
              game is developed in Java.
            </p>

            <a
              href="https://github.com/UthsaraEthmal/Sliding-Puzzle.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
           <div className="cardp">
            <h3>Portfolio Web -Site</h3>
            <p>
             "Ethmal_Uthsara" is a personal portfolio website built using React.js, HTML, CSS, and JavaScript. It features responsive design, interactive content, smooth animations, and downloadable resources.
            </p>

            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              Explore
            </a>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Projects;
