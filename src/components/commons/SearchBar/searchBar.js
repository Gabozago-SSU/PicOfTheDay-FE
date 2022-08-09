import React from "react";
import styled from "styled-components";
import Magnifier from "../../../assets/magnifier.svg";

export const StyleSearchBar = styled.input`
    width: 100%;
    box-sizing: border-box;
    background-size: contain;

    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    align-items: center;
    letter-spacing: 0.004em;

    color: #b6b6b6;
    background-position: 5px center;
`;

export const MagnifierIcon = styled.img`
    background-size: contain;
    background-color: transparent;
    width: 20px;
    height: 20px;
`;

export const SearchBox = styled.div`
    width: 100%;
    height: 30px;
    padding: 5px 12px;
    border-radius: 88px;
    background-color: transparent;
    border: 1px solid #cecece;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const SearchBar = () => {
    return (
        <SearchBox>
            <MagnifierIcon src={Magnifier}></MagnifierIcon>
            <StyleSearchBar placeholder="검색"></StyleSearchBar>
        </SearchBox>
    );
};

export default SearchBar;
