import React, { useState, useEffect } from "react";
import { ScrollDiv, FeedLayout } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import BackHeader from "components/commons/BackHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { requestDetailFeed } from "apis";

const FeedDetailPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [recentFeedDetail, setRecentFeedDetail] = useState([]);

    useEffect(() => {
        requestDetailFeed({ reviewId: feedId, userId: 1 });
    }, []);

    const detailfeedPostList = () => {
        try {
            requestDetailFeed().then((res) => {
                setRecentFeedDetail(res.data);
                console.log(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const feedId = location.state.id;

    return (
        <>
            <BackHeader
                title={"후기"}
                clickHandler={() => {
                    navigate("/feed");
                }}
            />
            <FeedLayout>
                {recentFeedDetail.map(({ reviewid }) => {
                    return (
                        <PlaceDetail
                            onClick={detailfeedPostList}
                            id={reviewid}
                            userId={reviewid}
                            profile={reviewid.profile}
                            nickName={reviewid.nickName}
                            rating={reviewid.rating}
                            address={reviewid.address}
                            img={reviewid.img}
                            content={reviewid.content}
                            tags={reviewid.tag}
                            helpNum={reviewid.helpNum}
                        ></PlaceDetail>
                    );
                })}
            </FeedLayout>
        </>
    );
};

export default FeedDetailPage;
