import styled from "styled-components";
import colors from "../../styles/colors";

export const NiknameDiv = styled.div`
    padding: 27px;
    padding-top: 142px;
    margin: 0 auto;
    position: relative;
    width: 100%;
`;

export const InputNikname = styled.div`
    font-size: 24px;
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
`;

export const OkNikname = styled.div`
    padding-bottom: 488px;
`;
