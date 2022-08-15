import React, { useState } from "react";
import SearchBar from "../SearchBar/searchBar";
import { HeaderLayout, SearchHeaderLayout } from "./styles";
import { SearchIc } from "./styles";
import Back from "../../../assets/PinkXIc.svg";

const Header = ({ searchHandler }) => {
    const [isDefault, setDefault] = useState(true);
    const onClickSearch = (text) => {
        searchHandler(text);
    };

    return (
        <>
            {isDefault ? (
                <HeaderLayout>
                    <SearchIc onClick={() => setDefault((prev) => !prev)} />
                </HeaderLayout>
            ) : (
                <SearchHeaderLayout>
                    <SearchBar submitHandler={onClickSearch} />
                    <p onClick={() => setDefault((prev) => !prev)}>cancel</p>
                    {/* <img src={Back} onClick={() => setDefault((prev) => !prev)}></img> */}
                </SearchHeaderLayout>
            )}
        </>
    );
};
export default React.memo(Header);
