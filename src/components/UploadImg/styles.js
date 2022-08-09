import styled from "styled-components";
import colors from "styles/colors";
import Logo from "../../assets/PinkLogo.svg";

export const ImgLayout = styled.div`
    width: 100%;
    margin-top: 53px;
`;

export const ImgWrapper = styled.div`
    display: flex;
    margin-top: 22px;
    height: fit-content;

    width: 100%;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    background: transparent;
    padding: 0 22px;
    p {
        margin-top: 22px;
        font-weight: 500;
        font-size: 16px;
        color: black;
        text-align: center;
        padding: 4px 0px;
        line-height: 24px;
        margin-right: 8px;
    }
    img {
        margin-top: 22px;
    }
`;

export const PhotoImg = styled.div`
    position: relative;
    width: calc(100% - 34px);
    padding-top: calc(100% - 34px);
    background-color: ${colors.black_10};
    border-radius: 5px;
    margin: 22px 17px;

    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(0, 0, 0, 0.05) 0px 2px 2px, rgba(0, 0, 0, 0.05) 0px 4px 4px,
        rgba(0, 0, 0, 0.05) 0px 5px 5px, rgba(0, 0, 0, 0.05) 0px 7px 7px;
`;

const getPlaceImg = (img) => {
    return img ? img : Logo;
};
