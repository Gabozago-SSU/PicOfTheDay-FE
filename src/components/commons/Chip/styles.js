import styled from "styled-components";
import colors from "../../../styles/colors";
import { fonts } from "../../../styles/fonts";

const getStroke = (isChecked) => (isChecked ? "none" : `1px solid ${colors.black_30}`);
const getBackground = (isChecked) => (isChecked ? `${colors.red_80}` : "white");
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
`;

export const KeyWordRoundLayout = styled.div`
    width: fit-content;
    height: fit-content;
    align-items: center;
    padding: 6px 10px;
    border: 1px solid ${colors.black_80};
    border-radius: 50px;
    ${fonts.caption2}
`;

export const CategoryRoundLayout = styled.div`
    width: fit-content;
    height: fit-content;
    align-items: center;
    padding: 2px 7px;
    border: 0.6px solid ${colors.black_80};
    border-radius: 50px;
    ${fonts.caption2}
`;
