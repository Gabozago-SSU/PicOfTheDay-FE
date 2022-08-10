import styled from "styled-components";
import colors from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";

const getStroke = (isChecked) => (isChecked ? "none" : `1px solid ${colors.black_30}`);
const getBackground = (isChecked) => (isChecked ? `#FF3358` : "white");
const getTextColor = (isChecked) => (isChecked ? "white" : "black");

export const RoundChipLayout = styled.div`
    width: fit-content;
    height: fit-content;
    align-items: center;
    padding: 6px 15px;
    border: ${(props) => getStroke(props.isChecked)};
    border-radius: 53px;
    background-color: ${(props) => getBackground(props.isChecked)};
    color: ${(props) => getTextColor(props.isChecked)};
    ${fonts.body2}
    white-space: nowrap;
`;

export const KeyWordRoundLayout = styled.div`
    width: fit-content;
    height: fit-content;
    align-items: center;
    padding: 6px 10px;
    border: 1px solid ${colors.black_80};
    border-radius: 50px;
    ${fonts.caption2}
    line-height: 14px;
    white-space: nowrap;
`;

export const CategoryRoundLayout = styled.div`
    width: fit-content;
    height: fit-content;
    align-items: center;
    padding: 2px 11px 2px 7px;
    border: 0.6px solid ${colors.black_80};
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    ${fonts.caption2}
    white-space: nowrap;
`;

export const CategoryImg = styled.img`
    width: 12.8px;
    height: 12.8px;
    margin-right: 5px;
    filter: brightness(0%) contrast(80%);
`;

export const SearchRoundLayout = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 4px 12px;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    background-color: ${colors.red_100};
    border-radius: 200px;
    color: ${colors.bgColor};

    display: flex;
    flex-direction: row;
    justify-content: center;
    white-space: nowrap;

    &:active {
        filter: brightness(80%);
    }
`;
