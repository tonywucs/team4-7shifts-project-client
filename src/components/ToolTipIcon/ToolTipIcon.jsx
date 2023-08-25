import { Tooltip, Inline, IconQuestionCircle, Text } from "@7shifts/sous-chef";

const ToolTipIcon = ({ position }) => {
    return (
        <>
            {/* Example of Tooltip with Icon&Text */}
            <Inline justifyContent="center">
                <Tooltip
                    header="Header"
                    overlay={<div>Please Select <br /> More Option</div>}
                    placement={position}
                    theme="white"
                >
                    <span>
                        <IconQuestionCircle color="grey-400" />
                    </span>
                </Tooltip>
            </Inline>
        </>
    );
};

export default ToolTipIcon;