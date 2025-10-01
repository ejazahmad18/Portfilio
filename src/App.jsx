import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import AboutPage from "./Pages/About/AboutPage"
import SkillPage from "./Pages/Skills/SkillPage"
import EducationPage from "./Pages/Educations/EducationPage"
import ContactPage from "./Pages/Contact/ContactPage"
import FooterPage from "./Pages/Footer/FooterPage"
import ProjectPage from "./Pages/Projects/ProjectPage"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/footer" element={<FooterPage />} />

      </Routes>



    </BrowserRouter>
  )
}

export default App
