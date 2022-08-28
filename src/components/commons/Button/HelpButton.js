import React from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

const StyleHelpButton = styled.button`
    border-radius: 5px;
    border-style: solid;
    border-color: #e5475a;

    height: 45px;
    width: 100%;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;

    ${(props) => setChecked(props.isChecked)}
`;

const setChecked = (isChecked) => {
    console.log(isChecked);
    return isChecked
        ? `background-color : white; color :  ${colors.red_100}`
        : `background-color : ${colors.red_100} ; color:white`;
};

function HelpButton({ onClick, isChecked }) {
    return (
        <StyleHelpButton onClick={onClick} isChecked={isChecked}>
            도움이 돼요
        </StyleHelpButton>
    );
}

export default HelpButton;
