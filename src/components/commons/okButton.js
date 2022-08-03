import React from "react";
import styled from "styled-components";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const StyleOkButton = styled.button`
    border-radius: 5px;

    height: 45px;
    width: 321px;
    font-size: 14px;

    ont-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.0125em;

    &: disabled {
        background: #CECECE;
        color: #F8F8F8;
    }

    &: active {
        background: #FF3358;
        color: #F8F8F8;
    }
`;

function OkButton() {
    return(
    <StyleOkButton>
        style = { isDisabled ? 
        {background: '#CECECE'} : {background: '#FF3358'}
    }
    </StyleOkButton>
    );
}

export default OkButton;