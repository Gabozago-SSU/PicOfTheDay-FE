import LandMarkIc from "../assets/LandMarkIc.svg";
import CafeIc from "../assets/CafeIc.svg";
import ExhibitionIc from "../assets/ExhibitionIc.svg";
import FestivalIc from "../assets/FestivalIc.svg";
import NatureIc from "../assets/NatureIc.svg";
import RestaurantIc from "../assets/RestaurantIc.svg";
import ShoppingIc from "../assets/ShoppingIc.svg";

export const getIconByType = (type) => {
    switch (type) {
        case "랜드마크":
            return LandMarkIc;
        case "카페":
            return CafeIc;
        case "전시회":
            return ExhibitionIc;
        case "축제":
            return FestivalIc;
        case "자연":
            return NatureIc;
        case "음식점":
            return RestaurantIc;
        case "쇼핑":
            return ShoppingIc;
        default:
            return ShoppingIc;
    }
};
