import React, { useEffect, useState } from "react";
import OkButton from "components/commons/Button/okButton";
import { InputNikname, NiknameDiv, OkNikname, WriteNikname, ProfileDiv, ProfileImgDiv } from "./NiknameStyle";
import ProfileIc from "../../assets/ProfileCircle.svg";
import XIc from "../../assets/close.svg";
import { userState, userPlatform, useUserRecoilValue } from "recoil/userState";
import { useRecoilState, useRecoilValue } from "recoil";
import Authentication, { DecryptAuth } from "utils/ encryption";
import { useNavigate, useLocation } from "react-router-dom";
import { requestNickname, requestProfile } from "apis";

function Nikname() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useUserRecoilValue();

    const [userName, setUserName] = useState("");
    const [profile, userProfile] = useState("");
    const [imgFile, setImgFile] = useState(null);

    const nameHandler = (e) => {
        setUserName(e.target.value);
    };
    const saveFileImg = (e) => {
        setImgFile(URL.createObjectURL(e.target.files[0]));
        userProfile(e.target.files[0]);
    };

    const onClickSubmit = () => {
        const formData = new FormData();
        if (imgFile !== null)
            try {
                formData.append("image", profile);
                formData.append(
                    "profileImagePost",
                    new Blob([JSON.stringify({ userId: user.authId })], { type: "application/json" }),
                );

                requestProfile(formData).then((res) => {
                    console.log(res);
                });
            } catch (err) {
                console.log(err);
            }

        try {
            console.log(userName);
            requestNickname({ nickName: userName, userId: location.state.userId }).then((res) => {
                console.log(res);
                navigate("/onboarding", { state: { nickName: userName } });
            });
        } catch (e) {
            console.log(e);
        }
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
