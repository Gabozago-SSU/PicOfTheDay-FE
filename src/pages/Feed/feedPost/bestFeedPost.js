import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { useNavigate } from "react-router-dom";
import { requestPopularFeed } from "../../../apis/index";

export const StyleBox = styled.div`
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-color: ${colors.black_60};
    background-image: url(${(props) => props.image});
`;
export const PostlistBox = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    justify-content: center;
    margin: 0 auto;
`;

function BestFeedPost() {
    const navigate = useNavigate();

    const [popularFeed, setPopularFeed] = useState([]);

    //최초 초기화는 useEffect에서 하는 것이 좋음
    useEffect(() => {
        try {
            requestPopularFeed()
                .then((res) => {
                    setPopularFeed(res.data); //받은 데이터 배열 넣기!
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    //맵 아이템(i) or 아이템 & 인덱스(i , index) 조합만 가능
    return (
        <>
            <PostlistBox>
                {popularFeed &&
                    popularFeed.map((i, index) => (
                        <StyleBox
                            key={index}
                            image={i.image[0]} // 아이템에서 꺼내쓰기
                            // 저기 id 에 1대신 리뷰아이디 넘겨주기!
                            onClick={() => {
                                navigate("/feed/detail", { state: { id: i.reviewId } });
                            }}
                        />
                    ))}
            </PostlistBox>
        </>
    );
}

export default BestFeedPost;
