import React from "react";
import { SearchRoundLayout } from "./styles";
import XIcon from "../../../assets/XIc.svg";

const SearchChip = ({ onClickDelete, children }) => {
    return (
        <SearchRoundLayout>
            {children}
            <img src={XIcon} style={{ marginLeft: "5px" }} onClick={onClickDelete}></img>
        </SearchRoundLayout>
    );
};

export default SearchChip;
