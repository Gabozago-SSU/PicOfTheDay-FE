import React from "react";
import ResultSearchBar from "components/commons/SearchBar/ResultSearchBar";
import TabList from "./feedTab/tablist";
import { ScrollDiv } from "./styles";
import { SearchHeaderLayout } from "./styles";

const FeedPage = () => {
    const onClickSearch = (value) => {};
    const contentHandler = (text) => {
        console.log("입력", text);
    };
    return (
        <>
            <ScrollDiv>
                <SearchHeaderLayout>
                    <ResultSearchBar itemClickHandler={onClickSearch} contentHandler={contentHandler} />
                </SearchHeaderLayout>
                <TabList />
            </ScrollDiv>
        </>
    );
};

export default FeedPage;
