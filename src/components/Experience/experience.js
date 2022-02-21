import React, { useState } from "react";
import SectionDivider from "../GlobalComponents/SectionDivider/sectionDivider";
import { Experience_List } from "./data_experience";
import "./style.css"

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState("0");
    const [progressBarValue, setProgressBarValue] = useState(0);

    window.onresize = ((e) => {
        console.log(e.target.innerWidth)
    })

    return (
        <div id="experience" className="experience-container">
            <div className="section-title-container">
                <SectionDivider/>
                <h1 className="section-title"> 
                    Education & Experience
                </h1>
            </div>

            <h3 style={{marginLeft:"2%", color: "rgb(163, 163, 163)"}}>
                Even though my latest experience and education is more orientated to videogame programming, I'm looking for a position as a Fullstack/FrontEnd Web Developer because after all my years as a student is what I love the most. Also the Web development world is so massive that there is always something new to try, imagine, learn and that's what I'm more excited about.
            </h3>

            <div className="experience-timeline-wrapper">
                <div className="experience-timeline">
                    <div className="experience-progressbar" style={{width:`${progressBarValue}`}} />
                    {
                        Experience_List.map((item, index) => {
                            const displayLogic = index * 100 / Experience_List.length
                            return (
                                <span key={index} className="timeline-marker" style={{left: `${displayLogic}%`}} onMouseEnter={(e) => {setCurrentIndex(e._targetInst.key); 
                                    setProgressBarValue(`${displayLogic}%`);
                                    console.log(progressBarValue)
                                }}/>
                            )
                        })
                    }
                    
                </div>
                <div className="more-to-come"> and this is only the beginning... </div>
            </div>
            
            <div className="experience-description-container">
                <div key={Experience_List[currentIndex].KeyID} className="experience-description" >
                    <div className="experience-title">
                        <div>
                            <h2> {Experience_List[currentIndex].Title} </h2>
                            <h3> {Experience_List[currentIndex].Date} </h3>
                        </div>
                        <img src={Experience_List[currentIndex].Image} width={`${Experience_List[currentIndex].ImageSize[0]}px`}  height={`${Experience_List[currentIndex].ImageSize[1]}px`} alt=""/> 
                    </div>
                    <h4> {Experience_List[currentIndex].Description} </h4>
                    {
                        Experience_List[currentIndex].Technologies.map((technologie, index) => {
                            return (
                                <li key={index}>- {technologie} </li>
                            )
                        })
                    }
                </div>
            </div>           
        </div>
    )
}


export default Experience