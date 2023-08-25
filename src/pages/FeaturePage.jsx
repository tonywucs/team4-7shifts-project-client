import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.scss"
import backgroundImage from "../assets/images/screenshotBefore.png"
import { IconPaperPlane } from '@7shifts/sous-chef';
import Button from "../components/Button/Button";
import RiskNotify from "../components/RiskNotify/RiskNotify";
import ModalForm from "../components/ModalForm/ModalForm";
import dottedLine from "../assets/images/Underline.png"
import ToolTip from "../components/ToolTip/ToolTip";


const FeaturePage = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isToolTip, setIsToolTip] = useState(false);

    const publishHandler = () => {
        console.log("click")
    }

    const showTip = () => {
        setIsToolTip(true);
        console.log("click tip")
    }

    return (
        <div>
            <img className="background__image" src={backgroundImage} />
            <Button
                icon={<IconPaperPlane />}
                text="Publish changes"
                publishHandler={publishHandler}
             />
            <RiskNotify 
            setIsOpen={setIsOpen}/>
            {isOpen &&
             <ModalForm 
             setIsOpen={setIsOpen}
             />
            
            }
             <button onMouseEnter={showTip} className="button__risk"> </button>
             {/* <div className="cover"></div> */}
             {/* <img src={dottedLine} className="underline"/> */}

             {isToolTip && 
             <ToolTip 
             overlay = ""/>}
            
        </div>
    );
};

export default FeaturePage;