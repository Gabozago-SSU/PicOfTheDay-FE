import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

const StyleHelpButton = styled.button`
    border-radius: 5px;
    border-style: solid;
    border-color: #e5475a;
    color: #e5475a;

    height: 45px;
    width: 100%;

    background: white;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;

    &:active {
        background-color: #e5475a;
        color: white;
    }
`;

function HelpButton({ onClick }) {
    return <StyleHelpButton onClick={onClick}>도움이 돼요</StyleHelpButton>;
}

export default HelpButton;
