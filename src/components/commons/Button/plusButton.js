import React from "react";
import styled from "styled-components";

const StylePlusButton = styled.button`
    border-radius: 5px;
    border-style: solid;
    border-color: #9d9d9d;
    color: white;
    margin-top: 10px;

    height: 45px;
    width: 100%;
    font-size: 14px;

    background: #9d9d9d;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;

    :active {
        filter: brightness(0.8);
    }
`;

function PlusButton({ onClick }) {
    return <StylePlusButton onClick={onClick}>더 보기</StylePlusButton>;
}

export default PlusButton;
