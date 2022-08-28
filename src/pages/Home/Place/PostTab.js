import React, { useState, useEffect, useCallback } from "react";
import { PostTabLayout, TabButton } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import PlusButton from "components/commons/Button/plusButton";
import { useRecentPlaceRecoilValue, usePoPularPlaceRecoilValue, popularPlaceList } from "../../../recoil/placeState";
import { requestRecentPlace, requestPopularPlace } from "../../../apis/index";
import { useUserRecoilValue } from "recoil/userState";

const PostTab = ({ placeId }) => {
    const [focusTab, setFocusTab] = useState(0);
    const [posts, setPosts] = useState(3);

    useEffect(() => {
        console.log("postupdate", posts);
    }, [focusTab, posts]);

    const onClickAddBtn = () => {
        setPosts((prev) => prev + 1);
    };

    return (
        <div>
            <PostTabLayout>
                <TabButton
                    focused={focusTab === 0}
                    onClick={() => {
                        setPosts(3);
                        setFocusTab(0);
                    }}
                >
                    인기게시물
                </TabButton>
                <TabButton
                    focused={focusTab === 1}
                    onClick={() => {
                        setPosts(3);
                        setFocusTab(1);
                    }}
                >
                    최근게시물
                </TabButton>
            </PostTabLayout>
            {focusTab === 0 ? (
                <PostPoPularList placeId={placeId} totPost={posts} />
            ) : (
                <PostRecentList placeId={placeId} totPost={posts} />
            )}

            <div style={{ padding: "0 27px", marginBottom: "64px" }}>
                <PlusButton onClick={onClickAddBtn} />
            </div>
        </div>
    );
};

export default PostTab;

const PostPoPularList = ({ placeId, totPost }) => {
    const user = useUserRecoilValue();
    const [populars, setPlace] = useState([]);
    useEffect(() => {
        if (user !== null)
            requestPopularPlace({ userId: user.authId, placeId: placeId }).then((res) => {
                setPlace(res.data);
                console.log(res.data);
            });
    }, []);

    return populars.map((p, index) => {
        if (index < totPost)
            return (
                <PlaceDetail
                    key={"recent" + p.reviewId}
                    id={p.reviewId}
                    userId={p.userId}
                    profile={p.profile}
                    img={p.image}
                    nickName={p.userName}
                    rating={p.rating ? p.rating : 0}
                    address={null}
                    content={p.content}
                    helpNum={p.likeCnt}
                    like={p.like}
                    tags={p.keywords}
                ></PlaceDetail>
            );
    });
};

const PostRecentList = ({ placeId, totPost }) => {
    const user = useUserRecoilValue();
    const [populars, setPlace] = useState([]);
    useEffect(() => {
        if (user !== null)
            requestRecentPlace({ userId: user.authId, placeId: placeId }).then((res) => {
                setPlace(res.data);
            });
    }, []);

    return populars.map((p, index) => {
        if (index < totPost)
            return (
                <PlaceDetail
                    key={"recent" + p.reviewId}
                    id={p.reviewId}
                    userId={p.userId}
                    profile={p.profile}
                    img={p.image}
                    nickName={p.userName}
                    rating={p.rating ? p.rating : 0}
                    address={null}
                    content={p.content}
                    helpNum={p.likeCnt}
                    like={p.like}
                    tags={p.keywords}
                ></PlaceDetail>
            );
    });
};
