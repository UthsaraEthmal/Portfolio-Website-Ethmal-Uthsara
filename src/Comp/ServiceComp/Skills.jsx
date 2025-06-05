import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava ,
faPython,
faHtml5,
faCss,
  faJs,
faReact,
faPhp,
faWordpress,

  faLinkedin,
  faInstagram,
  faFacebook,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

const items = [
  {
    icon: faJava,
    label: "Java",
    description: "Java",
  },
  {
    icon: faPython,
    label: "Python",
    description: "Python",
  },
  {
    icon: faHtml5,
    label: "Html",
    description: "Html",
  },
  {
    icon: faCss,
    label: "CSS",
    description: "CSS",
  },
  {
    icon: faJs,
    label: "Js",
    description: "Java Script",
  },
  {
    icon: faReact,
    label: "React Js",
    description: "React Js",
  },
 {
    icon: faWordpress,
    label: "Wordpress",
    description: "Wordpress",
    
  },
    {
    icon: faPhp,
    label: "php",
    description: "Php",
    
  },
    {
    
    label: "SQL",
    description: "SQL",
    
  },
];

const Skills = () => {
    const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
     cssEase: "linear",
  pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-wrapper">



      
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className="outer-box">
              <div className="icon-box">
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </div>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Skills