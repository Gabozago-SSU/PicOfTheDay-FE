import React from "react";
import { css } from "styled-components";
import * as S from "./styles";

import Heart from "../../assets/HeartCircleIc.svg";
import Phone from "../../assets/TelePhoneCircleIc.svg";
import NextIc from "../../assets/BlackNextIc.svg";
import PlaceIc from "../../assets/PlaceIc.svg";
import CopyIc from "../../assets/copyIc.svg";
import CategoryChip from "../commons/Chip/CategoryChip";
import StarIc from "../../assets/SmallStarIc.svg";

const PlaceInfo = ({ category, phone, name, address, rating, reviewNum }) => {
    return (
        <S.PlaceinfoLayout>
            <CategoryChip type={category} />
            <S.ButtonWrapper>
                <img src={Heart}></img>
                <img src={Phone}></img>
            </S.ButtonWrapper>
            <h1 style={{ fontWeight: 700, fontSize: "24px", lineHeight: "35px", paddingTop: "6px" }}>{name}</h1>
            <S.InfoWrapper style={{ marginTop: "9px" }}>
                <div style={{ height: "14px" }}>
                    <img src={PlaceIc} style={{ height: "12px", alignSelf: "center" }}></img>
                </div>
                <S.AddressTextBox>
                    <p>{address}</p>
                </S.AddressTextBox>
                <div style={{ height: "14px" }}>
                    <img src={CopyIc} style={{ height: "12px", alignSelf: "center" }}></img>
                </div>
            </S.InfoWrapper>
            <S.InfoWrapper style={{ marginTop: "5px", height: "17px", marginBottom: "20px" }}>
                <div style={{ height: "14px", marginRight: "4px" }}>
                    <img src={StarIc} style={{ width: "11px", alignSelf: "center", margin: "0 auto" }}></img>
                </div>
                <S.RatingText>{parseFloat({ rating }).toFixed(1)}</S.RatingText>
                <p style={{ fontSize: "12px", marginLeft: "6px" }}>후기 ({reviewNum ? reviewNum : 0})</p>
                <div style={{ height: "17px" }}>
                    <img src={NextIc} style={{ width: "14px", alignSelf: "center" }}></img>
                </div>
            </S.InfoWrapper>
        </S.PlaceinfoLayout>
    );
};

export default PlaceInfo;
