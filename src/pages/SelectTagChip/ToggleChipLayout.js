import React from 'react'
import ToggleChip from '../../components/commons/Chip/ToggleChip';
import { ChipButtonContainer1, ChipButtonContainer2, ChipButtonContainer3, ChipButtonContainer4, ChipButtonContainer5, ChipButtonContainer6, ChipButtonContainer7, ChipButtonContainer8 } from './StyleToggleChipLayout';

function ToggleChipLayout() {
  return (
      <>
        <ChipButtonContainer1>
          <ToggleChip>러블리한</ToggleChip>
          <ToggleChip>시크한</ToggleChip>
          <ToggleChip>자연친화적인</ToggleChip>
        </ChipButtonContainer1>
        <ChipButtonContainer2>
          <ToggleChip>감성있는</ToggleChip>
          <ToggleChip>시골의</ToggleChip>
          <ToggleChip>화려한</ToggleChip>
          <ToggleChip>밝은</ToggleChip>
        </ChipButtonContainer2>
        <ChipButtonContainer3>
          <ToggleChip>따뜻한</ToggleChip>
          <ToggleChip>시원한</ToggleChip>
          <ToggleChip>아기자기한</ToggleChip>
        </ChipButtonContainer3>
        <ChipButtonContainer4>
          <ToggleChip>힙한</ToggleChip>
          <ToggleChip>트렌디</ToggleChip>
          <ToggleChip>배경이중심</ToggleChip>
          <ToggleChip>깔끔한</ToggleChip>
        </ChipButtonContainer4>
        <ChipButtonContainer5>
          <ToggleChip>알록달록</ToggleChip>
          <ToggleChip>사람중심</ToggleChip>
          <ToggleChip>어두운</ToggleChip>
        </ChipButtonContainer5>
        <ChipButtonContainer6>
          <ToggleChip>심플한</ToggleChip>
          <ToggleChip>도시의</ToggleChip>
          <ToggleChip>앤틱한</ToggleChip>
        </ChipButtonContainer6>
        <ChipButtonContainer7>
          <ToggleChip>코지한</ToggleChip>
          <ToggleChip>키치</ToggleChip>
          <ToggleChip>귀여운</ToggleChip>
          <ToggleChip>댄디한</ToggleChip>
        </ChipButtonContainer7>
        <ChipButtonContainer8>
          <ToggleChip>단색의</ToggleChip>
          <ToggleChip>자연스러운</ToggleChip>
          <ToggleChip>고급스러운</ToggleChip>
        </ChipButtonContainer8>
      </>
  )
}

export default ToggleChipLayout