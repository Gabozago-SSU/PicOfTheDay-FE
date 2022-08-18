import React, { useState, useEffect, useCallback } from "react";
import { PostTabLayout, TabButton } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import PlusButton from "components/commons/Button/plusButton";
import { useRecentPlaceRecoilValue, usePoPularPlaceRecoilValue, popularPlaceList } from "../../../recoil/placeState";

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
    const placeLoadable = usePoPularPlaceRecoilValue(placeId);
    let populars = "";

    switch (placeLoadable.state) {
        case "hasValue":
            populars = placeLoadable.contents;
            console.log("update popular", populars);

            return populars.map((p, index) => {
                if (index < totPost)
                    return (
                        <PlaceDetail
                            key={"recent" + p.reviewId}
                            id={p.reviewId}
                            userId={p.userId}
                            profile={p.profile}
                            img={p.img}
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
        case "hasError":
            populars = placeLoadable.contents.message;
            break;
        case "loading":
            populars = "Loading...";
            break;
        default:
            populars = "Loading...";
    }
};

const PostRecentList = ({ placeId, totPost }) => {
    const placeLoadable = useRecentPlaceRecoilValue(placeId);

    let populars = "";

    switch (placeLoadable.state) {
        case "hasValue":
            populars = placeLoadable.contents;
            console.log("update recent", populars);
            return populars.map((p, index) => {
                if (index < totPost)
                    return (
                        <PlaceDetail
                            key={"pop" + p.reviewId}
                            id={p.reviewId}
                            userId={p.userId}
                            profile={p.profile}
                            img={p.img}
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
        case "hasError":
            populars = placeLoadable.contents.message;
            break;
        case "loading":
            populars = "Loading...";
            break;
        default:
            populars = "Loading...";
    }
};
