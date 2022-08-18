import React, { useState, useEffect } from "react";
import { css } from "styled-components";
import * as S from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Heart from "../../assets/HeartCircleIc.svg";
import EmptyHeart from "../../assets/EmptyHeartIc.svg";
import Phone from "../../assets/TelePhoneCircleIc.svg";
import NextIc from "../../assets/BlackNextIc.svg";
import PlaceIc from "../../assets/PlaceIc.svg";
import CopyIc from "../../assets/copyIc.svg";
import CategoryChip from "../commons/Chip/CategoryChip";
import StarIc from "../../assets/SmallStarIc.svg";
import { requestLikePlace, requestDisikePlace, requestDeleteReview } from "../../apis/index";
import useCopyClipBoard from "utils/useCopyClipBoard";
import { PropTypes } from "prop-types";
import { useUserRecoilValue } from "recoil/userState";

const PlaceInfo = ({ like, place, placeId, category, phone, name, address, rating, reviewNum }) => {
    const [onClickCopy, setOnClickCopy] = useState(false);
    const [toastCnt, setToastCnt] = useState(0);
    const [likeState, setLikeState] = useState(place.like);
    const user = useUserRecoilValue();

    const [isCopy, onCopy] = useCopyClipBoard();

    const onClickHeartHandler = () => {
        try {
            if (likeState) {
                requestDisikePlace({ userId: user.authId, placeId: placeId }).then((res) => {
                    console.log(res);
                    setLikeState(false);
                });
                // requestDeleteReview(31).then((res) => console.log(res));
            } else {
                requestLikePlace({ userId: user.authId, placeId: placeId }).then((res) => {
                    console.log(res);
                    setLikeState(true);
                });
            }
        } catch (err) {
            //오류가 잡히면 콘솔에 출력하게처리
            console.log(err);
        }
    };

    useEffect(() => {
        console.log("rend", place);
    }, [likeState]);

    useEffect(() => {
        // eslint-disable-next-line no-lone-blocks
        {
            if (toastCnt > 0) return;
            setTimeout(() => {
                if (onClickCopy && toastCnt === 0) {
                    setToastCnt(1);
                    success("주소가 복사되었습니다.", {
                        position: "bottom-center",
                        autoClose: 1000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => {
                        setOnClickCopy(false);
                        setToastCnt(0);
                    }, 1200);
                }
            }, 90);
        }
    }, [onClickCopy]);
    return (
        <S.PlaceinfoLayout>
            <S.StyledToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></S.StyledToastContainer>
            <CategoryChip type={category} />
            <S.ButtonWrapper>
                <img src={Phone}></img>
                <img
                    src={likeState ? Heart : EmptyHeart}
                    style={{ marginRight: "17px" }}
                    onClick={onClickHeartHandler}
                ></img>
            </S.ButtonWrapper>
            <h1 style={{ fontWeight: 700, fontSize: "24px", lineHeight: "35px", paddingTop: "6px" }}>{name}</h1>
            <S.InfoWrapper style={{ marginTop: "9px" }}>
                <div style={{ height: "14px" }} disabled>
                    <img src={PlaceIc} style={{ height: "12px", alignSelf: "center" }}></img>
                </div>
                <S.AddressTextBox>
                    <p>{address}</p>
                </S.AddressTextBox>
                <div style={{ height: "14px" }}>
                    <img
                        src={CopyIc}
                        style={{
                            height: "12px",
                            alignSelf: "center",
                            pointerEvents: `${onClickCopy ? "none" : "auto"}`,
                        }}
                        onClick={() => {
                            onCopy(address);
                            if (onClickCopy === false) setOnClickCopy(true);
                        }}
                    ></img>
                </div>
            </S.InfoWrapper>
            <S.InfoWrapper style={{ marginTop: "5px", height: "17px", marginBottom: "20px" }}>
                <div style={{ height: "14px", marginRight: "4px" }}>
                    <img src={StarIc} style={{ width: "11px", alignSelf: "center", margin: "0 auto" }}></img>
                </div>
                <S.RatingText>{parseFloat(rating).toFixed(1)}</S.RatingText>
                <p style={{ fontSize: "12px", marginLeft: "6px" }}>후기 ({reviewNum ? reviewNum : 0})</p>
                <img src={NextIc} style={{ width: "14px", alignSelf: "center" }}></img>
            </S.InfoWrapper>
        </S.PlaceinfoLayout>
    );
};
function success(nodeOrMsg) {
    return toast(
        <div style={{ display: "flex", gap: "5px" }}>
            <img src={CopyIc} />
            <div>{nodeOrMsg}</div>
        </div>,
    );
}
export default PlaceInfo;

PlaceInfo.propTypes = {
    like: PropTypes.bool.isRequired,
};
