import { useState, useEffect } from "react";

import colors from "styles/colors";

import * as S from "./styles";
import ProfileImg from "../commons/ProfileImg/index";
import StarIc from "../../assets/SmallStarIc.svg";
import PlaceIc from "../../assets/PlaceIc.svg";
import NextIc from "../../assets/PinkNextIc.svg";
import KeywordChip from "../commons/Chip/KeywordChip";
import HelpButton from "../commons/Button/HelpButton";

import { PropTypes } from "prop-types";
import { requestLikeReview } from "apis";

const PlaceDetail = ({ id, profile, nickName, rating, address, img, content, tags, helpNum }) => {
    const [isLike, setLike] = useState(false);

    const onClickHelpBtn = () => {
        try {
            requestLikeReview({ userId: 1, reviewId: id }).then((res) => {
                console.log(res);
                setLike(true);
                setTimeout(() => {
                    setLike(false);
                }, 500);
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <S.StyledLayout>
            <S.InfoWrapper>
                <ProfileImg img={profile}></ProfileImg>
                <S.NameBox>{nickName}</S.NameBox>
                <div style={{ height: "20px" }}>
                    <img src={StarIc} style={{ width: "16px", alignSelf: "center" }}></img>
                </div>
                <S.RatingText>{parseFloat(rating).toFixed(1)}</S.RatingText>
            </S.InfoWrapper>
            {address ? (
                <S.InfoWrapper style={{ marginTop: "9px" }}>
                    <div style={{ height: "14px" }}>
                        <img src={PlaceIc} style={{ height: "14px", alignSelf: "center" }}></img>
                    </div>
                    <S.AddressTextBox>
                        <p>{address}</p>
                    </S.AddressTextBox>
                    <S.PhotoZonWrapper>포토존 보러가기</S.PhotoZonWrapper>
                    <div style={{ height: "14px" }}>
                        <img src={NextIc} style={{ width: "14px", alignSelf: "center" }}></img>
                    </div>
                </S.InfoWrapper>
            ) : null}
            <S.ImgBox
                img={
                    "http://storage.enuri.info/pic_upload/knowbox2/202003/05524434720200328b50ba606-bf91-4c55-92df-3aecbc1c37e5.jpg"
                }
            >
                {isLike ? <S.HeartBox isLiked={isLike}></S.HeartBox> : null}
            </S.ImgBox>
            <S.ContentBox>{content}</S.ContentBox>
            {tags ? (
                <S.TagWrapper>
                    {tags.map((t, index) => (
                        <KeywordChip key={index}>{t}</KeywordChip>
                    ))}
                </S.TagWrapper>
            ) : null}
            <S.HelpTextBox>{helpNum ? helpNum : 0}명에게 도움이 되었어요</S.HelpTextBox>

            <div style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "0px" }}>
                <HelpButton onClick={onClickHelpBtn}></HelpButton>
            </div>
        </S.StyledLayout>
    );
};

export default PlaceDetail;
PlaceDetail.propTypes = {
    id: PropTypes.number,
    profile: PropTypes.string,
    nickName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    address: PropTypes.string,
    img: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.array,
    helpNum: PropTypes.number.isRequired,
};
