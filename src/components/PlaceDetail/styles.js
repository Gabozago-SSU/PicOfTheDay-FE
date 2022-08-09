import styled from "styled-components";
import colors from "styles/colors";
import { keyframes } from "styled-components";

import HeartIc from ".././../assets/HeartIc.svg";

export const StyledLayout = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 17px;

    flex-direction: column;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-items: center;
    align-items: center;
`;

export const RatingText = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: ${colors.red_100};
    margin-left: 3px;
    height: fit-content;
    align-self: center;
`;

export const NameBox = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #0a0a0a;
    margin-left: 10px;
    margin-right: 5px;
    text-align: center;
`;

export const ImgBox = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    background-color: ${colors.black_30};
    border-radius: 5px;
    margin: 12px 0;

    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(0, 0, 0, 0.05) 0px 2px 2px, rgba(0, 0, 0, 0.05) 0px 4px 4px,
        rgba(0, 0, 0, 0.05) 0px 5px 5px, rgba(0, 0, 0, 0.05) 0px 7px 7px;
`;

export const HeartBox = styled.div`
    width: 30%;
    height: 30%;
    position: absolute;

    transform: translate(-50%, -50%);
    background-image: url(${HeartIc});

    background-repeat: no-repeat;
    background-size: cover;
    z-index: 990;

    left: 50%;
    top: 50%;

    animation: ${(props) => (props.isLiked ? fadeIn : null)} 0.15s ease-out;
    transition: visibility 0.3s ease-out;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0.3;
    visibility: hidden;
  }
  100% {
    opacity: 01;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 0.8;

  }
  100% {
    opacity: 0.5;
  }
`;

export const ContentBox = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    padding: 10px;

    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`;

export const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 7px;
    width: 100%;
    padding: 10px;
`;

export const HelpTextBox = styled.div`
    height: 34px;
    padding: 10px;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: ${colors.black_80};
`;

export const AddressTextBox = styled.div`
    margin-left: 6px;
    margin-right: 6px;
    max-height: 14px;
    color: ${colors.black_80};
    overflow: hidden;
    flex-grow: 0;
    text-align: center;
    p {
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
    }
`;

export const PhotoZonWrapper = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: ${colors.red_100};
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
`;
