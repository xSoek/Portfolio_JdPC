import React from "react";
import SectionDivider from "../GlobalComponents/SectionDivider/sectionDivider"
import "./style.css"

const AboutMe = () => {

    return (
        <div id="aboutme">
            <div className="section-title-container">
                <SectionDivider/>
                <h1 className="section-title"> 
                    About Me
                </h1>
            </div>
            <h3>
                Proactive and decisive Software Developer as I'm always searching and learning new technologies, programming languages.
            </h3>
            <h3>
                Eager to join the world of work and create new innovating ideas.
            </h3>
            <h3>
                Open to work both face-to-face and remotely.
            </h3>
        </div>
    )
}

export default AboutMe;