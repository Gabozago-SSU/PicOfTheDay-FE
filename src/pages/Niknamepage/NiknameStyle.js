import styled from "styled-components";
import colors from "../../styles/colors";
import PinkClose from "../../assets/PinkXIc.svg";
import XIc from "../../assets/close.svg";
export const NiknameDiv = styled.div`
    padding: 27px;
    padding-top: 142px;
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

export const InputNikname = styled.div`
    font-size: 20px;
    line-height: 40px;
    color: #0a0a0a;

    width: 100%;
    height: 45px;
    left: 37px;
    top: 142px;
`;

export const WriteNikname = styled.div`
    background-color: ${colors.bgColor};

    width: 100%;
    height: 39px;
    left: 37px;
    top: 189px;

    line-height: 29px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0015em;

    color: #6c6c6c;
    font-size: 20px;

    border-bottom: 1px solid #b6b6b6;

    padding-top: 2px;
    margin-bottom: 50px;

    input {
        flex-grow: 1;
    }

    img {
        &:active {
            filter: brightness(90%);
        }
    }
`;

export const OkNikname = styled.div`
    padding-bottom: 488px;
`;

export const ProfileImgDiv = styled.div`
    width: 5.625rem;
    height: 5.625rem;
    border-radius: 5.625rem;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
`;

export const ProfileDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    label {
        padding: 7px;
        height: 25px;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        color: ${colors.black_60};

        &:active {
            color: ${colors.red_100};
        }
    }
`;
