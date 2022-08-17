import styled from "styled-components";
import colors from "../../styles/colors";
import Slider from "react-slick";

export const BannerLayout = styled.div`
    position: relative;
    margin-top: 53px;
    width: 100%;
    height: 12.875rem;
    padding: 0;
    margin-bottom: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        height: 415px;
    }
`;

export const StyledSlider = styled(Slider)`
    position: relative;
    padding: 0;
    background-size: cover;
    .slick-slide div {
        outline: none;
        width: 100%;
        height: 12.875rem;
        padding: 0;
        margin: 0;

        @media screen and (min-width: 768px) {
            height: 415px;
        }
    }
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
`;
export const BannerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;

export const BannerWrapper = styled.div`
    width: 100%;
    height: 12.875rem;
    background-image: url(${(props) => props.img});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (min-width: 768px) {
        height: 415px;
    }
`;
export const BannerImg = styled.img`
    width: 100vw;
    height: 100%;
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
