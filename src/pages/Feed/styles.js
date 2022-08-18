import styled from "styled-components";
import colors from "styles/colors";

export const ScrollDiv = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin-bottom: 30px;
    z-index: 1;
    top: 0;
    overflow: scroll;
`;
export const SearchHeaderLayout = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    max-width: 768px;
    height: fit-content;
    float: top;
    z-index: 998;
    justify-content: center;
    gap: 4px;
    background-color: ${colors.bgColor};
    //box-shadow: 0px 3px 5px ${colors.black_10};
    p {
        padding: 5px;
        text-align: center;
        font-size: 13px;

        &:active {
            color: ${colors.red_100};
        }
    }

    .header-back {
        height: 30px;
        top: 0;
        right: 0;
        padding: 4px;
    }
    div {
        padding: 11px;
    }
`;


export const KeywordSearchLayout = styled.div`
    width: 100%;
    height: fit-content;
    align-items: center;
    padding: 6px 0px;
    display: flex;
    line-height: 14px;
    gap:6px
`;