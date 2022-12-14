import styled from "styled-components";
import colors from "../../styles/colors";
import Logo from "../../assets/PinkLogo.svg";

const getPlaceImg = (img) => {
    return img ? img : Logo;
};

export const PhotoLayout = styled.div`
    padding: 2px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    height: fit-content;
`;

export const PhotoImg = styled.div`
    background-image: url(${(props) => getPlaceImg(props.img)});
    background-size: ${(props) => (props.img ? "cover" : "auto")};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    background-color: ${colors.black_80};
    width: ${(props) => (props.bigSize ? "40vw" : "140px")};
    height: ${(props) => (props.bigSize ? "40vw" : "140px")};
    resize: both;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(0, 0, 0, 0.05) 0px 2px 2px, rgba(0, 0, 0, 0.05) 0px 4px 4px,
        rgba(0, 0, 0, 0.05) 0px 5px 5px, rgba(0, 0, 0, 0.05) 0px 4px 4px;
    &:active {
        background-color: ${colors.black_30};
        filter: brightness(30%);
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: 7px;
    width: 100%;
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

export const AdTag = styled.div`
    width: 30px;
    height: 11px;
    background: rgba(59, 59, 59, 0.3);
    border: 0.7px solid #ffffff;
    border-radius: 77.5px;
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 8px;
    align-items: center;
    text-align: center;
    margin: 7px;
    line-height: 11px;
`;
