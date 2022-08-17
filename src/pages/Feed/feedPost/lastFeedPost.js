import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";

export const feedArray2 = [
    {
        reviewid: 1,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 2,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 3,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 4,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 5,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 6,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 7,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 8,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 9,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 10,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 11,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 12,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 13,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 14,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 15,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 16,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 17,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 18,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 19,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
    },
    {
        reviewid: 20,
        image: "https://i.pinimg.com/originals/a6/3e/ed/a63eedcb9fc3d4f77cfe1f458f9587b5.png",
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
    gap: 1px;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

function LastFeedPost() {
    const navigate = useNavigate();
    return (
        <>
            <PostlistBox>
                {feedArray2.map(({ reviewid, image }) => (
                    <StyleBox
                        key={reviewid}
                        image={image}
                        onClick={() => navigate("/feed/detail", { state: { id: 1 } })}
                    ></StyleBox>
                ))}
            </PostlistBox>
        </>
    );
}

export default LastFeedPost;
