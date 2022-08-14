import React, { useEffect, useState } from "react";
import OkButton from "components/commons/Button/okButton";
import { InputNikname, NiknameDiv, OkNikname, WriteNikname } from "./NiknameStyle";
import { BaseUrl } from "../../privateKey";
import { userState, userPlatform } from "recoil/userState";
import { useRecoilState, useRecoilValue } from "recoil";
import Authentication, { DecryptAuth } from "utils/ encryption";
import { useNavigate, useLocation } from "react-router-dom";

function Nikname() {
    const navigate = useNavigate();
    const location = useLocation();

    const [platform, setPlatform] = useRecoilState(userPlatform);

    const [userName, setUserName] = useState("");
    const [_userState, setUserState] = useRecoilState(userState);

    useEffect(() => {
        let params = new URL(document.URL).searchParams;
        if (params.get("code") !== null) {
            setPlatform("kakao");
        }
        console.log("PALTFORM", platform);

        //TODO BE Token 넘기고 로딩 띄우기
    }, []);

    const nameHandler = (e) => {
        setUserName(e.target.value);
    };

    const onClickSubmit = () => {
        console.log(_userState, platform);
        const newAuth = Authentication(-1, userName, platform);
        const list = Object.assign([], _userState === null ? [] : _userState);
        list.push(newAuth);
        setUserState(list);
        console.log(list);
        navigate("/onboarding", { state: { nickName: userName } });
    };

    return (
        <NiknameDiv>
            <InputNikname>닉네임을 입력해주세요</InputNikname>
            <WriteNikname>
                <input type="text" placeholder="닉네임" onChange={(e) => nameHandler(e)} />
            </WriteNikname>
            <OkNikname>
                <OkButton disabled={userName === ""} onClick={onClickSubmit} />
            </OkNikname>
        </NiknameDiv>
    );
}

export default Nikname;
