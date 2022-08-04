import React from "react";
import * as S from "./styles";
import StarIc from "../../assets/SmallStarIc.svg";

const PhotoCard = ({ img, category, rating, placeName }) => {
    return (
        <S.PhotoLayout>
            <S.PhotoImg img={img} />
            <S.InfoWrapper>
                <S.CategoryText>{category} |</S.CategoryText>
                <img src={StarIc} style={{ width: "10px" }}></img>
                <S.RatingText>{parseFloat(String(rating)).toFixed(1)}</S.RatingText>
            </S.InfoWrapper>
            <S.PlaceText>{placeName}</S.PlaceText>
        </S.PhotoLayout>
    );
};

export default PhotoCard;
