import React, { useState, useEffect } from "react";
import { DefaultLayout } from "styles/layout";
import BackHeader from "components/commons/BackHeader";
import colors from "styles/colors";
import UploadImg from "components/UploadImg";

import SearchBar from "components/commons/SearchBar/searchBar";
import {
    ReviewEditBox,
    ScrollDiv,
    SearchWrapper,
    DefaultLine,
    RatingWrapper,
    ReviewLabel,
    KewordsWrapper,
} from "./styles";
import StarRating from "components/Star/StarRating";
import OkButton from "components/commons/Button/okButton";
import SearchChip from "components/commons/Chip/SearchChip";
const ReviewPage = () => {
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");
    const [place, setPlace] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        console.log(keywords);
    }, [keywords]);

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

    const removeKeyWordsHandler = (keyword) => {
        const newKeyword = keywords.filter((v) => v !== keyword);
        setKeywords(newKeyword);
    };

    const onClickSubmit = () => {
        //API 호출 시점
        console.log(`place: ${place} content: ${content} keyword:  ${keywords} rating: ${rating}`);
    };

    const validaton = (img, place, keyword, content, rating) => {
        if (img && place && keyword && content) return true;
        else return false;
    };

    return (
        <ScrollDiv>
            <BackHeader title={"후기 작성"} />
            <UploadImg imgHandler={imgHandler} />
            <SearchWrapper>
                <div>위치</div>
                <SearchBar submitHandler={placeHandler} />
                {place ? <SearchChip>{place}</SearchChip> : null}
            </SearchWrapper>
            <DefaultLine />
            <SearchWrapper>
                <div>키워드</div>
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
                        placeholder="방문시 꿀팁이 있다면?!"
                        onChange={(e) => {
                            setContent(e.target.value);
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
                <OkButton disabled={!(place !== "" && keywords.length !== 0 && content)} onClick={onClickSubmit} />
            </ReviewLabel>
        </ScrollDiv>
    );
};

export default ReviewPage;
