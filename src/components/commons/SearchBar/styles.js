import styled from "styled-components";
import Magnifier from "../../../assets/magnifier.svg";
import colors from "styles/colors";

export const SearchBarLayout = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
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
    max-height: 4rem;
    margin: 0 auto;
    border-radius: 0 0 4px 4px;
    overflow-y: scroll;
    li {
        font-size: 14px;
        padding: 6px;
        background-color: ${colors.bgColor};

        &:active {
            filter: brightness(90%);
        }
    }
`;
