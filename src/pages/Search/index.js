import MultiSearchBar from "components/commons/SearchBar/MultiSearchBar";
import KeyWordTab from "components/KeyWordTab";
import PhotoCard from "components/PhotoCard";
import React from "react";
import colors from "styles/colors";
import { ScrollDiv } from "./styles";
import { CardWrapper } from "./styles";

const SearchPage = () => {
    const cards = [1, 2, 3, 4, 5];
    return (
        <ScrollDiv>
            <MultiSearchBar></MultiSearchBar>
            <KeyWordTab keywords={[1, 2, 3, 4]} />
            <hr style={{ height: "2px", color: `${colors.black_20}`, width: "100%" }} />
            <CardWrapper>{cards ? cards.map((c) => <PhotoCard bigSize={true} />) : null}</CardWrapper>
        </ScrollDiv>
    );
};

export default SearchPage;
