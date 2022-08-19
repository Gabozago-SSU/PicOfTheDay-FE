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
import { requestSimilarPlace, requestPlace } from "../../../apis/index";

const PlacePage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [placeId, setPlaceId] = useState(state);
    const [similar, setSimilar] = useState([]);
    const [placed, setPlaced] = useState(null);
    const user = useUserRecoilValue();

    const placeLoadable = usePlaceRecoilValue(placeId);
    let place = "";

    switch (placeLoadable.state) {
        case "hasValue":
            place = placeLoadable.contents;
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

    useEffect(() => {
        try {
            requestPlace({ placeId: placeId, userId: user.authId })
                .then((res) => {
                    console.log(res);
                    setPlaced(res.data);
                    return res.data;
                })
                .then((r) => {
                    requestSimilarPlace(r.category).then((res) => {
                        console.log(res);
                        setSimilar(res.data);
                    });
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

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
                {place !== "Loading..." ? (
                    <CardWrapper>
                        {similar
                            ? similar.map((place, index) => {
                                  return (
                                      <PhotoCard
                                          reviewId={place.reviewId}
                                          placeId={place.place_id}
                                          img={place.image}
                                          category={place.category}
                                          rating={place.rate}
                                          key={index}
                                          placeName={place.title}
                                          //   onClick={() => {
                                          //       if (placeId !== place.place_id) setPlaceId(place.place_id);
                                          //   }}
                                      />
                                  );
                              })
                            : null}
                    </CardWrapper>
                ) : null}
            </RecomandBox>
        </ScrollDiv>
    );
};

export default PlacePage;
