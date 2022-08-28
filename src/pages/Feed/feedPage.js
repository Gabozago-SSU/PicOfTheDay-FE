import React from "react";
import ResultSearchBar from "components/commons/SearchBar/ResultSearchBar";
import TabList from "./feedTab/tablist";
import { ScrollDiv } from "./styles";
import { SearchHeaderLayout } from "./styles";
import KeywordSearchChip from "../../components/commons/Chip/KeywordSearchChip";
import { KeywordSearchLayout, KeywordScrollLayout } from "./styles";
import { KeyWordTabBanner, KeywordTitle, KeywordWhere, KeyWordWrapper } from "../../components/KeyWordTab/styles";

export const FeedKeyWord = ({ keywords }) => {
    return (
        <>
            <KeywordTitle>
                <KeyWordTabBanner>
                    <div>
                        <p>함께 태그되는 키워드</p>
                    </div>
                </KeyWordTabBanner>
            </KeywordTitle>
            <KeywordScrollLayout>
                <KeyWordWrapper>
                    <KeywordSearchLayout>
                        {keywords
                            ? keywords.map((keyword, index) => {
                                  return <KeywordSearchChip key={index + keyword}>{keyword}</KeywordSearchChip>;
                              })
                            : null}
                    </KeywordSearchLayout>
                </KeyWordWrapper>
            </KeywordScrollLayout>
        </>
    );
};

export const FeedPage = ({ keyword }) => {
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

                <hr style={{ height: "0.5px" }} />
                <KeywordWhere>
                    <FeedKeyWord keywords={["안녕하세요", "감성넘치는", "자연스러운", "귀여운", "사랑스러운"]} />
                </KeywordWhere>
                <hr style={{ height: "0.5px" }} />

                <TabList />
            </ScrollDiv>
        </>
    );
};

export default FeedPage;
