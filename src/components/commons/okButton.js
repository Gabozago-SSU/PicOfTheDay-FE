import React from "react";
import styled from "styled-components";
import { fonts } from "../../styles/fonts";
import colors from "../../styles/colors";

const StyleOkButton = styled.button`
    border-radius: 5px;
    height: 45px;
    width: 321px;

    ${fonts.button}
    background-color: #FF3358;
    color: ${colors.bgColor};

    &:disabled {
        //이거는 클릭을 금지하는 기능!
        cursor: not-allowed;

        background-color: ${colors.black_20};
        color: ${colors.bgColor};
    }

    &:active {
        /* background-color: ${colors.red_80};
        color: ${colors.bgColor}; */

        filter: brightness(80%);
    }
`;

function OkButton({ disabled }) {
    console.log(disabled);
    return <StyleOkButton disabled={disabled}>확인</StyleOkButton>;
}

export default OkButton;
