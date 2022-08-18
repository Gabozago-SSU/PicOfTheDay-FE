import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import Magnifier from "../../../assets/magnifier.svg";
import colors from "styles/colors";
import { requestSearchPlace } from "apis";

const MultiSearchBar = ({ itemClickHandler, contentHandler }) => {
    const [content, setContent] = useState("");
    const [results, setResults] = useState([]);
    const [isSuccess, setIsSuccess] = useState(true);
    const [isKeyword, setIsKeyword] = useState(null);

    const input = useRef();

    const searchQuery = (query) => {
        if (query === "") return;
        try {
            console.log("placeSearch");
            requestSearchPlace(query)
                .then((res) => {
                    if (res.data === []) setIsSuccess(false);
                    else setIsSuccess(true);
                    setResults(res.data);
                })
                .catch((e) => {
                    setResults([]);
                    setIsSuccess(false);
                });
        } catch (err) {
            console.log(err);
        } finally {
        }
    };
    const searchKeywordQuery = (query) => {
        if (query === "") return;
        try {
            console.log("keywordSearch");
            requestSearchPlace(query)
                .then((res) => {
                    if (res.data === []) setIsSuccess(false);
                    else setIsSuccess(true);

                    setResults(res.data);
                })
                .catch((e) => {
                    setResults([]);
                    setIsSuccess(false);
                });
        } catch (err) {
            console.log(err);
        } finally {
        }
    };
    const onChange = (e) => {
        setContent(e.target.value);
        setTimeout(() => {
            //TODO
            if (e.target.value.includes("#")) {
                setIsKeyword(false);
                searchKeywordQuery(e.target.value);
            } else {
                setIsKeyword(false);
                searchQuery(e.target.value);
            }
            contentHandler(e.target.value); //text 보내기용
        }, 200);
    };
    return (
        <S.SearchBarLayout>
            <S.SearchBox>
                <S.MagnifierIcon
                    src={Magnifier}
                    onClick={() => {
                        searchQuery(content);
                        setContent("");
                        input.current.value = "";
                    }}
                ></S.MagnifierIcon>
                <S.StyleSearchBar
                    ref={input}
                    value={content}
                    placeholder="검색"
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            setContent("");
                        }
                    }}
                    onSubmit={(e) => {
                        setContent("");
                        input.current.value = "";
                    }}
                    onChange={(e) => {
                        onChange(e);
                    }}
                ></S.StyleSearchBar>
            </S.SearchBox>
            {content !== "" && isSuccess && results.length > 0 ? (
                <>
                    <hr style={{ width: "95%", height: "0.5px", border: `0.5px solid ${colors.black_30}` }} />
                    <S.SearchListWrapper>
                        {results.map((i, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        setResults([]);
                                        itemClickHandler(
                                            isKeyword
                                                ? { type: "keyword", id: null, name: i.keyword }
                                                : { type: "place", id: i.placeId, name: i.placeName },
                                        );
                                        setContent("");
                                    }}
                                >
                                    {i.placeName}
                                </li>
                            );
                        })}
                    </S.SearchListWrapper>
                </>
            ) : null}
            {results.length === 0 && content !== "" ? (
                <h1
                    style={{
                        margin: "0 auto",
                        paddingTop: "10px",
                        fontSize: "12px",
                    }}
                >
                    검색결과 없음
                </h1>
            ) : null}
        </S.SearchBarLayout>
    );
};

export default MultiSearchBar;
