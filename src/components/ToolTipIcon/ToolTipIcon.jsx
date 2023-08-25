import { Tooltip, Inline, IconQuestionCircle, Text } from "@7shifts/sous-chef";

const ToolTipIcon = ({  header, overlay, placement }) => {
    return (
        <>
            {/* Example of Tooltip with Icon&Text */}
            <Inline justifyContent="center">
                <Tooltip
                    delayOnClose
                    header={header}
                    overlay={overlay}
                    placement={placement}
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