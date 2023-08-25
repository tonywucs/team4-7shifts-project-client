import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.scss"
import backgroundImage from "../../assets/images/schedule2.png"

const FeaturePage = () => {
    return (
        <div>
            {/* <div className="background__image"></div> */}
            <img className= "background__image" src={backgroundImage}/>
        </div>
    );
};

export default FeaturePage;