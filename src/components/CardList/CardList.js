import React from "react";
import * as S from "./styles";
import NextIc from "../../assets/NextIc.svg";
import PhotoCard from "../PhotoCard";
import { useNavigate } from "react-router-dom";

const CardList = ({ title, places }) => {
    const navigate = useNavigate();
    const onClickHandler = (id) => {
        console.log(id);
        navigate("/place", { state: id });
    };
    return (
        <S.CardListLayout>
            <S.LabelLayout>
                <S.LabelTextBox>{title}</S.LabelTextBox>
                <S.NextIcon src={NextIc}></S.NextIcon>
            </S.LabelLayout>
            <S.CardWrapper>
                {places.map((place, index) => {
                    return (
                        <PhotoCard
                            key={index}
                            category={"자연"}
                            rating={5}
                            placeName={"장소 이름"}
                            onClick={onClickHandler}
                        />
                    );
                })}
            </S.CardWrapper>
        </S.CardListLayout>
    );
};

export default CardList;
