import React from "react";
import ProjectCard from "./ProjectCard/project-card";
import SectionDivider from "../GlobalComponents/SectionDivider/sectionDivider"
import { ProjectsInfoList } from "./ProjectsInfoList";
import "./style.css"

const Projects = () => {

    return (
        <div id="projects" className="project-main-container">
            <div className="section-title-container">
                <SectionDivider/>
                <h1 className="section-title"> 
                    Projects
                </h1>
            </div>

            <h3 style={{marginLeft:"2%", marginBottom:"5%", color: "rgb(163, 163, 163)"}}>
                Here I'll show you all my web apps I've developed since January 2022, this list will also increase over time so stay tuned so you don't miss any future updates
            </h3>
        
            <div className="project-cards-wrapper">
                {
                    ProjectsInfoList.map((project) => {
                        return <ProjectCard key={project.KeyID} project={project}/>
                    })
                }
            </div>
        </div>
    )
}

export default Projects;