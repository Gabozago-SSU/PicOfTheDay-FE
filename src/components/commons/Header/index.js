import React, { useState } from "react";

import { HeaderLayout, SearchHeaderLayout } from "./styles";
import { SearchIc } from "./styles";
import Back from "../../../assets/PinkXIc.svg";
import MultiSearchBar from "../SearchBar/MultiSearchBar";

const Header = ({ searchHandler }) => {
    const [isDefault, setDefault] = useState(true);
    const onClickSearch = (value) => {
        searchHandler(value);
    };
    const contentHandler = (text) => {
        console.log("입력", text);
    };
    return (
        <>
            {isDefault ? (
                <HeaderLayout>
                    <SearchIc onClick={() => setDefault((prev) => !prev)} />
                </HeaderLayout>
            ) : (
                <SearchHeaderLayout>
                    <MultiSearchBar itemClickHandler={onClickSearch} contentHandler={contentHandler} />
                    {/* <p onClick={() => setDefault((prev) => !prev)}>cancel</p> */}
                    <img src={Back} onClick={() => setDefault((prev) => !prev)} className={"header-back"}></img>
                </SearchHeaderLayout>
            )}
        </>
    );
};
export default React.memo(Header);
