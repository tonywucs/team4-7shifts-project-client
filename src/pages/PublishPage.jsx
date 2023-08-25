import { useNavigate } from "react-router-dom";
import afterImage from "../assets/images/screenshotAfter.png"


const PublishPage = () => {
    const navigate = useNavigate();
    return (
        <>
             <img className="background__image" src={afterImage} />
             <div onClick={()=> 
            navigate("/")
            } className="home"></div>
        </>
    );
};

export default PublishPage;