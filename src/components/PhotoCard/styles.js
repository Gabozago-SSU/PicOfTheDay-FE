import styled from "styled-components";
import colors from "../../styles/colors";
import Logo from "../../assets/PinkLogo.svg";

const getPlaceImg = (img) => {
    return img ? img : Logo;
};

const getPlaceImgSize = (img) => {
    console.log(img);
    return "contain";
};

export const PhotoLayout = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 140px;
    height: fit-content;
`;

export const PhotoImg = styled.div`
    background-image: url(${(props) => getPlaceImg(props.img)});
    background-size: ${(props) => (props.img !== undefined ? "cover" : "auto")};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    background-color: "#DDDDDD";
    width: 140px;
    height: 140px;
    resize: both;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(0, 0, 0, 0.05) 0px 2px 2px, rgba(0, 0, 0, 0.05) 0px 4px 4px,
        rgba(0, 0, 0, 0.05) 0px 5px 5px, rgba(0, 0, 0, 0.05) 0px 4px 4px;
    &:active {
        background-color: ${colors.black_10};
        filter: brightness(90%);
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: 7px;
`;

export const CategoryText = styled.div`
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
    color: ${colors.black_80};
    margin-right: 5px;
`;

export const RatingText = styled.div`
    font-weight: 500;
    font-size: 8px;
    line-height: 12px;
    color: ${colors.red_100};
    margin-left: 5px;
`;

export const PlaceText = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    height: 26px;
    align-items: center;
    text-align: start;
    display: flex;
    color: ${colors.black_80};
`;
