import styled from "styled-components";
import NextIc from "../../assets/NextIc.svg";

export const KeywordLayout = styled.div`
    width: 100%;
    display: flex;
    padding-left: 19px;
    margin-top: 15px;
    flex-direction: column;

    p {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }
`;

export const KeyWordTabBanner = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

// export const KeyWordTabNextIc = styled.div`
//     width: 24px;
//     height: 24px;
//     margin-right: 7px;
//     background-image: url(${NextIc});
//     background-size: cover;
// `;

export const KeyWordWrapper = styled.div`
    max-width: 768px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    width: 100vw;
    gap: 9px;
    padding: 10px 0;
`;

export const KeywordScrollLayout = styled.div`
    margin-top: 13px;
    padding-bottom: 10px;
    padding-left: 17px;
    width: 100%;
    max-width: 768px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;
