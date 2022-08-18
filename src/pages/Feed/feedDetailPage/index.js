import React, { useState, useEffect } from "react";
import { ScrollDiv, FeedLayout } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import BackHeader from "components/commons/BackHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { requestDetailFeed } from "apis";
import { useUserRecoilValue } from "recoil/userState";

const FeedDetailPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [feedDetail, setFeedDetail] = useState(null);

    const feedId = location.state.id;
    const user = useUserRecoilValue();

    useEffect(() => {
        requestDetailFeed({ reviewId: feedId, userId: user.authId })
            .then((res) => {
                setFeedDetail(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <BackHeader
                title={"후기"}
                clickHandler={() => {
                    navigate("/feed");
                }}
            />
            <FeedLayout>
                {feedDetail ? (
                    <PlaceDetail
                        id={feedId}
                        userId={feedDetail.userId}
                        profile={feedDetail.profile}
                        nickName={feedDetail.userName}
                        rating={feedDetail.rate ? feedDetail.rate : 0}
                        address={feedDetail.address}
                        img={feedDetail.image === null || feedDetail.image.length === 0 ? null : feedDetail.image[0]}
                        content={feedDetail.content}
                        tags={feedDetail.keywords}
                        helpNum={feedDetail.reviewLikeCnt}
                        like={feedDetail.like}
                    ></PlaceDetail>
                ) : null}
            </FeedLayout>
        </>
    );
};

export default FeedDetailPage;
