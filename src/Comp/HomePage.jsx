import React from 'react'
import Hero from './HeroComp/Hero'
import About from './AboutComp/About'
import Service from './ServiceComp/Service'
import Projects from './ProjectsComp/Projects'
import Contact from './ContactComp/Contact'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Service/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default HomePage