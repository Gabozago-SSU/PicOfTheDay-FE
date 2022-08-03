import React from "react";
import styled from "styled-components";
import Magnifier from './assets/magnifier.svg';

export const StyleSearchBar = styled.input`
    border-radius: 88px;
    border: 1px solid #cecece;
    box-sizing: border-box;

    background-size: contain;
    background-color: white;

    width: 346px;
    height: 30px;

    font-family: 'Noto Sans KR';
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    align-items: center;
    letter-spacing: 0.004em;

    color: #B6B6B6;
    
    background-position: 5px center;
    padding-left: 40px;
    
`;

export const MagnifierIcon = styled.img`
    background-size: contain;
    background-color: white;
    box-sizing: border-box;
    position: absolute;
    top: 5px;
    left: 13px;
`;

export const SearchBox = styled.div`
    display: flex;
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