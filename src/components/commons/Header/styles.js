import styled from "styled-components";
import Logo from "../../../assets/HeaderLogo.svg";
import SearchIcon from "../../../assets/SearchFillIc.svg";
import ActiveSearchIcon from "../../../assets/SearchPinkIc.svg";
import colors from "../../../styles/colors";
export const HeaderLayout = styled.div`
    width: 100%;
    height: 50px;
    float: top;
    background-color: white;
    background-image: url(${Logo});
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 3px 5px ${colors.black_10};
`;

export const SearchIc = styled.div`
    z-index: 990;
    float: right;
    align-items: center;
    width: 24px;
    height: 50px;
    margin-right: 24px;
    background-image: url(${SearchIcon});
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;

    &:active {
        background-image: url(${ActiveSearchIcon});
    }
`;