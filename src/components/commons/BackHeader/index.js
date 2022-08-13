import React, { useState } from "react";
import { BackHeaderLayout } from "../Header/styles";
import { BackIc, ActivatedBackIc, TitleBox } from "./styles";
import colors from "styles/colors";

const BackHeader = ({ title, clickHandler }) => {
    const [isClicked, setClicked] = useState(false);
    return (
        <BackHeaderLayout style={{ backgroundColor: `${colors.bgColor}`, height: "53px" }}>
            <BackIc onMouseEnter={() => setClicked(true)} onMouseLeave={() => setClicked(false)} onClick={clickHandler}>
                <ActivatedBackIc isClicked={isClicked} activeColor={colors.red_100} />
            </BackIc>
            <TitleBox>{title}</TitleBox>
            <hr
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "0.5px",
                    border: `0.5px solid ${colors.black_30}`,
                    margin: 0,
                    bottom: 0,
                    padding: 0,
                }}
            />
        </BackHeaderLayout>
    );
};
export default React.memo(BackHeader);
