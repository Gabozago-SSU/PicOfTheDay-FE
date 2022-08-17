import React from "react";
import { ScrollDiv, FeedLayout } from "./styles";
import PlaceDetail from "components/PlaceDetail";
import BackHeader from "components/commons/BackHeader";
import { useLocation, useNavigate } from "react-router-dom";

const FeedDetailPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const feedId = location.state.id;
    console.log(feedId);
    return (
        <>
            <BackHeader
                title={"후기"}
                clickHandler={() => {
                    navigate("/feed");
                }}
            />
            <FeedLayout>
                <PlaceDetail
                    id={1}
                    userId={1}
                    profile={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHd_nGKN8u9YW9VXJ1BvAmkEmQLzKse4SsQ&usqp=CAU"
                    }
                    nickName={"살려주세요"}
                    rating={1}
                    address={"어디 where"}
                    img={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0DJGUs616moJROuUonY9HUAf1wPaCjOSWg&usqp=CAU"
                    }
                    content={"내용임다"}
                    tags={["wow", "yeah"]}
                    helpNum={17171}
                ></PlaceDetail>
            </FeedLayout>
        </>
    );
};

export default FeedDetailPage;
