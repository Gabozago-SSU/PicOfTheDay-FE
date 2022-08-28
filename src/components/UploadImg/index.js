import UploadBanner from "components/UploadBanner";
import React, { useState } from "react";
import colors from "styles/colors";
import { ImgLayout, ImgWrapper, PhotoImg, ImguploadIcon } from "./styles";
import axios from "axios";

const UploadImg = ({ imgHandler }) => {
    const [imgFile, setImgFile] = useState([]);

    const saveFileImg = (e) => {
        const result = [];
        for (let file = 0; file < e.target.files.length; file++) {
            console.log(file);
            result.push(URL.createObjectURL(e.target.files[file]));
        }

        let files = e.target.files; // Form의 input을 들고온다.

        setImgFile(result);
        imgHandler(files);
    };
    return (
        <ImgLayout>
            <ImgWrapper>
                <label style={{ height: "24px" }} htmlFor="input-file">
                    사진{" "}
                </label>

                <ImguploadIcon htmlFor="input-file" />
                <input
                    type="file"
                    accept="image/*"
                    id="input-file"
                    onChange={saveFileImg}
                    multiple={true}
                    style={{ display: "none" }}
                />
            </ImgWrapper>
            {imgFile.length !== 0 ? (
                <div style={{ display: "flex", justifyContent: "center", padding: 0, margin: 0 }}>
                    <UploadBanner banners={imgFile} />
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
