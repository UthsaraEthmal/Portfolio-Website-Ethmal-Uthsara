
import Hero from '../HeroComp/Hero'
import About from '../AboutComp/About'
import Service from '../ServiceComp/Service'
import Projects from '../ProjectsComp/Projects'
import Contact from '../ContactComp/Contact'
import "./HomePage.css";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faCircleArrowUp
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {

const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only after scrolling 100vh
      if (window.scrollY > window.innerHeight) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div>
        <Hero/>
        <About/>
        <Service/>
        <Projects/>
        <Contact/>
        {/* Back to top button */}
    {showTopBtn && (
        <button className='topbtn' onClick={scrollToTop}>
         <FontAwesomeIcon icon={faCircleArrowUp} />
        </button>
      )}
    </div>
  )
}

export default HomePage





