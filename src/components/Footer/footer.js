import React from "react";
import "./style.css"

const Footer = () => {
    return (
        <footer>
            <div className="contact">
                <h2>
                    Email 
                </h2>
                <h3> <a href="mailto:jorge.depazcabanas99@gmail.com"> jorge.depazcabanas99@gmail.com </a> </h3>
            </div>   
            <div className="contact">
                <h2>
                    Call me
                </h2>
                <h3>
                    ( +34 ) 646 461 584
                </h3>
            </div>   
        </footer>
    )
}

export default Footer;