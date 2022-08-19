import { requestMyUserPost } from "apis";
import ProfileImg from "components/commons/ProfileImg";
import MyContentTab from "components/MyContentTab";
import React, { useState, useEffect } from "react";
import { DefaultLayout } from "styles/layout";
import * as S from "./styles";
import { useUserRecoilValue } from "recoil/userState";
import { useNavigate } from "react-router-dom";
import Modal from "components/commons/Modal";

const MyPage = () => {
    const [mypagePost, setMypagePost] = useState([]);
    const user = useUserRecoilValue();
    const navigate = useNavigate();
    const [isAuthModalOpen, setAuthtModalOpen] = useState(user === null);
    const onClickAuthModal = (value) => {
        if (value) {
            navigate("/login");
            setAuthtModalOpen(false);
        } else {
            setAuthtModalOpen(false);
        }
    };
    useEffect(() => {
        if (user !== null)
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
            {isAuthModalOpen ? (
                <DefaultLayout>
                    <Modal closeModal={onClickAuthModal} buttonText={"로그인 하러가기 "}>
                        <h1 style={{ marginBottom: "13px" }}> 아직 회원이 아니시군요!</h1>
                        <p style={{ fontSize: "13px", marginTop: "5px" }}>로그인 후 후기를 작성해 주세요</p>
                    </Modal>
                </DefaultLayout>
            ) : null}
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
