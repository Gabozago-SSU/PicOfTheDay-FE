import MultiSearchBar from "components/commons/SearchBar/MultiSearchBar";
import KeyWordTab from "components/KeyWordTab";
import PhotoCard from "components/PhotoCard";
import React from "react";
import colors from "styles/colors";
import { ScrollDiv, TagLayout } from "./styles";
import { CardWrapper, Line } from "./styles";
import { FeedKeyWord } from "pages/Feed/feedPage";
const SearchPage = () => {
    const cards = [1, 2, 3, 4, 5];
    return (
        <ScrollDiv>
            <MultiSearchBar></MultiSearchBar>
            <TagLayout>
                <FeedKeyWord keywords={["hi", "help", "me"]} />
            </TagLayout>
            <Line></Line>

            <CardWrapper>{cards ? cards.map((c) => <PhotoCard bigSize={true} />) : null}</CardWrapper>
        </ScrollDiv>
    );
};

export default SearchPage;
