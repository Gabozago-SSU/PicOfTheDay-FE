import React, { useState, useRef, useLayoutEffect } from "react";
import * as S from "./styles";
import Magnifier from "../../../assets/magnifier.svg";
import colors from "styles/colors";

const ResultSearchBar = ({ submitHandler, list }) => {
    const [content, setContent] = useState("");

    const input = useRef();

    const onChange = (e) => {
        setContent(e.target.value);
    };
    return (
        <S.SearchBarLayout>
            <S.SearchBox>
                <S.MagnifierIcon
                    src={Magnifier}
                    onClick={() => {
                        submitHandler(content);
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
                            submitHandler(content);
                            setContent("");
                        }
                    }}
                    onSubmit={(e) => {
                        submitHandler(content);
                        setContent("");
                        input.current.value = "";
                    }}
                    onChange={(e) => {
                        onChange(e);
                    }}
                ></S.StyleSearchBar>
            </S.SearchBox>
            {list !== undefined ? (
                <>
                    <hr style={{ width: "95%", height: "0.5px", border: `0.5px solid ${colors.black_30}` }} />
                    <S.SearchListWrapper>
                        {list.map((i) => {
                            return <li>{i.id}</li>;
                        })}
                    </S.SearchListWrapper>
                </>
            ) : null}
        </S.SearchBarLayout>
    );
};

export default ResultSearchBar;
