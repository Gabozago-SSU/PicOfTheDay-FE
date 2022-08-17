import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import { requestRecentFeed } from "../../../apis/index";
import axios from "axios";

export const StyleBox = styled.div`
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-color: ${colors.black_60};
    background-image: url(${(props) => props.image});
`;

export const PostlistBox = styled.div`
    gap: 1px;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

function LastFeedPost() {
    const navigate = useNavigate();

    const [recentFeed, setRecentFeed] = useState([]);
    useEffect(() => {
        try {
            requestRecentFeed().then((res) => {
                setRecentFeed(res.data);
                console.log(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <>
            <PostlistBox>
                {recentFeed.map((i, index) => {
                    return (
                        <StyleBox
                            key={index}
                            image={i.image}
                            onClick={() => navigate("/feed/detail", { state: { id: i.reviewId } })}
                        ></StyleBox>
                    );
                })}
            </PostlistBox>
        </>
    );
}

export default LastFeedPost;
