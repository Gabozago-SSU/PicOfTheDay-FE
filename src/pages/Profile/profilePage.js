import React from "react";
import BackHeader from "components/commons/BackHeader";
import ProfilePost from "./profilePost";
import { StyledProfileimg, StyledFeedNikname } from "./styleProfile";
import FeedProfileImg from "./feedProfile";
import { TabListLayout } from "pages/Feed/feedTab/styleTablist";
import { useState } from "react";
import { useEffect } from "react";
import { requestOtherUserpage } from "../../apis/index";
import { useLocation } from "react-router-dom";
import ProfileCircle from "../../assets/ProfileCircle.svg";
import { useNavigate } from "react-router-dom";
import { DefaultLayout } from "styles/layout";
import Modal from "components/commons/Modal";

function ProfilePage() {
    const [otherUserProfile, setOtherUserProfile] = useState("");
    const [otherUserName, setOtherUserName] = useState("");
    const [otherReviews, setOtherReviews] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    
    const otherId = location.state.id;


    useEffect(() => {
        requestOtherUserpage(otherId)
            .then((res) => {
                setOtherUserProfile(res.data.profileImage);
                setOtherUserName(res.data.name);
                setOtherReviews(res.data.userReviews);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onClickBackHandler = () => {
        navigate("/feed/detail");
    };

    return (
        <>
            <BackHeader title={"프로필"} clickHandler={onClickBackHandler} />

            <StyledProfileimg>
                <FeedProfileImg img={otherUserProfile ? otherUserProfile : ProfileCircle} />
                <StyledFeedNikname>{otherUserName}</StyledFeedNikname>
            </StyledProfileimg>
            <ProfilePost reviews={otherReviews} />
        </>
    );
}

export default ProfilePage;
