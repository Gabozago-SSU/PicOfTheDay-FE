import React from "react";
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

function Login() {
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
                    <img src={KakaoLogin} />
                    <LoginButton>
                        <img src={GoolgleLogin} />
                    </LoginButton>
                    <LoginButton>
                        <img src={AnotherLogin} />
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
