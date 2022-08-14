import React, { useState, useEffect } from "react";
import OkButton from "../../components/commons/Button/okButton";
import {
    EoHuengNim,
    NiknameBold,
    NiknameRow,
    OkChipPickButton,
    PickKeyword,
    ToggleChipPick,
    SelectChipPage,
} from "./StyleSelectChip";
import CheckIcon from "../../assets/CheckFill.svg";
import KeywordChipButton from "./ToggleChipLayout";
import { userState } from "recoil/userState";
import { useRecoilState, useRecoilValue } from "recoil";
import { DecryptAuth } from "utils/ encryption";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../components/commons/Modal/index";
import { DefaultLayout } from "styles/layout";

function SelectChip() {
    const [_userState, setUserState] = useRecoilState(userState);
    const [clickedKeys, setKeys] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const location = useLocation();
    const nowloginUser = location.state ? location.state.nickName : "";

    useEffect(() => {
        console.log("login", nowloginUser);
    }, []);

    const navigate = useNavigate();

    const chipHandler = (keyword) => {
        const findIndex = clickedKeys.indexOf(keyword);

        if (findIndex === -1) {
            clickedKeys.push(keyword);
        } else {
            clickedKeys.splice(findIndex, 1);
        }
        const newKeys = Object.assign([], clickedKeys);
        setKeys(newKeys);
        console.log("keywords", clickedKeys);
    };

    const onClickSubmit = () => {
        //TODO API 연결
        setModalOpen(true);
    };
    const onClickCloseModal = () => {
        setModalOpen((prev) => !prev);
        navigate("/");
    };

    return (
        <DefaultLayout>
            <SelectChipPage>
                {isModalOpen ? (
                    <Modal closeModal={onClickCloseModal} buttonText={"홈으로 이동하기"}>
                        <img src={CheckIcon} style={{ height: "56px", marginBottom: "25px" }} />
                        <h1 style={{ marginBottom: "13px" }}>가입이 완료되었습니다</h1>
                        <p>네인생컷에서 다양한 포토존을 만나보세요</p>
                    </Modal>
                ) : null}
                <EoHuengNim>
                    <NiknameBold>{nowloginUser}</NiknameBold>
                    <NiknameRow>님이</NiknameRow>
                </EoHuengNim>
                <PickKeyword>선호하는 스타일의 키워드를 골라주세요!</PickKeyword>
                <ToggleChipPick>
                    <KeywordChipButton chipHandler={chipHandler} />
                </ToggleChipPick>
                <OkChipPickButton>
                    <OkButton disabled={clickedKeys.length === 0} onClick={onClickSubmit} />
                </OkChipPickButton>
            </SelectChipPage>
        </DefaultLayout>
    );
}

export default SelectChip;
