import React from "react";
import Fade from 'react-reveal/Fade';
import "./style.css"

const Presentation = () => {
    return (
        <Fade top cascade>
            <div id="presentation" className="presentation-main-container">
                
                    <h1> Hello there!</h1>
                    <h3>
                        I'm <span className="gradient-text">Jorge de Paz Cabañas</span> <br/> this is my personal portfolio, hope you enjoy it!
                    </h3>
                    <h2>
                        "If you can imagine it, it can be programmed."
                    </h2>

            </div>
        </Fade>
    )
}

export default Presentation