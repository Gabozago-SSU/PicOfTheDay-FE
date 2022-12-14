import React, { useEffect, useState } from "react";
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
import { requestCurations } from "apis";
import { requestSignup } from "../../apis/index";
import { bottomState } from "recoil/bottom";
import { useRecoilState } from "recoil";

const HomePage = () => {
    const navigate = useNavigate();
    const user = useUserRecoilValue();
    const [currations, setCurrations] = useState([]);
    const [bottom, setBottom] = useRecoilState(bottomState);
    useEffect(() => {
        initCuration();
        setBottom("/");
        console.log(user);
    }, []);

    const initCuration = () => {
        try {
            requestCurations().then((res) => {
                setCurrations(res.data);
                console.log(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const searchHandler = (value) => {
        //TODO 장소 검색 API 호출
        // if (value !== null) {
        //     //결과 있음
        //     navigate("/place", { state: value.placeId });
        // } else {
        //     navigate("/search/notfound", { state: 1 });
        // }

        navigate("/search", { state: value });
    };
    return (
        <>
            <Header searchHandler={searchHandler} />
            <S.ScrollDiv>
                <Banner banners={[Banner1, Banner2, Banner3, Banner4]} />
                {currations
                    ? currations.map((c, index) => {
                          if (index !== 3)
                              return <CardList key={index} id={c.id} title={c.subtitle} places={c.places}></CardList>;
                      })
                    : null}
            </S.ScrollDiv>
        </>
    );
};

export default HomePage;
