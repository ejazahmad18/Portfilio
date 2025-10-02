import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer'
import Home from '../../Components/Home/Home'
import About from '../../Components/About/About'
import Skill from '../../Components/Skills/Skill'
import Project from '../../Components/Project/Project'
import Education from '../../Components/Education/Edu'
import Contact from '../../Components/Contact/Contact'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Education/>
    <Contact/> 
    <Footer/>
    </>
  )
}

export default HomePage