import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import CardList from "../../components/CardList/CardList";
import Header from "../../components/commons/Header";
import Banner from "../../components/Banner";

import Banner1 from "../../assets/bannerImg1.svg";
import Banner2 from "../../assets/bannerImg2.svg";
import Banner3 from "../../assets/bannerImg3.svg";
import Banner4 from "../../assets/bannerImg4.svg";
import { useUserRecoilValue } from "recoil/userState";

const HomePage = () => {
    const navigate = useNavigate();
    const user = useUserRecoilValue();
    console.log(user.authId);
    const searchHandler = (submit) => {
        console.log("home", submit);
        //TODO 장소 검색 API 호출
        // if (submit !== null) {
        //     //결과 있음
        //     navigate("/place", { state: 1 });
        // } else {
        //     navigate("/search-fail", { state: 1 });
        // }

        navigate("/search/notfound", { state: submit });
    };
    return (
        <>
            <Header searchHandler={searchHandler} />
            <S.ScrollDiv>
                <Banner banners={[Banner1, Banner2, Banner3, Banner4]} />
                <CardList title={"여름이었다"} places={[1, 2, 3, 4, 5, 6, 7, 8]}></CardList>
                <CardList title={"여름이었다"} places={[1, 2, 3, 4, 5, 6, 7, 8]}></CardList>
                <CardList title={"여름이었다"} places={[1, 2, 3, 4, 5, 6, 7, 8]}></CardList>
            </S.ScrollDiv>
        </>
    );
};

export default HomePage;
