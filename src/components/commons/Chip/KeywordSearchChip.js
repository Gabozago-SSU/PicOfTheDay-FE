import React from "react";
import PropTypes from "prop-types";
import { KeywordSearchLayout } from "./styles";

const KeywordSearchChip = ({ children }) => {
    return <KeywordSearchLayout>{children}</KeywordSearchLayout>;
};

export default KeywordSearchChip;

KeywordSearchChip.propTypes = {
    children: PropTypes.string.isRequired,
};
