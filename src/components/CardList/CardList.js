import React from "react";
import * as S from "./styles";

import NextIc from "../../assets/NextIc.svg";
import PhotoCard from "../PhotoCard";

const CardList = ({ title, places }) => {
    return (
        <S.CardListLayout>
            <S.LabelLayout>
                <S.LabelTextBox>{title}</S.LabelTextBox>
                <S.NextIcon src={NextIc}></S.NextIcon>
            </S.LabelLayout>
            <S.CardWrapper>
                {places.map((place, index) => {
                    return <PhotoCard key={index} category={"자연"} rating={5} placeName={"장소 이름"} />;
                })}
            </S.CardWrapper>
        </S.CardListLayout>
    );
};

export default CardList;
