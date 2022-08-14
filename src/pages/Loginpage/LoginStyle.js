import styled from "styled-components";
import colors from "../../styles/colors";

export const SlogunDiv = styled.div`
    width: 300px;
    height: 79px;
    left: 37px;
    top: 142px;
    font-size: 24px;
    line-height: 38px;
    color: #0a0a0a;
`;

export const SlogunBold = styled.div`
    float: left;
    font-weight: 700;
`;

export const SlogunRow = styled.div`
    margin-right: 8px;
    float: left;
`;

export const FirstSlogun = styled.div`
    padding-bottom: 6px;
`;

export const LoginButtonDiv = styled.div`
    margin-top: 95px;

    & .buttonImg {
        :active {
            filter: brightness(80%);
        }
    }
`;

export const LoginButton = styled.div`
    margin-top: 21px;
`;

export const SignUpDiv = styled.div`
    width: 134px;
    height: 21px;
    left: 120px;
    top: 516px;

    margin-top: 33px;
    font-size: 12px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.348029px;
    margin-left: 83px;
    margin-right: 83px;
`;

export const SignupButton = styled.div`
    margin-left: 6px;
    text-decoration-line: underline;
    color: #ff3358;
    font-weight: 700;
`;

export const LoginDiv = styled.div`
    padding-top: 142px;
    padding-bottom: 275px;
    margin: 0 auto;
    background-color: ${colors.bgColor};

    padding-left: 37px;
    padding-right: 37px;
`;
