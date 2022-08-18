import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";
import Magnifier from "../../../assets/magnifier.svg";
import colors from "styles/colors";
import { requestSearchPlace } from "apis";

const ResultSearchBar = ({ itemClickHandler, contentHandler, type, requestHandler }) => {
    const [content, setContent] = useState("");
    const [results, setResults] = useState([]);
    const [isSuccess, setIsSuccess] = useState(true);
    const [isHideTip, setHideTip] = useState(type !== undefined ? true : false);

    const input = useRef();

    const searchQuery = (query) => {
        if (query === "") return;
        try {
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
            searchQuery(e.target.value);
            contentHandler(e.target.value);
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
                            searchQuery(content);
                            setContent("");
                        }
                    }}
                    onSubmit={(e) => {
                        searchQuery(content);
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
                                        setHideTip(false);
                                        itemClickHandler(i);
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
            {type === undefined && results.length === 0 && content !== "" ? (
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
            {isHideTip && content !== "" && results.length === 0 ? (
                <S.SearchNotfoundBox>
                    <h1>등록되지 않은 장소입니다! </h1>
                    <p
                        onClick={() => {
                            input.current.blur();
                            setHideTip(true);
                            requestHandler();
                            setContent("");
                        }}
                    >
                        요청하기
                    </p>
                </S.SearchNotfoundBox>
            ) : null}
        </S.SearchBarLayout>
    );
};

export default ResultSearchBar;
