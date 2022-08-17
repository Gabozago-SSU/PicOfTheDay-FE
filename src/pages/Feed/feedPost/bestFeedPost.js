import React, {useState} from "react";
import styled from "styled-components";
import colors from "styles/colors";
import { useNavigate } from "react-router-dom";
import { requestPopularFeed } from '../../../apis/index';

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

    try{
        requestPopularFeed().then((res) => {
            setPopularFeed();
            console.log(res);
        });
    } catch (err) {
        console.log(err);
    }


    return (
        <>
            <PostlistBox>
                {popularFeed && popularFeed.map(({ reviewid, image }) => (
                    <StyleBox
                        key={reviewid}
                        image={image}
                        // 저기 id 에 1대신 리뷰아이디 넘겨주기!
                        onClick={() => {
                            navigate("/feed/detail", { state: { id: reviewid } });
                        }}
                    />
                ))}
            </PostlistBox>
        </>
    );
}

export default BestFeedPost;
