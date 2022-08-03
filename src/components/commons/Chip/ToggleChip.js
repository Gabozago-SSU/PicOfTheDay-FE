import React, { useState } from "react";
import PropTypes from "prop-types";
import { RoundChipLayout } from "./styles";

const ToggleChip = ({ isChecked, children }) => {
    const [checkState, setCheckState] = useState(isChecked);
    return (
        <RoundChipLayout
            isChecked={checkState}
            onClick={() => {
                setCheckState((prev) => !prev);
            }}
        >
            {children}
        </RoundChipLayout>
    );
};
ToggleChip.propTypes = {
    isChecked: PropTypes.bool.isRequired,
};
export default ToggleChip;
