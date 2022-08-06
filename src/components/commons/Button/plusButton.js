import React from "react";
import styled from "styled-components";

const StylePlusButton = styled.button`
    border-radius: 5px;
    border-style: solid;
    border-color: #9D9D9D;
    color: white;
    margin-top: 10px;

    height: 45px;
    width: 321px;
    font-size: 14px;

    background: #9D9D9D;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;
`;

function PlusButton() {
    return(
    <StylePlusButton>더 보기</StylePlusButton>
    );
}

export default PlusButton;