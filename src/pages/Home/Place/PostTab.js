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
                            key={index}
                            id={index}
                            userId={p.userId}
                            profile={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmOQYNXeFqlSq-DIIXj23q2YnEkBpbgIW3w&usqp=CAU"
                            }
                            img={
                                "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/3d281f7d-6b44-4550-ab20-856a1a8e0fc1.jpeg"
                            }
                            nickName={p.userName}
                            rating={p.rating ? p.rating : 0}
                            address={null}
                            content={p.content}
                            helpNum={p.likeCnt}
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
                            key={index}
                            profile={
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmOQYNXeFqlSq-DIIXj23q2YnEkBpbgIW3w&usqp=CAU"
                            }
                            img={
                                "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/3d281f7d-6b44-4550-ab20-856a1a8e0fc1.jpeg"
                            }
                            nickName={p.userName}
                            rating={p.rating ? p.rating : 0}
                            address={null}
                            content={"어디든 사실 가고 싶어요"}
                            helpNum={p.likeCnt}
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
