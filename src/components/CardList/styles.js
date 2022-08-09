import styled from "styled-components";
import colors from "../../styles/colors";

export const CardListLayout = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 14px 17px;
`;

export const LabelLayout = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LabelTextBox = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #0a0a0a;
`;

export const NextIcon = styled.img`
    float: right;
    &:active {
        filter: brightness(0.8) sepia(1) hue-rotate(-70deg) saturate(5);
    }
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 12px;
    scroll-snap-type: x mandatory;
    margin-bottom: 10px;
    -ms-overflow-style: none; /* IE, Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;
