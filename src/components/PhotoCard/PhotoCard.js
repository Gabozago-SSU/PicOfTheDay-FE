import React from "react";
import * as S from "./styles";
import StarIc from "../../assets/SmallStarIc.svg";
import { PropTypes } from "prop-types";

const PhotoCard = ({ reviewId, placeId, img, category, rating, placeName, onClick, bigSize, isAd }) => {
    return (
        <S.PhotoLayout bigSize={bigSize}>
            <S.PhotoImg
                img={img}
                bigSize={bigSize}
                onClick={() => onClick(placeId ? { type: "place", id: placeId } : { type: "review", id: reviewId })}
            >
                {isAd ? <S.AdTag>AD</S.AdTag> : null}
            </S.PhotoImg>
            <S.InfoWrapper>
                {category ? <S.CategoryText>{category} |</S.CategoryText> : null}
                <img src={StarIc} style={{ width: "10px" }}></img>
                <S.RatingText>{parseFloat(String(rating)).toFixed(1)}</S.RatingText>
            </S.InfoWrapper>
            <S.PlaceText>{placeName}</S.PlaceText>
        </S.PhotoLayout>
    );
};

export default PhotoCard;

PhotoCard.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placeName: PropTypes.string.isRequired,
};
