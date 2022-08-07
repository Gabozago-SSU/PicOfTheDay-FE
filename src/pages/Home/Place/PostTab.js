import React, { useState, useEffect } from "react";
import { PostTabLayout, TabButton } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import PlusButton from "components/commons/Button/plusButton";

const PostTab = () => {
    const [focusTab, setFocusTab] = useState(0);
    const [posts, setPosts] = useState([1, 2]);
    useEffect(() => {}, [focusTab, posts]);

    const onClickAddBtn = () => {
        setPosts((prev) => prev.concat(prev[prev.length - 1] + 1));
    };

    return (
        <div>
            <PostTabLayout>
                <TabButton focused={focusTab === 0} onClick={() => setFocusTab(0)}>
                    인기게시물
                </TabButton>
                <TabButton focused={focusTab === 1} onClick={() => setFocusTab(1)}>
                    최근게시물
                </TabButton>
            </PostTabLayout>
            {posts.map((p) => {
                return (
                    <PlaceDetail
                        key={p}
                        profile={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLmOQYNXeFqlSq-DIIXj23q2YnEkBpbgIW3w&usqp=CAU"
                        }
                        img={
                            "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/3d281f7d-6b44-4550-ab20-856a1a8e0fc1.jpeg"
                        }
                        nickName={"멋사멋사"}
                        rating={3}
                        address={"지구 어딘가 어느 곳"}
                        content={"어디든 사실 가고 싶어요"}
                        helpNum={99}
                    ></PlaceDetail>
                );
            })}

            <div style={{ padding: "0 27px", marginBottom: "64px" }}>
                <PlusButton onClick={onClickAddBtn} />
            </div>
        </div>
    );
};

export default PostTab;
