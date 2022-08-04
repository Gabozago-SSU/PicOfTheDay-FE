import React from "react";
import { css } from "styled-components";
import { CategoryImg, CategoryRoundLayout } from "./styles";
import { getIconByType } from "../../../constant/category";
import colors from "../../../styles/colors";

const CategoryChip = ({ type }) => {
    return (
        <CategoryRoundLayout>
            <CategoryImg src={getIconByType(type)}></CategoryImg>
            {type}
        </CategoryRoundLayout>
    );
};

export default CategoryChip;
