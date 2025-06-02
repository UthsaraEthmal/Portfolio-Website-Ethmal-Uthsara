import React, { useState, useEffect } from 'react';
import './Nav.css';
import {Link,useLocation}from 'React-router-dom'
const Nav = () => {

const location = useLocation();
  const currentPath = location.pathname;



  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <header className={color ? 'header header-bg' : 'header'}>
      <a href="/" className="logo">Ethmal Uthsara</a>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={handleClick}>
        ☰
      </div>

      {/* Navigation Menu */}
      <nav className={click ? 'nav-bar active' : 'nav-bar'}>
        

<Link to="/" className={currentPath === "/" ? "active" : ""}>Home</Link>
      <Link to="/About" className={currentPath === "/About" ? "active" : ""}>About me</Link>
      <Link to="/Service" className={currentPath === "/Service" ? "active" : ""}>Service</Link>
      <Link to="/Projects" className={currentPath === "/Projects" ? "active" : ""}>Projects</Link>
      <Link to="/Contact" className={currentPath === "/Contact" ? "active" : ""}>Contact me</Link>


      </nav>
    </header>
  );
};

export default Nav;
