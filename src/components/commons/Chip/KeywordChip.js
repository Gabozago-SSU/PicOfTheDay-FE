import React from "react";
import PropTypes from "prop-types";
import { KeyWordRoundLayout } from "./styles";

const KeywordChip = ({ children }) => {
    return <KeyWordRoundLayout>{children}</KeyWordRoundLayout>;
};

export default KeywordChip;

KeywordChip.propTypes = {
    children: PropTypes.string.isRequired,
};
