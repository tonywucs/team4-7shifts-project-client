import { useState } from "react";
import "./RiskNotify.scss"


function RiskNotify({ setIsOpen }) {

    const handleClick = () => {
        console.log("click")
        setIsOpen(true);
    }

    return (
        <div onClick={handleClick} className="risk__box">
            <span className="risk__text" >  Risk Detected</span>
        </div>
    )
}

export default RiskNotify;