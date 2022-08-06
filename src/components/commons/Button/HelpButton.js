import React from "react";
import styled from "styled-components";

const StyleHelpButton = styled.button`
    border-radius: 5px;
    border-style: solid;
    border-color: #E5475A;
    color: #E5475A;

    height: 45px;
    width: 321px;

    background: white;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;
`;

function HelpButton() {
    return(
    <StyleHelpButton>도움이 돼요</StyleHelpButton>
    );
}

export default HelpButton;