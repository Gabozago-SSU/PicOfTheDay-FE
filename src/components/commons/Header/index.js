import React from "react";
import { HeaderLayout } from "./styles";
import { SearchIc } from "./styles";

const Header = () => {
    return (
        <HeaderLayout>
            <SearchIc />
        </HeaderLayout>
    );
};
export default React.memo(Header);
