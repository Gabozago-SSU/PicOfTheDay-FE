import styled from "styled-components";

export const ResultWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    padding: 10%;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    margin: 0 auto;
    overflow: hidden;

    overflow: hidden;

    img {
        padding: 0 35%;
        align-items: center;
    }

    h1 {
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        margin-top: 3rem;
    }
`;

export const Layout = styled.div`
    width: 100%;
    position: relative;
    margin: 14px;
    input {
        float: top;
    }
`;
