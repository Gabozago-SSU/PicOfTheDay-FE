import { useState, useEffect } from "react";

import colors from "styles/colors";

import * as S from "./styles";
import ProfileImg from "../commons/ProfileImg/index";
import StarIc from "../../assets/SmallStarIc.svg";
import PlaceIc from "../../assets/PlaceIc.svg";
import NextIc from "../../assets/PinkNextIc.svg";
import KeywordChip from "../commons/Chip/KeywordChip";
import HelpButton from "../commons/Button/HelpButton";

import { requestLikeReview } from "apis";
import { useNavigate } from "react-router-dom";
import { requestDislikeReview } from "../../apis/index";
import { DefaultLayout } from "../../styles/layout";
import Modal from "components/commons/Modal";
import { useUserRecoilValue } from "recoil/userState";

const PlaceDetail = ({ id, userId, profile, nickName, rating, address, img, content, tags, helpNum, like }) => {
    const [isLike, setLike] = useState(false);
    const [helpState, setHelpState] = useState(like);
    const navigate = useNavigate();
    const user = useUserRecoilValue();
    const [isAuthModalOpen, setAuthtModalOpen] = useState(false);

    const onClickHelpBtn = () => {
        if (!user) {
            setAuthtModalOpen(true);
            console.log("not user");
            return;
        }
        try {
            if (!helpState)
                requestLikeReview({ userId: user.authId, reviewId: id }).then((res) => {
                    console.log(res);
                    setLike(true);
                    setHelpState(true);
                    setTimeout(() => {
                        setLike(false);
                    }, 500);
                });
            else {
                requestDislikeReview({ userId: user.authId, reviewId: id }).then((res) => {
                    setLike(false);
                    setHelpState(false);
                    console.log(res);
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onClickProfile = () => {
        navigate("/profile", { state: { id: userId } });
    };

    const onClickAuthModal = (value) => {
        if (value) {
            setAuthtModalOpen(false);
        } else {
            setAuthtModalOpen(false);
        }
    };

    return (
        <S.StyledLayout>
            {isAuthModalOpen ? (
                <DefaultLayout>
                    <Modal closeModal={onClickAuthModal} buttonText={"로그인 하러가기 "}>
                        <h1 style={{ marginBottom: "13px" }}> 아직 회원이 아니시군요!</h1>
                        <p style={{ fontSize: "13px", marginTop: "5px" }}>로그인 후 후기를 작성해 주세요</p>
                    </Modal>
                </DefaultLayout>
            ) : null}
            <S.InfoWrapper>
                <ProfileImg img={profile} onClick={onClickProfile}></ProfileImg>
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
            <S.ImgBox img={img}>{isLike ? <S.HeartBox isLiked={isLike}></S.HeartBox> : null}</S.ImgBox>
            <S.ContentBox>{content}</S.ContentBox>
            {tags ? (
                <S.TagWrapper>
                    {tags.map((t, index) => (
                        <KeywordChip key={index + t}>{t.name}</KeywordChip>
                    ))}
                </S.TagWrapper>
            ) : null}
            <S.HelpTextBox>{helpNum ? helpNum : 0}명에게 도움이 되었어요</S.HelpTextBox>

            <div style={{ paddingLeft: "10px", paddingRight: "10px", paddingBottom: "0px" }}>
                <HelpButton onClick={onClickHelpBtn} isChecked={helpState}></HelpButton>
            </div>
        </S.StyledLayout>
    );
};

export default PlaceDetail;
