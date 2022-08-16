import styled from "styled-components";
import colors from "styles/colors";
import CloseIc from "../../../assets/PinkXIc.svg";

export const ModalLayout = styled.div`
    z-index: 3;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 5rem;
    max-height: 50%;
    width: 20rem;
    background: white;
    border-radius: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: calc(4rem + 5rem);
    h1 {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }

    p {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        color: rgba(10, 10, 10, 0.5);
    }
`;

export const ModalButton = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 4rem;
    background-color: ${colors.red_100};
    border-radius: 0 0 12px 12px;
    color: white;
    text-align: center;
    font-weight: 500;
    font-size: 14px;

    line-height: 4rem;

    &:active {
        filter: brightness(80%);
    }
`;

export const ModalCloseButton = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    width: 1.2rem;
    height: 1.2rem;
    background-image: url(${CloseIc});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.2rem;

    &:active {
        background-color: white;
        filter: brightness(80%);
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;
