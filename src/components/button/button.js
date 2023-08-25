import "@7shifts/sous-chef/dist/index.css";
import "../Button/Button.scss"

function Button({ text, icon, publishHandler }) {
    return (
        <>
            <div onClick={publishHandler} className="button__publish">
                {icon}
                {text}
            </div>
        </>
    )

}


export default Button;

