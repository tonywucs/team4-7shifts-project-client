import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.scss"
import backgroundImage from "../assets/images/schedule2.png"
import { IconPaperPlane } from '@7shifts/sous-chef';
import Button from "../components/Button/Button";
import RiskNotify from "../components/RiskNotify/RiskNotify";
import ModalForm from "../components/ModalForm/ModalForm";


const FeaturePage = () => {


    const [isOpen, setIsOpen] = useState(false);

    const publishHandler = () => {
        console.log("click")
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
            
        </div>
    );
};

export default FeaturePage;