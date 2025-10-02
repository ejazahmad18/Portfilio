import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import Skill from '../../Components/Skills/Skill'
import Project from '../../Components/Project/Project'
import Education from '../../Components/Education/Edu'
import Contact from '../../Components/Contact/Contact'

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <About/>
    <Skill/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default AboutPage