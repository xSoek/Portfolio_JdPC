import React from "react"
import Navbar from "./Navbar/navbar"
import AboutMe from "./AboutMe/aboutme"
import Presentation from "./Presentation/presentation"
import Projects from "./Projects/projects"
import Skills from "./Skills/skills"
import Experience from "./Experience/experience"
import Footer from "./Footer/footer"
import "./global.css"


export class Portfolio extends React.Component 
{



    render() 
    {
        return  (
            <>
                <Navbar />
                <Presentation />
                <AboutMe />
                <Projects />
                <Skills />
                <Experience />
                <Footer />
            </>
        )
    }
} 