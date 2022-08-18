import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";
import NextIc from "../../assets/NextIc.svg";
import PhotoCard from "../PhotoCard";
import { useNavigate } from "react-router-dom";

const CardList = ({ id, title, places }) => {
    const navigate = useNavigate();
    const [xPos, setXpos] = useState(0);
    const container = useRef(null);
    const onClickHandler = (card) => {
        if (card.type === "place") navigate("/place", { state: card.id });
        else navigate("/feed/detail", { state: card.id });
    };
    useEffect(() => {}, [xPos]);
    return (
        <S.CardListLayout>
            <S.LabelLayout>
                <S.LabelTextBox>{title}</S.LabelTextBox>
                <S.NextIcon
                    src={NextIc}
                    onClick={() => {
                        container.current.scrollLeft += 140;
                    }}
                ></S.NextIcon>
            </S.LabelLayout>

            <S.CardWrapper ref={container}>
                {places.map((place, index) => {
                    return (
                        <PhotoCard
                            key={index}
                            reviewId={place.reviewId}
                            placeId={place.placeId}
                            img={place.image}
                            category={place.category}
                            rating={place.rate}
                            placeName={place.title}
                            onClick={onClickHandler}
                        />
                    );
                })}
            </S.CardWrapper>
        </S.CardListLayout>
    );
};

export default CardList;
