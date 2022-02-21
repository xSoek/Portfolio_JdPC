import React from "react";
import icon_prog from "../../media/images/prog_lang_icon.png"
import icon_database from "../../media/images/database_icon.png"
import SectionDivider from "../GlobalComponents/SectionDivider/sectionDivider"
import icon_ui from "../../media/images/ui_icon.png"
import { Flip } from "react-reveal";
import "./style.css"

const Skills = () => {

    return (
        <div id="skill">
            <div className="section-title-container">
                <SectionDivider/>
                <h1 className="section-title"> 
                    Technologies
                </h1>
            </div>
            <h3 style={{marginLeft:"2%", color: "rgb(163, 163, 163)"}}>
                As a fullstack developer I've worked with a range of technologies in the web development world. From Back-end To Design
            </h3>
            <Flip left cascade>
                <div className="skill-wrapper">
                    <div className="skill-main-container"> 
                        <div className="skill-title">
                            <img src= {icon_prog} alt="Programming language" width="70px" /> 
                            <h2>Front-End </h2>
                        </div>
                        <p> Experience with HTML, CSS, Javascript, React.js </p>
                    </div>

                    <span className="vertical-divider" />

                    <div className="skill-main-container">
                        <div className="skill-title">
                            <img src= {icon_database} alt="Programming language" width="70px" /> 
                            <h2>Back-End </h2>
                        </div>
                        <p>  Knowledge in MySQL, MariaDB (Mongo) and Node </p>
                    </div>

                    <span className="vertical-divider" />
                    
                    <div className="skill-main-container">
                        <div className="skill-title">
                            <img src= {icon_ui} alt="Programming language" width="70px" /> 
                            <h2>UI/UX design</h2>
                        </div>
                        <p>  Experience in design tools like Figma </p>
                    </div>
                </div>
            </Flip>
        </div>

    )
}

export default Skills