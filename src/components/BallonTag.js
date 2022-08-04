import React from "react";
import styled from "styled-components";
import BalloonImg from "../assets/Balloon.svg";
import colors from "../styles/colors";
import { fonts } from "../styles/fonts";

const BallonTag = ({ text }) => {
    return (
        <BalloonDiv>
            <BalloonContent>{text}</BalloonContent>
        </BalloonDiv>
    );
};

export default BallonTag;

const BalloonDiv = styled.div`
    background-image: url(${BalloonImg});
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-flex;
    align-items: center;
`;

const BalloonContent = styled.div`
    min-width: 210px;
    min-height: 28px;

    color: ${colors.black_80};
    font-weight: 400;
    font-size: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
