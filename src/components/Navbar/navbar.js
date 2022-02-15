import React, { useState } from "react";
import linkedin_icon from "../../media/images/linkedin.png"
import github_icon from "../../media/images/github.png"
import menuIcon from "../../media/images/menu.png"
import "./style.css"

const Navbar = () => {
    const [windowWidth, newWindowWidth] = useState(window.screen.width);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    window.addEventListener("resize", function(e){
        newWindowWidth(e.target.innerWidth);
    });

    const showMenu = (e) => {

        if(isMenuOpen===true) {
            e.currentTarget.style.transform="rotate(180deg)"
            e.currentTarget.parentNode.style.right="-220px";
        } else {
             e.currentTarget.style.transform="rotate(0deg)"
            e.currentTarget.parentNode.style.right="0px";
        }
        setIsMenuOpen(!isMenuOpen);
    }

    if(windowWidth > 1024) {
        return (
            <nav id="navbar-main-container">
                <h1 className="gradient-text"><a href="#presentation" >JdPC</a></h1>
               
                <div id="navbar-menu-container">
                    <a href="#aboutme" > About me </a>
                    <a href="#projects" > Projects </a>
                    <a href="#skill" > Technologies </a>
                    <a href="#experience" > Experience </a>
                </div>

                <div id="navbar-links-container">
                        <a href="https://www.linkedin.com/in/jorgedepazcabanas/" rel="noreferrer" target="_blank">
                            <div className="social-icon-container">
                                <img src={linkedin_icon} id="linkedin" className="social-icons" height="30px" width="30px" alt="linkedin" />
                                <div id="linkedin-background" className="social-background"/>
                            </div>
                        </a>
                        <a href="https://github.com/xSoek" rel="noreferrer" target="_blank">
                            <div className="social-icon-container">
                                <img src={github_icon} id="github" className="social-icons" height="30px" width="30px" alt="github" />
                                <div id="github-background" className="social-background"/>
                            </div>
                       </a>
                </div>

            </nav>
        )
    }
    else {

        return (
            <div id="minor-navbar">
                <img src={menuIcon} alt="" height="30px" id="menuIcon" onClick={(e) => showMenu(e)} /> 
                <nav id="navbar-main-container-min">
                    <div id="navbar-menu-container-min">
                        <a href="#aboutme" > About me </a>
                        <a href="#projects" > Projects </a>
                        <a href="#skill" > Technologies </a>
                        <a href="#experience" > Experience </a>
                    </div>

                    <div id="navbar-links-container-min">
                        <a href="https://www.linkedin.com/in/jorgedepazcabanas/" rel="noreferrer" target="_blank">
                            <div className="social-icon-container">
                                <img src={linkedin_icon} id="linkedin" className="social-icons" height="30px" width="30px" alt="linkedin" />
                                <div id="linkedin-background" className="social-background"/>
                            </div>
                        </a>
                        <a href="https://github.com/xSoek" rel="noreferrer" target="_blank">
                            <div className="social-icon-container">
                                <img src={github_icon} id="github" className="social-icons" height="30px" width="30px" alt="github" />
                                <div id="github-background" className="social-background"/>
                            </div>
                        </a>
                    </div>

                </nav>
            </div>
        )
    }
    
    
}

export default Navbar;