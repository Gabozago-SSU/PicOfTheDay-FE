import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Logo from "../assets/PinkLogo.svg";
import { bottomState } from "../recoil/bottom";
import { DefaultLayout } from "styles/layout";
import styled from "styled-components";

const NotFound = () => {
    const [bottom, setBottom] = useRecoilState(bottomState);
    useEffect(() => {
        setBottom("Notfound");
    }, []);
    return (
        <DefaultLayout>
            <Layout>
                <img src={Logo} />
                <h1>페이지 정보를 찾을 수 없습니다.</h1>
            </Layout>
        </DefaultLayout>
    );
};

export default NotFound;

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
