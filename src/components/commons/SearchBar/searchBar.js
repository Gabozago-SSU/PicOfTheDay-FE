import React, { useState, useRef, useLayoutEffect } from "react";
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
    -webkit-user-select: text;
    background-position: 5px center;
    ::placeholder {
        color: #b6b6b6;
    }
`;

export const MagnifierIcon = styled.img`
    background-size: contain;
    background-color: transparent;
    width: 20px;
    height: 20px;
`;

export const SearchBox = styled.div`
    margin: 0 auto;
    width: 346px;
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

const SearchBar = ({ submitHandler }) => {
    const [content, setContent] = useState("");

    const input = useRef();

    const onChange = (e) => {
        setContent(e.target.value);
    };
    return (
        <SearchBox>
            <MagnifierIcon
                src={Magnifier}
                onClick={() => {
                    submitHandler(content);
                    setContent("");
                    input.current.value = "";
                }}
            ></MagnifierIcon>
            <StyleSearchBar
                ref={input}
                value={content}
                placeholder="검색"
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        submitHandler(content);
                        setContent("");
                    }
                }}
                onSubmit={(e) => {
                    submitHandler(content);
                    setContent("");
                    input.current.value = "";
                }}
                onChange={(e) => {
                    onChange(e);
                }}
            ></StyleSearchBar>
        </SearchBox>
    );
};

export default SearchBar;
