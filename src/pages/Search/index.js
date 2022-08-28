import MultiSearchBar from "components/commons/SearchBar/MultiSearchBar";
import KeyWordTab from "components/KeyWordTab";
import PhotoCard from "components/PhotoCard";
import React, { useState, useEffect } from "react";
import colors from "styles/colors";
import { ScrollDiv, TagLayout } from "./styles";
import { CardWrapper, Line } from "./styles";
import { FeedKeyWord } from "pages/Feed/feedPage";
import { useLocation, useNavigate } from "react-router-dom";
import { requestSearchKeywordResult } from "../../apis/index";
const SearchPage = () => {
    const [tags, setTags] = useState([]);
    const [cards, setCards] = useState([]);

    const location = useLocation();
    const query = location.state;
    const [querySearch, setQuery] = useState(query);

    const navigate = useNavigate();
    const itemClickHandler = (value) => {
        if (value.type === "keyword") {
            requestSearchKeywordResult(querySearch.name)
                .then((res) => {
                    console.log(res);
                    setTags(res.data.keywords);
                    setCards(res.data.similarDtos);
                    setQuery(res.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        } else {
            navigate("/place", { state: value.id });
        }
    };
    useEffect(() => {
        requestSearchKeywordResult(querySearch.name)
            .then((res) => {
                console.log(res);
                setTags(res.data.keywords);
                setCards(res.data.similarDtos);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [querySearch]);

    return (
        <ScrollDiv>
            <MultiSearchBar
                itemClickHandler={itemClickHandler}
                init={querySearch ? querySearch.name : null}
            ></MultiSearchBar>
            <TagLayout>
                <FeedKeyWord keywords={tags} />
            </TagLayout>
            <Line></Line>
            <CardWrapper>
                {cards
                    ? cards.map((place, index) => (
                          <PhotoCard
                              key={index}
                              reviewId={place.reviewId}
                              placeId={place.placeId}
                              img={place.image}
                              category={place.category}
                              rating={place.rate}
                              placeName={place.title}
                          />
                      ))
                    : null}
            </CardWrapper>
        </ScrollDiv>
    );
};

export default SearchPage;
