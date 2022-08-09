import React from "react";
import styled from "styled-components";
import { fonts } from "styles/fonts";
import colors from "styles/colors";

const StyleOkButton = styled.button`
    border-radius: 5px;
    height: 45px;
    width: 100%;
    //폰트는 type별로 다 정리해 놓았으니 필요한 거를 이렇게 불러서 사용하면 끝!
    ${fonts.button}
    background-color: ${colors.red_100};
    color: ${colors.bgColor};

    &:disabled {
        //이거는 클릭을 금지하는 기능!
        cursor: not-allowed;
        //color도 피그마에 있는거 다 옴겨 놓았습니당
        background-color: ${colors.black_20};
        color: ${colors.bgColor};
    }

    &:active {
        /* background-color: ${colors.red_80};
        color: ${colors.bgColor}; */
        //생략되어도 ㄱㅊㄱㅊ

        //뭔가 눌리는 느낌을 주고 싶다면 filter 이용하면 쉬움!
        filter: brightness(80%);
    }
`;

function OkButton({ disabled }, clickedKeys) {
    const isEmptyArr = () => {
        clickedKeys.length === 0 ? ( <div>
          <OkButton disabled={true} />
        </div>)  : (<div>
          <OkButton disabled={false} />
        </div>)
      console.log(isEmptyArr);
      };
    console.log(disabled);
    return <StyleOkButton disabled={disabled}>확인</StyleOkButton>;
}

export default OkButton;
