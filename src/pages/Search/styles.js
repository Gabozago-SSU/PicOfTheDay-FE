import styled from "styled-components";

export const ScrollDiv = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 17px;
    min-height: calc(100vh - 53px);
`;

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    place-items: center;
    width: 100%;
    margin-top: 5px;
`;

export const TagLayout = styled.div`
    width: 100%;
    padding-left: 7px;
`;

export const Line = styled.hr`
    transform: translate(-10px);
    padding: 0;
    width: 100%;
    height: 1px;
`;
