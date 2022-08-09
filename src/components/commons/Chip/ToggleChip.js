import React, { useState } from "react";
import PropTypes from "prop-types";
import { RoundChipLayout } from "./styles";

const ToggleChip = ({ clickHandler, isChecked, children }) => {
    const [checkState, setCheckState] = useState(isChecked);
    const onClick = () => {
        setCheckState((prev) => !prev);
        clickHandler(children);
    };
    return (
        <RoundChipLayout isChecked={checkState} onClick={onClick}>
            {children}
        </RoundChipLayout>
    );
};
ToggleChip.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    children: PropTypes.string,
};
export default ToggleChip;
