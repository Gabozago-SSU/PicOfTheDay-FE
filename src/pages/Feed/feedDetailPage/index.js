import React, { useState, useEffect } from "react";
import { ScrollDiv, FeedLayout } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import BackHeader from "components/commons/BackHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { requestDetailFeed } from "apis";

const FeedDetailPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [feedDetail, setFeedDetail] = useState([]);

    const feedId = location.state.id;
    console.log(feedId);

    useEffect(() => {
        requestDetailFeed({reviewId: feedId, userId: 1}).then((res) => {
            setFeedDetail(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <>
            <BackHeader
                title={"후기"}
                clickHandler={() => {
                    navigate("/feed");
                }}
            />
            <FeedLayout>
                        <PlaceDetail
                            id={feedDetail.reviewId}
                            userId={feedDetail.userId}
                            profile={
                                feedDetail.profile
                            }
                            nickName={feedDetail.userName}
                            rating={feedDetail.rate ? feedDetail.rate : 0}
                            address={feedDetail.address}
                            img={feedDetail.image}
                            content={feedDetail.content}
                            tags={feedDetail.keywords}
                            helpNum={feedDetail.reviewLikeCnt}
                        ></PlaceDetail>
            </FeedLayout>
        </>
    );
};

export default FeedDetailPage;
