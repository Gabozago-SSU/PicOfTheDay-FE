import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import BackHeader from "components/commons/BackHeader";
import UploadImg from "components/UploadImg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "components/commons/SearchBar/searchBar";
import ResultSearchBar from "components/commons/SearchBar/ResultSearchBar";
import {
    ReviewEditBox,
    ScrollDiv,
    SearchWrapper,
    DefaultLine,
    RatingWrapper,
    ReviewLabel,
    KewordsWrapper,
    StyledToastContainer,
} from "./styles";
import StarRating from "components/Star/StarRating";
import OkButton from "components/commons/Button/okButton";
import SearchChip from "components/commons/Chip/SearchChip";
import BalloonTag from "components/BalloonTag";
import Modal from "components/commons/Modal";
import { requestPostReview } from "apis";
import { requestAddReviewPlace } from "../../apis/index";
import { useNavigate } from "react-router-dom";
import { useUserRecoilValue } from "recoil/userState";
import { DefaultLayout } from "styles/layout";

const ReviewPage = () => {
    const inputTip = useRef();
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [place, setPlace] = useState("");
    const [tempPlace, setTempPlace] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [toastCnt, setToastCnt] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAuthModalOpen, setAuthtModalOpen] = useState(false);

    const navigate = useNavigate();
    const placeInput = useRef();
    const user = useUserRecoilValue();

    useEffect(() => {
        console.log(user);
        if (!user) {
            setAuthtModalOpen(true);
        }
    }, []);

    const imgHandler = (imgList) => {
        setImgs(imgList);
        console.log(imgList);
    };

    const ratingHandler = (value) => {
        setRating(value);
    };

    function placeHandler(content) {
        setTempPlace(content);
        //TODO API ?????? ??????
    }

    const keywordsHandler = (content) => {
        console.log("keywords", content);
        const newKeyword = Object.assign([], keywords);
        newKeyword.push(content);
        setKeywords(newKeyword);
    };

    const removePlaceHandler = (keyword) => {
        setPlace("");
    };

    const removeKeyWordsHandler = (keyword) => {
        const newKeyword = keywords.filter((v) => v !== keyword);
        setKeywords(newKeyword);
    };

    function tipHandler(content) {
        setContent(content);
    }

    const onClickCloseModal = (value) => {
        setModalOpen((prev) => !prev);

        if (value === false) {
            setPlace("");
        } else {
            setPlace({ placeName: tempPlace, placeId: null });
            // requestAddReviewPlace({ place: tempPlace, userId: user.authId })
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((err) => console.log(err));
        }
    };

    const onClickSubmit = () => {
        //API ?????? ??????
        console.log(`place: ${place} content: ${content} keyword:  ${keywords} rating: ${rating}`);
        if (!user) {
            setAuthtModalOpen(true);
            return;
        }

        if (toastCnt > 0) return;
        setTimeout(() => {
            if (toastCnt === 0) {
                requestPost();
                setToastCnt(1);
                clear();
                toast("????????? ?????????????????????.", {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    setToastCnt(0);
                    console.log("after 1---");
                }, 1200);
            }
        }, 90);
    };

    const requestPost = () => {
        const formData = new FormData();
        const reqestData = {
            userId: user.authId,
            placeId: place.placeId,
            content: content,
            rate: rating,
            keywords: keywords,
        };
        for (let i = 0; i < imgs.length; i++) {
            formData.append("image", imgs[i]); // ???????????? ???????????? ???????????? formData ????????? ????????????
        }
        const data = new Blob([JSON.stringify(reqestData)], { type: "application/json" });
        formData.append("reviewPost", data);
        try {
            requestPostReview(formData).then((res) => {
                console.log(res);
                clear();
            });
        } catch (err) {
            console.log(err);
        }
    };

    const onClickItemHandler = (e) => {
        console.log(e);
        //?????? ????????? ????????????
        setPlace(e);
    };

    const onClickAuthModal = (value) => {
        if (value) {
            navigate("/login");
            setAuthtModalOpen(false);
        } else {
            setAuthtModalOpen(false);
            clear();
        }
    };

    const clear = () => {
        setRating(0);
        setContent("");
        setPlace(null);
        setTempPlace("");
        setKeywords([]);
        setImgs([]);
        setRating(0);
    };

    return (
        <ScrollDiv>
            <BackHeader title={"?????? ??????"} />
            {isModalOpen ? (
                <DefaultLayout>
                    <Modal closeModal={onClickCloseModal} buttonText={"????????????"}>
                        <h1 style={{ marginBottom: "13px" }}> '{tempPlace}' ??? ???????????? ?????? ?????? ?????????.</h1>
                        <p style={{ fontSize: "13px", marginTop: "5px" }}>?????? ????????? ??????????????????!</p>
                    </Modal>
                </DefaultLayout>
            ) : isAuthModalOpen ? (
                <DefaultLayout>
                    <Modal closeModal={onClickAuthModal} buttonText={"????????? ???????????? "}>
                        <h1 style={{ marginBottom: "13px" }}> ?????? ????????? ???????????????!</h1>
                        <p style={{ fontSize: "13px", marginTop: "5px" }}>????????? ??? ????????? ????????? ?????????</p>
                    </Modal>
                </DefaultLayout>
            ) : (
                <>
                    <UploadImg imgHandler={imgHandler} />
                    <SearchWrapper>
                        <div>??????</div>

                        {!isModalOpen && !isAuthModalOpen ? (
                            <ResultSearchBar
                                itemClickHandler={onClickItemHandler}
                                contentHandler={placeHandler}
                                type={"button"}
                                requestHandler={() => {
                                    setModalOpen(true);
                                }}
                            />
                        ) : null}
                        {place ? <SearchChip onClick={removePlaceHandler}>{place.placeName}</SearchChip> : null}
                    </SearchWrapper>
                    <DefaultLine />
                    <SearchWrapper>
                        <div style={{ display: "flex", margin: 0, gap: "10px", alignItems: "center" }}>
                            <div>?????????</div>
                            <BalloonTag text={"????????? ???????????? ????????? ???????????????!"}></BalloonTag>
                        </div>
                        {!isModalOpen && !isAuthModalOpen ? (
                            <SearchBar style={{ display: "hidden" }} submitHandler={keywordsHandler} />
                        ) : null}
                        <KewordsWrapper>
                            {keywords.map((keyword, index) => {
                                return (
                                    <SearchChip
                                        key={index + keyword}
                                        text={keyword}
                                        onClick={removeKeyWordsHandler}
                                    ></SearchChip>
                                );
                            })}
                        </KewordsWrapper>
                    </SearchWrapper>
                    <DefaultLine />
                    <ReviewLabel>
                        <h1 styled={{ padding: "22px" }}>?????? Tip</h1>
                        <div styled={{ position: "relative" }}>
                            <ReviewEditBox
                                ref={inputTip}
                                placeholder="????????? ????????? ??????????!"
                                onChange={(e) => {
                                    tipHandler(e.target.value);
                                }}
                                onClick={() => {
                                    inputTip.current.focus();
                                }}
                            />
                        </div>
                    </ReviewLabel>
                    <DefaultLine />
                    <ReviewLabel>
                        <h1 styled={{ padding: "22px" }}>??????</h1>
                    </ReviewLabel>
                    <RatingWrapper>
                        <h1>{"?????? ???????????? ??????????????????!"}</h1>
                        <StarRating style={{ width: "100%" }} starHandler={ratingHandler} />
                    </RatingWrapper>
                    <ReviewLabel>
                        <OkButton
                            disabled={!(imgs.length > 0 && place && keywords.length > 0 && content)}
                            onClick={onClickSubmit}
                        />
                    </ReviewLabel>
                    <StyledToastContainer
                        position="bottom-center"
                        autoClose={1000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    ></StyledToastContainer>
                </>
            )}
        </ScrollDiv>
    );
};

export default ReviewPage;
