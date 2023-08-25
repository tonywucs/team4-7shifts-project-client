import { Tooltip, Inline, IconQuestionCircle, Text } from "@7shifts/sous-chef";

const ToolTip = () => {
    return (
        <>
            {/* Example of Tooltip with Icon&Text */}
            <Inline justifyContent="center">
                <Tooltip
                    overlay="Please select an employee to assist"
                    placement="bottom"
                    theme="black"
                >
                    <span>
                        <IconQuestionCircle color="grey-400" />
                    </span>
                </Tooltip>
            </Inline>
        </>
    );
};

export default ToolTip;