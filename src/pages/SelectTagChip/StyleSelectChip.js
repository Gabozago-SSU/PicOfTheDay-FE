import styled from "styled-components";
import colors from "../../styles/colors";

export const SelectChipPage = styled.div`
    margin: 0 auto;
    height: 100%;
    padding-left: 27px;
    padding-right: 27px;
    background-color: ${colors.bgColor};
    position: relative;
`;

export const EoHuengNim = styled.div`
    display: flex;
    padding-top: 87px;
`;

export const NiknameBold = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    color: #0a0a0a;
`;

export const NiknameRow = styled.div`
    font-size: 24px;
    line-height: 35px;
`;

export const PickKeyword = styled.div`
    padding-top: 5px;
    width: 267px;
    height: 23px;
    left: 27px;
    top: 127px;

    font-size: 16px;
    line-height: 23.17px;
    letter-spacing: 0.0015em;
    color: #0a0a0a;
`;

export const ToggleChipPick = styled.div`
    padding-top: 32px;
`;

export const OkChipPickButton = styled.div`
    position: absolute;
    width: calc(100% - 54px);
    bottom: 0;
    float: bottom;
    padding-top: 50px;
    z-index: 0;
`;
