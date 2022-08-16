import styled from "styled-components";
import colors from "../../../styles/colors";

export const ScrollDiv = styled.div`
    height: fit-content;
    margin-bottom: 30px;
    z-index: 1;
`;

export const BannerDiv = styled.div`
    width: 100%;
    height: 226px;
    background-color: ${colors.red_100};
`;

export const PostTabLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    padding: 0;
`;

export const TabButton = styled.button`
    background-color: transparent;
    padding: 10px;
    flex-grow: 1;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: ${(props) => {
        return getTextColor(props.focused);
    }};

    &:active {
        background-color: ${colors.black_20};
        filter: brightness(0.9);
        opacity: 0.8;
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
export const RecomandBox = styled.div`
    padding-left: 17px;
    color: ${colors.black_100};

    h1 {
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
    }

    p {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }
`;

const getTextColor = (focused) => {
    return focused ? `${colors.black_80}` : `${colors.black_40}`;
};
