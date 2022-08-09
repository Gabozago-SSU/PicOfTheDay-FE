import styled from "styled-components";
import colors from "styles/colors";

export const ScrollDiv = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;

    div {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }
`;
export const ReviewLabel = styled.div`
    padding: 17px 22px;
`;

export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 17px 22px;
    gap: 18px;
`;

export const DefaultLine = styled.hr`
    width: 100%;
    height: 0.5px;
    border: 0.5px solid ${colors.black_30};
    bottom: 0;
    padding: 0;
`;

export const RatingWrapper = styled.div`
    width: fit-content;
    padding: 17px 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    h1 {
        margin-bottom: 17px;
        text-align: center;
    }
`;

export const ReviewEditBox = styled.textarea`
    position: relative;
    width: calc(100%);
    min-height: 117px;
    height: fit-content;
    padding: 20px;
    background-color: ${"#EFEFEF"};
    border-radius: 5px;
    margin-top: 17px;

    font-weight: 500;
    font-size: 12px;
    line-height: 19px;

    ::placeholder {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: ${colors.black_40};
    }
`;
