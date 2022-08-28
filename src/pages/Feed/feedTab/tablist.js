import React from "react";
import { useState } from "react";
import BestFeedPost from "../feedPost/bestFeedPost";
import LastFeedPost from "../feedPost/lastFeedPost";
import { TabDiv, TabListLayout } from "./styleTablist";
import "./tablist.css";

function Tablist() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <TabListLayout>
            <TabDiv>
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                    인기 후기
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                    최근 후기
                </button>
            </TabDiv>

            <>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        <BestFeedPost />
                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        <LastFeedPost />
                    </div>
                </div>
            </>
        </TabListLayout>
    );
}

export default Tablist;
