import { Tooltip, Inline, IconQuestionCircle, Text } from "@7shifts/sous-chef";

const ToolTip = ({overlay, theme}) => {
    return (
        <>
            {/* Example of Tooltip with Icon&Text */}
            <Inline justifyContent="center">
                <Tooltip
                    overlay={overlay}
                    placement="bottom"
                    theme={theme}
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