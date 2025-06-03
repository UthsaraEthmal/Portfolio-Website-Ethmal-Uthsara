import React from "react";
import Hero from "./Comp/HeroComp/Hero";
import About from "./Comp/AboutComp/About";
import Service from "./Comp/ServiceComp/Service";
import Projects from "./Comp/ProjectsComp/Projects";
import Contact from "./Comp/ContactComp/Contact";
import Nav from "./Comp/NavComp/Nav";
import Footer from "./Comp/FooterComp/Footer";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Comp/HomePageComp/HomePage";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
