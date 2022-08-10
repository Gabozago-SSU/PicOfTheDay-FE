import styled from "styled-components";
import colors from "../../styles/colors";
import Slider from "react-slick";

export const BannerLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 17px;
`;

export const StyledSlider = styled(Slider)`
    position: relative;
    .slick-slide div {
        outline: none;
        width: calc(100%);
        height: calc(100% - 44px);
    }
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
`;
export const BannerContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 22px;
`;

export const BannerWrapper = styled.div`
    width: calc(100% - 44px);
    padding-top: calc(100% - 44px);
    border-radius: 5rem;
    background-color: ${colors.black_10};
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 5px;
`;

export const CounterDiv = styled.div`
    position: relative;
    align-self: flex-end;
    top: 7px;
    right: 7px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 46px;
    height: 18px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 39px;
    align-items: center;
    font-size: 9px;
    font-weight: 300;
    gap: 2px;
`;

export const ArrowWrapper = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const NextArrowIcon = styled.div`
    width: 36px;
    height: 36px;
    z-index: 99;
    position: absolute;
    background-image: url(${(props) => props.img}) !important;
    background-repeat: no-repeat;
    background-size: auto;
    right: 6px;
    transform: translate(0, -50%);

    &:active {
        filter: brightness(0.3) sepia(1) hue-rotate(-70deg) saturate(5);
    }
`;

export const ArrowIcon = styled(NextArrowIcon)`
    left: 6px;
`;
