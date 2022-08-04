import styled, { css } from "styled-components";
import colors from "./colors";
import { useEffect } from "react";

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
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

const StyledContentDiv = styled.div`
    width: 100%;
    min-height: calc(var(--vh) * 100 - 54px); /* fallback */
`;

export const ContentDiv = () => {
    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        console.log(document.documentElement.style.getPropertyValue("--vh"));
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <StyledContentDiv></StyledContentDiv>;
};
