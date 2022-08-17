import styled from "styled-components";
import Magnifier from "../../../assets/magnifier.svg";
import colors from "styles/colors";

export const SearchBarLayout = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    z-index: 995;
`;

export const SearchNotfoundBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    h1 {
        padding: 12px;
        font-size: 12px;
        color: ${colors.black_30};
    }

    p {
        text-decoration: underline;
        color: ${colors.red_100};
        padding: 12px 0px;
        font-size: 12px;

        &:active {
            filter: brightness(80%);
        }
    }
`;

export const StyleSearchBar = styled.input`
    width: 100%;
    box-sizing: border-box;
    background-size: contain;

    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    align-items: center;
    letter-spacing: 0.004em;
    -webkit-user-select: text;
    background-position: 5px center;
    line-height: 30px;
    ::placeholder {
        color: #b6b6b6;
    }
`;

export const MagnifierIcon = styled.img`
    background-size: contain;
    background-color: transparent;
    width: 20px;
    height: 20px;
`;

export const SearchBox = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 30px;
    padding: 5px 12px;
    border-radius: 88px;
    background-color: transparent;
    border: 1px solid #cecece;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const SearchListWrapper = styled.ul`
    width: 85%;
    list-style: none;
    max-height: 6rem;
    margin: 0 auto;
    border-radius: 0 0 4px 4px;
    overflow-y: scroll;

    li {
        font-size: 13px;
        padding: 6px;
        font-weight: 400;
        color: ${colors.black_80};

        &:active {
            filter: brightness(90%);
            color: ${colors.red_100};
        }
    }
`;
