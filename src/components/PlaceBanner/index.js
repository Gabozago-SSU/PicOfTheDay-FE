import React, { useState } from "react";
import * as S from "./styles";
import BeforeIc from "../../assets/BeforeIc.svg";
import NextIc from "../../assets/NextBannerIc.svg";
import "./banner.css";

const PlaceBanner = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        nextArrow: <S.NextArrowIcon img={NextIc} />,
        prevArrow: <S.ArrowIcon img={BeforeIc} />,
    };

    return (
        <>
            <S.BannerLayout>
                <S.BannerContainer>
                    <S.StyledSlider
                        {...settings}
                        dotsClass="dot-style"
                        initialSlide={0}
                        beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
                    >
                        {banners
                            ? banners.map((banner) => {
                                  return (
                                      <div key={banner}>
                                          <S.BannerWrapper img={banner}></S.BannerWrapper>
                                      </div>
                                  );
                              })
                            : null}
                    </S.StyledSlider>
                </S.BannerContainer>

                {/* <S.CounterDiv>
                    <p style={{ color: "white" }}>{(currentSlide + 1).toString().padStart(2, "0")}</p>
                    <p style={{ color: "#CDCDCD" }}> / {banners.length.toString().padStart(2, "0")}</p>
                </S.CounterDiv> */}
            </S.BannerLayout>
        </>
    );
};

export default PlaceBanner;
