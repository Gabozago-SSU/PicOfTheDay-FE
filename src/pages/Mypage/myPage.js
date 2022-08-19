import { requestMyUserPost } from "apis";
import ProfileImg from "components/commons/ProfileImg";
import MyContentTab from "components/MyContentTab";
import React, {useState, useEffect} from "react";
import { DefaultLayout } from "styles/layout";
import * as S from "./styles";

const MyPage = () => {
    const [mypagePost, setMypagePost] = useState([]);

    useEffect(() => {
        requestMyUserPost(5)
        .then((res) => {
            setMypagePost(res.data)
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })

    return (
        <S.ScrollDiv>
            <S.InfoWrapper>
                <ProfileImg
                    img={mypagePost.img}
                ></ProfileImg>
                <S.NameBox>{mypagePost.nickName} 님</S.NameBox>
                <S.MenuBox />
            </S.InfoWrapper>
            <S.PostWrapper>
                <MyContentTab mypagereviews={mypagePost}></MyContentTab>
            </S.PostWrapper>
        </S.ScrollDiv>
    );
};

export default MyPage;
