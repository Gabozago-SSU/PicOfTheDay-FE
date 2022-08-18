import React, { useEffect, useState } from "react";
import OkButton from "components/commons/Button/okButton";
import { InputNikname, NiknameDiv, OkNikname, WriteNikname, ProfileDiv, ProfileImgDiv } from "./NiknameStyle";
import ProfileIc from "../../assets/ProfileCircle.svg";
import XIc from "../../assets/close.svg";
import { userState, userPlatform } from "recoil/userState";
import { useRecoilState, useRecoilValue } from "recoil";
import Authentication, { DecryptAuth } from "utils/ encryption";
import { useNavigate, useLocation } from "react-router-dom";

function Nikname() {
    const navigate = useNavigate();
    const location = useLocation();

    const [platform, setPlatform] = useRecoilState(userPlatform);

    const [userName, setUserName] = useState("");
    const [profile, userProfile] = useState("");
    const [imgFile, setImgFile] = useState(null);
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
    const saveFileImg = (e) => {
        const result = [];

        setImgFile(URL.createObjectURL(e.target.files[0]));
    };
    const onClickSubmit = () => {
        console.log(_userState, platform);
        const newAuth = Authentication(1, userName, platform);
        const list = Object.assign([], _userState === null ? [] : _userState);
        list.push(newAuth);
        setUserState(list);
        console.log(list);
        navigate("/onboarding", { state: { nickName: userName } });
    };

    return (
        <NiknameDiv>
            <ProfileDiv>
                <label htmlFor="input-file" />
                <input
                    type="file"
                    accept="image/*"
                    id="input-file"
                    onChange={saveFileImg}
                    multiple={false}
                    style={{ display: "none" }}
                />
                <ProfileImgDiv img={imgFile ? imgFile : ProfileIc}></ProfileImgDiv>
                <label htmlFor="input-file">프로필 사진 변경</label>
            </ProfileDiv>

            <InputNikname>닉네임을 입력해주세요</InputNikname>
            <WriteNikname>
                <input type="text" placeholder="닉네임" onChange={(e) => nameHandler(e)} />
                <img src={XIc} style={{ display: `${userName !== "" ? "default" : "none"}` }}></img>
            </WriteNikname>
            <OkNikname>
                <OkButton disabled={userName === ""} onClick={onClickSubmit} />
            </OkNikname>
        </NiknameDiv>
    );
}

export default Nikname;
