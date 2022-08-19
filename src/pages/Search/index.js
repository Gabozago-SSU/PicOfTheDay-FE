import MultiSearchBar from "components/commons/SearchBar/MultiSearchBar";
import KeyWordTab from "components/KeyWordTab";
import PhotoCard from "components/PhotoCard";
import React, { useState, useEffect } from "react";
import colors from "styles/colors";
import { ScrollDiv, TagLayout } from "./styles";
import { CardWrapper, Line } from "./styles";
import { FeedKeyWord } from "pages/Feed/feedPage";
import { useLocation } from "react-router-dom";
import { requestSearchKeywordResult } from "../../apis/index";
const SearchPage = () => {
    const [tags, setTags] = useState([]);
    const [cards, setCards] = useState([1, 2, 3, 4, 5, 7]);

    const location = useLocation();
    const query = location.state;
    const itemClickHandler = (value) => {
        console.log("search multi  : ", value);
    };
    useEffect(() => {
        // requestSearchKeywordResult(query.name)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     });
    }, []);

    return (
        <ScrollDiv>
            <MultiSearchBar itemClickHandler={itemClickHandler} init={query ? query.name : null}></MultiSearchBar>
            <TagLayout>
                <FeedKeyWord keywords={tags} />
            </TagLayout>
            <Line></Line>
            <CardWrapper>{cards ? cards.map((c) => <PhotoCard bigSize={true} isAd={true} />) : null}</CardWrapper>
        </ScrollDiv>
    );
};

export default SearchPage;
