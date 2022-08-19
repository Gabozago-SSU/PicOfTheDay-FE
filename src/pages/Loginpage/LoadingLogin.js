import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Logo from "../../assets/PinkLogo.svg";
import { bottomState } from "../../recoil/bottom";
import { DefaultLayout } from "styles/layout";
import styled from "styled-components";
import { requestKakaoCode } from "../../apis/index";
import { useNavigate } from "react-router-dom";

const LoginLoading = () => {
    const [bottom, setBottom] = useRecoilState(bottomState);
    const navigate = useNavigate();

    useEffect(() => {
        setBottom("Notfound");
        let params = new URL(document.URL).searchParams;
        if (params.get("code") !== null) {
            console.log("kakako code : ", params.get("code"));
            try {
                requestKakaoCode(params.get("code")).then((res) => {
                    console.log(res);
                    if (res.data.isRegistered) {
                        navigate("/");
                    } else {
                        navigate("/signup", { state: res.data.userId });
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
    }, []);
    return (
        <DefaultLayout>
            <Layout>
                <img src={Logo} />
                <h1>잠시만 기려주세요...</h1>
            </Layout>
        </DefaultLayout>
    );
};

export default LoginLoading;

const Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    margin: 0 auto;
    overflow: hidden;

    overflow: hidden;

    img {
        padding: 0 40%;
        align-items: center;
    }

    h1 {
        width: 100%;
        text-align: center;
        font-size: 1.3rem;
        font-weight: 500;
        margin-top: 3rem;
    }
`;
