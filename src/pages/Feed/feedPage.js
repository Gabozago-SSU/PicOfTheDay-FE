import React from "react";
import SearchBar from "components/commons/SearchBar/searchBar";
import TabList from "./feedTab/tablist";
import { ScrollDiv } from "./styles";

const FeedPage = () => {
    return (
        <ScrollDiv>
            <div style={{ width: "100%", padding: "  14px" }}>
                <SearchBar />
            </div>

            <TabList />
        </ScrollDiv>
    );
};

export default FeedPage;
