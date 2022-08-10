import React from 'react'
import OkButton from '../../components/commons/Button/okButton';
import { EoHuengNim, NiknameBold, NiknameRow, OkChipPickButton, PickKeyword, ToggleChipPick, SelectChipPage } from './StyleSelectChip';
import ToggleChipLayout from './ToggleChipLayout';
import KeywordChipButton from './ToggleChipLayout';

function SelectChip() {
  return (
    <SelectChipPage>
      <EoHuengNim>
        <NiknameBold>어흥</NiknameBold>
        <NiknameRow>님이</NiknameRow>
      </EoHuengNim>
      <PickKeyword>선호하는 스타일의 키워드를 골라주세요!</PickKeyword>
        <ToggleChipPick>
          <KeywordChipButton/>
        </ToggleChipPick>
        <OkChipPickButton>
          <OkButton />
        </OkChipPickButton>
    </SelectChipPage>
  )
}

export default SelectChip