import React from 'react'
import Navbar from '../../Components/Navbar/Nav'
import Project from '../../Components/Project/Project'
import Education from '../../Components/Education/Edu'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const ProjectPage = () => {
  return (
   <>
   <Navbar/>
   <Project/>
    <Education/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default ProjectPage