import "@7shifts/sous-chef/dist/index.css";
import "./Button.scss"

function Button({ text, icon, publishHandler }) {
    return (
        <>
            <div onClick={publishHandler} className="button__publish">


            </div>
        </>
    )

}

//

export default Button;

