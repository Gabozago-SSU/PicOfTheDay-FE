import styled from "styled-components";
import FillStar from "../../assets/StarFillIc.svg";
import LineStar from "../../assets/StarLineIc.svg";

const getIcon = (isChecked) => {
    return isChecked ? FillStar : LineStar;
};

export const StarContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

export const StarIcon = styled.div`
    background-image: url(${(props) => getIcon(props.isChecked)});
    background-size: contain;
    width: 22px;
    height: 22px;
`;
