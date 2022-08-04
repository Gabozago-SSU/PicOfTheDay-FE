import React, { useState } from "react";
import { SearchRoundLayout } from "./styles";
import XIcon from "../../../assets/XIc.svg";
import PropTypes from "prop-types";

const SearchChip = ({ text, onClick, children }) => {
    const [isDeleted, setDeleted] = useState(false);
    const onClickHandler = () => {
        onClick(text);
        setDeleted(true);
    };
    return isDeleted ? (
        <></>
    ) : (
        <SearchRoundLayout>
            {text}
            {children}
            <img src={XIcon} style={{ marginLeft: "5px" }} onClick={onClickHandler}></img>
        </SearchRoundLayout>
    );
};

SearchChip.prototypes = {
    text: PropTypes.string.isRequired,
};

export default SearchChip;
