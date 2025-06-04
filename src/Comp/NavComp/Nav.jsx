import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <a href="/" className="logo">
        Ethmal Uthsara
      </a>

      {/* Hamburger Menu - only when menu is closed */}
      {!click && (
        <div className="hamburger" onClick={handleClick}>
          ☰
        </div>
      )}

      {/* Navigation Menu */}
      <nav className={click ? "nav-bar active" : "nav-bar"}>
        {/* Close button inside nav */}
        <div className="close-btn" onClick={closeMenu}>
          ×
        </div>

        <Link to="/" className={currentPath === "/" ? "active" : ""} onClick={closeMenu}>
          Home
        </Link>
        <Link to="/About" className={currentPath === "/About" ? "active" : ""} onClick={closeMenu}>
          About me
        </Link>
        <Link to="/Service" className={currentPath === "/Service" ? "active" : ""} onClick={closeMenu}>
          Service
        </Link>
        <Link to="/Projects" className={currentPath === "/Projects" ? "active" : ""} onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/Contact" className={currentPath === "/Contact" ? "active" : ""} onClick={closeMenu}>
          Contact me
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
