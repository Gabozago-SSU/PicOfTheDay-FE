import colors from "styles/colors";
import styled from "styled-components";

export const TabDiv = styled.div`
    display: flex;
    margin-top: 23px;
    padding-top: 9px;
    background-color: ${colors.bgColor};
`;

export const TabListLayout = styled.div`
    width: 100%;
    position: absolute;
    min-height: 100vh;
    top: 0;
    margin-top: 120px;
    z-index: 0;
`;
