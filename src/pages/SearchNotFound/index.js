import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Logo from "../../assets/PinkLogo.svg";
import { DefaultLayout } from "styles/layout";
import { Layout, ResultWrapper } from "./styles";
import { useLocation } from "react-router-dom";
import SearchBar from "components/commons/SearchBar/searchBar";

const SearchNotFoundPage = () => {
    const search = useLocation().state;
    const searchHandler = (submit) => {};
    return (
        <>
            <DefaultLayout>
                <Layout>
                    <SearchBar submitHandler={searchHandler} />
                    <ResultWrapper>
                        <img src={Logo} />
                        <h1>'{search}숭실'에 대한 결과를 찾을 수 없습니다.</h1>
                    </ResultWrapper>
                </Layout>
            </DefaultLayout>
        </>
    );
};

export default SearchNotFoundPage;
