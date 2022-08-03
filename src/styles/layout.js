import styled from "styled-components";
import { css } from "styled-components";
import { useEffect } from "react";
import { StyledDiv } from "pages/Home/styles";

const DefaultDiv = styled.div`
    //height: 100vh;
    height: calc(var(--vh) * 1 * 100 - 54px);
    width: 100%;
    background-color: transparent;
`;

export const DefaultLayout = ({ children }) => {
    const handleResize = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return <DefaultDiv>{children}</DefaultDiv>;
};
