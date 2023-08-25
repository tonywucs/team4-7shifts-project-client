import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.scss"
import backgroundImage from "../../assets/images/schedule2.png"
import { IconPaperPlane } from '@7shifts/sous-chef';
import Button from "../../Components/Button/Button";


const FeaturePage = () => {


    const publishHandler = () => {

    }


    return (
        <div>
            <img className="background__image" src={backgroundImage} />
            <Button
                icon={<IconPaperPlane />}
                text="Publish changes"
                publishHandler={publishHandler} />

        </div>
    );
};

export default FeaturePage;