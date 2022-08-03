import React from "react";
import styled from "styled-components";

export const StyleSearchBar = styled.input`
    border-radius: 5px;
    border: 1px solid #cecece;
    box-sizing: border-box;
`;

const SearchBar = () => {
    //StyleSearchBar 자체가 input 이기 때문에 안에 또 input을 넣어줄 필요가 없슴다
    return <StyleSearchBar placeholder="검색"></StyleSearchBar>;
};

export default SearchBar;
