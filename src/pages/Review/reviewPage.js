import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import BackHeader from "components/commons/BackHeader";
import colors from "styles/colors";
import UploadImg from "components/UploadImg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "components/commons/SearchBar/searchBar";
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
const ReviewPage = () => {
    const inputTip = useRef();
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [place, setPlace] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [imgs, setImgs] = useState([]);
    const [toastCnt, setToastCnt] = useState(0);

    const imgHandler = (imgList) => {
        setImgs(imgList);
        console.log(imgList);
    };

    const ratingHandler = (value) => {
        setRating(value);
    };

    function placeHandler(content) {
        console.log("location", content);
        setPlace(content);
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
        console.log("tip", content);
        setContent(content);
    }

    const onClickSubmit = () => {
        //API 호출 시점
        console.log(`place: ${place} content: ${content} keyword:  ${keywords} rating: ${rating}`);

        if (toastCnt > 0) return;
        setTimeout(() => {
            if (toastCnt === 0) {
                setToastCnt(1);
                toast("후기가 작성되었습니다.", {
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

    const validaton = () => {
        if (imgs.length > 0 && place && keywords.length > 0 && content) return true;
        else return false;
    };

    return (
        <ScrollDiv>
            <BackHeader title={"후기 작성"} />
            <UploadImg imgHandler={imgHandler} />
            <SearchWrapper>
                <div>위치</div>
                <SearchBar submitHandler={placeHandler} isFocus={true} />
                {place ? <SearchChip onClick={removePlaceHandler}>{place}</SearchChip> : null}
            </SearchWrapper>
            <DefaultLine />
            <SearchWrapper>
                <div style={{ display: "flex", margin: 0, gap: "10px", alignItems: "center" }}>
                    <div>키워드</div>
                    <BalloonTag text={"사진과 어울리는 태그를 달아보세요!"}></BalloonTag>
                </div>

                <SearchBar submitHandler={keywordsHandler} />
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
                <h1 styled={{ padding: "22px" }}>방문 Tip</h1>
                <div styled={{ position: "relative" }}>
                    <ReviewEditBox
                        ref={inputTip}
                        placeholder="방문시 꿀팁이 있다면?!"
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
                <h1 styled={{ padding: "22px" }}>평점</h1>
            </ReviewLabel>
            <RatingWrapper>
                <h1>{"별을 클릭하여 평가해주세요!"}</h1>
                <StarRating style={{ width: "100%" }} starHandler={ratingHandler} />
            </RatingWrapper>
            <ReviewLabel>
                <OkButton disabled={!validaton()} onClick={onClickSubmit} />
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
        </ScrollDiv>
    );
};

export default ReviewPage;
