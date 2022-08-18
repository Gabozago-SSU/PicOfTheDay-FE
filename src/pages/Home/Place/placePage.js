import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PlaceInfo from "components/PlaceInfo";
import PostTab from "./PostTab";
import PlaceBanner from "../../../components/PlaceBanner/index";
import KeyWordTab from "../../../components/KeyWordTab/index";

import colors from "../../../styles/colors";

import PhotoCard from "components/PhotoCard";
import { ScrollDiv, CardWrapper, RecomandBox } from "./styles";

import { usePlaceRecoilValue } from "recoil/placeState";
import { useLocation, useNavigate } from "react-router-dom";
import BackHeader from "components/commons/BackHeader";
import { useUserRecoilValue } from "recoil/userState";

const PlacePage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const placeId = state;
    const user = useUserRecoilValue();

    const places = [1, 2, 3, 4, 5, 6, 7, 8];
    const keywords = [
        "감성이 넘치는",
        "서울핫플",
        "자연친화적인",
        "초록색",
        "감성이 넘치는",
        "서울핫플",
        "자연친화적인",
        "초록색",
        "서울핫플",
        "자연친화적인",
        "초록색",
    ];

    const placeLoadable = usePlaceRecoilValue(placeId);
    let place = "";

    switch (placeLoadable.state) {
        case "hasValue":
            place = placeLoadable.contents;
            console.log("place", place.like);
            break;
        case "hasError":
            place = placeLoadable.contents.message;
            break;
        case "loading":
            place = "Loading...";
            break;
        default:
            place = "Loading...";
    }

    const onClickBackHandler = () => {
        navigate("/");
    };

    return (
        <ScrollDiv>
            <BackHeader clickHandler={onClickBackHandler} />

            <PlaceBanner banners={place.images} />
            {place !== "Loading..." ? (
                <PlaceInfo
                    like={place.like}
                    place={place}
                    placeId={placeId}
                    category={place.category}
                    phone={place.phoneNumber}
                    name={place.name}
                    address={place.address}
                    rating={place.rate}
                    reviewNum={place.reviewCnt}
                />
            ) : null}

            <hr style={{ height: "0.5px", border: `0.5px solid ${colors.black_30}` }} />
            <KeyWordTab keywords={place.keywords} />
            <hr style={{ height: "0.5px", border: `0.5px solid ${colors.black_30}`, margin: 0 }} />

            <PostTab placeId={placeId} />

            <RecomandBox>
                <div style={{ display: "flex", marginBottom: "5px" }}>
                    <h1>{place.name}</h1>
                    <p>과 비슷한 포토존</p>
                </div>
                <CardWrapper>
                    {places.map((place, index) => {
                        return <PhotoCard key={index} category={"자연"} rating={5} placeName={"장소 이름"} />;
                    })}
                </CardWrapper>
            </RecomandBox>
        </ScrollDiv>
    );
};

export default PlacePage;
