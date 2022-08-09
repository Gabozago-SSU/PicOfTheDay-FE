import React, { useState } from "react";
import colors from "styles/colors";
import UploadIc from "../../assets/attachment.svg";
import { ImgLayout, ImgWrapper, PhotoImg } from "./styles";

const UploadImg = () => {
    const [imgFile, setImgFile] = useState("");
    return (
        <ImgLayout>
            <ImgWrapper>
                <p style={{ height: "24px" }}>사진</p>
                <img style={{ width: "24px" }} src={UploadIc} onClick={() => setImgFile("feijfiefj")} />
            </ImgWrapper>
            {imgFile ? (
                <div style={{ display: "flex", justifyContent: "center", padding: 0, margin: 0 }}>
                    <PhotoImg />
                </div>
            ) : null}
            <hr
                style={{
                    width: "100%",
                    height: "0.5px",
                    border: `0.5px solid ${colors.black_30}`,
                    marginTop: "22px",
                    bottom: 0,
                    padding: 0,
                }}
            />
        </ImgLayout>
    );
};

export default UploadImg;
