import React, { useState, useEffect } from "react";
import Heart from "../../assets/HeartIc.svg";
import colors from "styles/colors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MyContentTab = ({ mypagereviews, myLikes }) => {
    const [focusTab, setFocusTab] = useState(0);
    const [myPosts, setMyPosts] = useState(mypagereviews ? mypagereviews : []);
    const [likePosts, setLikePosts] = useState(myLikes ? myLikes : []);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(mypagereviews);
    }, [focusTab]);

    const onClickReview = (id) => {
        navigate("/feed/detail", { state: { id: id } });
    };

    return (
        <div>
            <PostTabLayout>
                <TabButton focused={focusTab === 0} onClick={() => setFocusTab(0)}>
                    나의리뷰
                </TabButton>
                <TabButton focused={focusTab === 1} onClick={() => setFocusTab(1)}>
                    좋아요한 리뷰
                </TabButton>
            </PostTabLayout>
            {(mypagereviews !== undefined && mypagereviews.length > 0) ||
            (myLikes !== undefined && likePosts.length > 0) ? (
                <PostListWrapper>
                    {focusTab === 0
                        ? mypagereviews.map((p, index) => {
                              return (
                                  <PostContent
                                      key={index}
                                      img={p.reviewImage}
                                      onClick={() => {
                                          onClickReview(p.reviewId);
                                      }}
                                  ></PostContent>
                              );
                          })
                        : myLikes.map((p, index) => {
                              return (
                                  <PostContent
                                      key={index}
                                      img={p.image}
                                      onClick={() => {
                                          onClickReview(p.reviewId);
                                      }}
                                  >
                                      <HeartIcon onClick={() => {}} />
                                  </PostContent>
                              );
                          })}
                </PostListWrapper>
            ) : null}
        </div>
    );
};

export default MyContentTab;

const PostTabLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin-top: 14px;
`;

const TabButton = styled.button`
    background-color: transparent;
    padding: 10px;
    flex-grow: 1;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: ${(props) => {
        return getTextColor(props.focused);
    }};

    ${(props) => getBorderState(props.focused)}

    &:active {
        background-color: ${colors.black_20};
        filter: brightness(0.9);
        opacity: 0.8;
    }
`;

const PostListWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    transform: translate(0, -1px);
`;

const PostContent = styled.div`
    width: 100;
    padding-top: 100%;
    background-position: center;
    position: relative;
    ${(props) => setImg(props.img)}
`;

const HeartIcon = styled.div`
    width: 28px;
    height: 28px;
    background-image: url(${Heart});
    background-size: cover;
    right: 10px;
    bottom: 10px;
    position: absolute;
`;
const getTextColor = (focused) => {
    return focused ? `${colors.black_80}` : `${colors.black_40}`;
};

const getBorderState = (focused) => {
    return focused ? `border-bottom : 1.5px solid black ;` : null;
};

const setImg = (img) => {
    return `  background-image: url(${img}); background-size: cover;`;
};
