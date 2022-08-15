import React, { useCallback, useState, useEffect } from "react";
import KakaoLogin from "../../assets/KakaoLoginButton.svg";
import GoolgleLogin from "../../assets/GoogleLoginButton.svg";
import AnotherLogin from "../../assets/AnotherLoginButton.svg";
import {
    LoginButton,
    LoginButtonDiv,
    SignupButton,
    SignUpDiv,
    SlogunBold,
    SlogunDiv,
    SlogunRow,
    LoginDiv,
    FirstSlogun,
} from "./LoginStyle";
import { DefaultLayout } from "styles/layout";
import { Link, useNavigate } from "react-router";
import { KAKAO_AUTH_URL, GOOGLE_CLIENT_KEY } from "../../privateKey";
import { userState, userPlatform } from "recoil/userState";

import { useGoogleLogin } from "@react-oauth/google";
import { useRecoilValue, useRecoilState } from "recoil";
import { DecryptAuth } from "utils/ encryption";

function Login() {
    const navigate = useNavigate();
    const [_userState, setUserState] = useRecoilState(userState);
    const [platform, setPlatform] = useRecoilState(userPlatform);

    const goGoogleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            const google = "google";
            setPlatform(google);

            navigate("/signup");
        },
        onError: (tokenResponse) => {
            console.log(tokenResponse);
        },
    });

    const onClickGoogleLogin = () => {
        const auths = _userState !== null ? _userState.map((a) => DecryptAuth(a)) : [];
        if (
            auths.find(function (data) {
                return data.platforms === "google";
            }) === undefined
        ) {
            goGoogleLogin();
        } else navigate("/");
        const google = "google";
        setPlatform(google);
    };

    const onClickKaKaoLogin = useCallback(() => {
        const auths = _userState !== null ? _userState.map((a) => DecryptAuth(a)) : [];

        setPlatform("kakao");
        if (
            auths.find(function (data) {
                return data.platforms === "kakao";
            }) === undefined
        ) {
            window.location.href = KAKAO_AUTH_URL;
        } else {
            setPlatform("kakao");
            navigate("/");
        }
    }, []);

    return (
        <DefaultLayout>
            <LoginDiv>
                <SlogunDiv>
                    <FirstSlogun>
                        <SlogunRow>세상 모든</SlogunRow>
                        <SlogunBold>포토존</SlogunBold>
                        <h1>을 한눈에!</h1>
                    </FirstSlogun>
                    <SlogunBold>네인생컷</SlogunBold>
                    <h1>을 만날 순간</h1>
                </SlogunDiv>

                <LoginButtonDiv>
                    <img src={KakaoLogin} className={"buttonImg"} onClick={onClickKaKaoLogin} />
                    <LoginButton>
                        <img src={GoolgleLogin} className={"buttonImg"} onClick={onClickGoogleLogin} />
                    </LoginButton>
                    <LoginButton>
                        <img src={AnotherLogin} className={"buttonImg"} />
                    </LoginButton>
                </LoginButtonDiv>

                <SignUpDiv>
                    <h2>처음이에요!</h2>
                    <SignupButton>회원가입하기</SignupButton>
                </SignUpDiv>
            </LoginDiv>
        </DefaultLayout>
    );
}

export default Login;
