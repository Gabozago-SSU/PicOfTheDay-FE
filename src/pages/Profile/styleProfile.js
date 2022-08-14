import styled from "styled-components";

export const StyledProfileimg = styled.div`
    position: absolute;
    width: 390px;
    height: 156px;
    left: 0px;
    top: 52px;
`;

export const StyledFeedProfile = styled.div`
    width: 53px;
    height: 53px;
    border-radius: 30px;

    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24.73px;

    position: absolute;
    left: 161px;
    top: 18px;
`;

export const StyledFeedNikname = styled.div`
    position: absolute;
    width: 107px;
    height: 22px;
    left: 135px;
    top: 82px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;


    display: inline-block;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;

    color: #0A0A0A;
`;