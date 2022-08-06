import React from 'react'
import OkButton from 'components/commons/Button/okButton';
import { InputNikname, NiknameDiv, OkNikname, WriteNikname } from './NiknameStyle';

function Nikname() {
  return (
    <NiknameDiv>
        <InputNikname>닉네임을 입력해주세요</InputNikname>
        <WriteNikname>
          <input type="text" placeholder="닉네임" />
        </WriteNikname>
        <OkNikname>
          <OkButton disabled={true} />
        </OkNikname>
    </NiknameDiv>
  )
}

export default Nikname;