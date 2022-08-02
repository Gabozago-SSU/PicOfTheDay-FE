import styled, { css } from "styled-components";
import colors from "./colors";

export const hideScrollbar = css`
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;

export const MediaDiv = styled.div`
    margin: 0px auto;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 768px;
    margin: 0 auto;

    background-color: ${colors.bgColor};
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
