import React from "react";
import ToggleChip from "../../components/commons/Chip/ToggleChip";
import { ChipButtonContainer1 } from "./StyleToggleChipLayout";
import OkButton from "../../components/commons/Button/okButton";

const ArrayKeyword = [
    "러블리한",
    "시크한",
    "자연친화적인",
    "감성있는",
    "시골의",
    "화려한",
    "밝은",
    "따뜻한",
    "시원한",
    "아기자기한",
    "힙한",
    "트렌디",
    "배경이중심",
    "깔끔한",
    "알록달록",
    "사람중심",
    "어두운",
    "심플한",
    "도시의",
    "앤틱한",
    "코지한",
    "키치",
    "귀여운",
    "댄디한",
    "단색의",
    "자연스러운",
    "고급스러운",
];

function KeywordChipButton({ chipHandler }) {
    const clickHandler = (keyword) => {
        chipHandler(keyword);
    };

    return (
        <div>
            <ChipButtonContainer1>
                {ArrayKeyword.map((a) => (
                    <ToggleChip key={a} isChecked={false} clickHandler={clickHandler}>
                        {a.toString()}
                    </ToggleChip>
                ))}
            </ChipButtonContainer1>
        </div>
    );
}

export default KeywordChipButton;
