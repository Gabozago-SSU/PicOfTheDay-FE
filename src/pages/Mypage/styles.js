import styled from "styled-components";
import MenuIc from "../../assets/MenuIc.svg";

export const ScrollDiv = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
`;

export const InfoWrapper = styled.div`
    padding: 20px 11px;
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
`;
export const PostWrapper = styled.div`
    padding: 0;
    width: 100%;
    min-height: calc(100vh - 130px);
    flex-grow: 1;
`;
export const NameBox = styled.div`
    flex-grow: 1;
    font-weight: 400;
    font-size: 16px;
    margin-left: 12px;
    letter-spacing: -0.408px;
    align-items: center;
    align-content: center;
    padding-top: 4px;
`;

export const MenuBox = styled.div`
    width: 14px;
    height: 12px;
    background-image: url(${MenuIc});
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 15px;
`;
