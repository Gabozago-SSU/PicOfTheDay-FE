import React from "react";
import { DefaultLayout } from "styles/layout";
import BackHeader from "components/commons/BackHeader";
import colors from "styles/colors";
import UploadImg from "components/UploadImg";

import SearchBar from "components/commons/SearchBar/searchBar";
import { ReviewEditBox, ScrollDiv, SearchWrapper, DefaultLine, RatingWrapper, ReviewLabel } from "./styles";
import StarRating from "components/Star/StarRating";
import OkButton from "components/commons/Button/okButton";
const ReviewPage = () => {
    return (
        <ScrollDiv>
            <BackHeader title={"후기 작성"} />
            <UploadImg></UploadImg>
            <SearchWrapper>
                <div>위치</div>
                <SearchBar />
            </SearchWrapper>
            <DefaultLine />
            <SearchWrapper>
                <div>키워드</div>
                <SearchBar />
            </SearchWrapper>
            <DefaultLine />
            <ReviewLabel>
                <h1 styled={{ padding: "22px" }}>방문 Tip</h1>
                <ReviewEditBox placeholder="방문시 꿀팁이 있다면?!" />
            </ReviewLabel>
            <DefaultLine />
            <ReviewLabel>
                <h1 styled={{ padding: "22px" }}>평점</h1>
            </ReviewLabel>
            <RatingWrapper>
                <h1>{"별을 클릭하여 평가해주세요!"}</h1>
                <StarRating style={{ width: "100%" }} />
            </RatingWrapper>
            <ReviewLabel>
                <OkButton />
            </ReviewLabel>
        </ScrollDiv>
    );
};

export default ReviewPage;
