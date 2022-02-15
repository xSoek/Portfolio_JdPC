import React from "react";
import Tag from "./project-tag";
import "./style.css"

const ProjectCard = (props) => {
    
    return (
        <div className="project-card-main-container">
            <img src={props.project.Image} width="100%" alt="App Screenshot" />
            <h2>{props.project.Title}</h2>
            <div className="project-card-divider"> </div>
            <p id="project-description">
                {props.project.Description}
            </p>
            {

                props.project.Tags.length > 0 ? 
                    <div className="project-card-tag-wrapper">
                    {
                        props.project.Tags.map((tag, index) => {
                            return <Tag key={index} title={tag} />
                        })
                    }
                    </div>
                :
                ""
            }
            
            <div className="project-card-buttons-wrapper">
                <button className="custom-button-1" onClick={() => window.open(props.project.CodeLink, "_blank")}> Code </button>
                <button className="custom-button-2" onClick={() => window.open(props.project.WebLink, "_blank")}> Navigate </button>

            </div>
        </div>
    ) 
}

export default ProjectCard