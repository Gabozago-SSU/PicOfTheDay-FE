import React from 'react'
import { EoHuengNim, NiknameBold, NiknameRow, PickKeyword, ToggleChipPick, SelectChipPage, OkChipPickButton } from './StyleSelectChip';
import KeywordChipButton from './ToggleChipLayout';
import { useState } from 'react';
import OkButton from 'components/commons/Button/okButton';

// const isEmptyArr = (clickedKeys) => {
//   clickedKeys.length === 0 ? ( <div>
//     <OkButton disabled={true} />
//   </div>)  : (<div>
//     <OkButton disabled={false} />
//   </div>)
// };

function SelectChip() {
  const [clickedKeys, setKeys] = useState([]);
  const chipHandler = (keyword) => {
    const findIndex = clickedKeys.indexOf(keyword);
    
    if(findIndex === -1) {
      clickedKeys.push(keyword);
    } 
    else {
    clickedKeys.splice(findIndex, 1)
    }
    const newKeys = Object.assign([], clickedKeys);
    setKeys(newKeys);
    console.log("kewwords", clickedKeys);
  };

  return (
    <SelectChipPage>
      <EoHuengNim>
        <NiknameBold>어흥</NiknameBold>
        <NiknameRow>님이</NiknameRow>
      </EoHuengNim>
      <PickKeyword>선호하는 스타일의 키워드를 골라주세요!</PickKeyword>
      <ToggleChipPick>
        <KeywordChipButton chipHandler={chipHandler}/>
      </ToggleChipPick>
      <OkChipPickButton>
        <OkButton disabled={clickedKeys.length === 0} />
      </OkChipPickButton>
    </SelectChipPage>
  )
}

export default SelectChip