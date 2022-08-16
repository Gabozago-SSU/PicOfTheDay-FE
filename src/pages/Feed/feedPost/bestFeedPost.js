import React from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { useNavigate } from "react-router-dom";

export const feedArray1 = [
    {
        reviewid: 1,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 2,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 3,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 4,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 5,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 6,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 7,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 8,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 9,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 10,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 11,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 12,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 13,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 14,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 15,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 16,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 17,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 18,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 19,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
    {
        reviewid: 20,
        image: "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
    },
];

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
    return (
        <>
            <PostlistBox>
                {feedArray1.map(({ reviewid, image }) => (
                    <StyleBox
                        key={reviewid}
                        image={image}
                        // 저기 id 에 1대신 리뷰아이디 넘겨주기!
                        onClick={() => {
                            navigate("/feed/detail", { state: { id: 1 } });
                        }}
                    ></StyleBox>
                ))}
            </PostlistBox>
        </>
    );
}

export default BestFeedPost;
