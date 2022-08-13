import React from 'react'
import { useState } from 'react';
import BestFeedPost from '../feedPost/bestFeedPost';
import LastFeedPost from '../feedPost/lastFeedPost';
import { TabDiv } from './styleTablist';
import "./tablist.css";

function Tablist() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <>
      <TabDiv>
        <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
        >
            인기게시물
        </button>
        <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
        >
            최근게시물
        </button>
      </TabDiv>

      <>
        <div className="content-tabs">
            <div
            className={toggleState === 1 ? "content  active-content" : "content"}
            >
            <BestFeedPost />
            </div>

            <div
            className={toggleState === 2 ? "content  active-content" : "content"}
            >
            <LastFeedPost />
            </div>
        </div>
      </>
    </>
  )
}

export default Tablist;
