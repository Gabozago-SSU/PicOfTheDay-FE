import { requestMyUserPost } from "apis";
import ProfileImg from "components/commons/ProfileImg";
import MyContentTab from "components/MyContentTab";
import React, { useState, useEffect } from "react";
import { DefaultLayout } from "styles/layout";
import * as S from "./styles";
import { useUserRecoilValue } from "recoil/userState";

const MyPage = () => {
    const [mypagePost, setMypagePost] = useState([]);
    const user = useUserRecoilValue();

    useEffect(() => {
        requestMyUserPost(user.authId)
            .then((res) => {
                setMypagePost(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <S.ScrollDiv>
            {mypagePost ? (
                <>
                    <S.InfoWrapper>
                        <ProfileImg img={mypagePost.profileImage}></ProfileImg>
                        <S.NameBox>{mypagePost.name} 님</S.NameBox>
                        <S.MenuBox />
                    </S.InfoWrapper>
                    <S.PostWrapper>
                        <MyContentTab
                            mypagereviews={mypagePost.userReviews}
                            myLikes={mypagePost.userReviewLikes}
                        ></MyContentTab>
                    </S.PostWrapper>
                </>
            ) : null}
        </S.ScrollDiv>
    );
};

export default MyPage;
