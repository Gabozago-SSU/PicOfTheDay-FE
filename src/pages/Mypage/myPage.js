import ProfileImg from "components/commons/ProfileImg";
import MyContentTab from "components/MyContentTab";
import React from "react";
import { DefaultLayout } from "styles/layout";
import * as S from "./styles";
const MyPage = () => {
    return (
        <S.ScrollDiv>
            <S.InfoWrapper>
                <ProfileImg
                    img={
                        "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfMjA2/MDAxNTg0MDI3MzA1MTM1.ziQdHXjoSVpswgl7MkBXPOamMHIiKQKPpqjtQNkw6IMg.rkebY82ViYlYz83X1y5B7Fm6qyQkC2ZZlmHgRyJw1vAg.JPEG.d_hye97/1.jpg?type=w800"
                    }
                ></ProfileImg>
                <S.NameBox>{"짱구 "} 님</S.NameBox>
                <S.MenuBox />
            </S.InfoWrapper>
            <S.PostWrapper>
                <MyContentTab></MyContentTab>
            </S.PostWrapper>
        </S.ScrollDiv>
    );
};

export default MyPage;
