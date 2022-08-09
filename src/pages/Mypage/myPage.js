import ToggleChip from "components/commons/Chip/ToggleChip";
import React, { useState, useEffect } from "react";
import { DefaultLayout } from "styles/layout";
const MyPage = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [keywords, setKeywords] = useState([]);
    const sampleKeys = [];
    useEffect(() => {
        //잘 들어 가고 있는지 확인하고싶으면 요렇게 useEffect에서 출력해보아요
        console.log("key", keywords);
    }, [keywords]);

    //1. 자식에게 넘겨줄 이벤트 함수를 하나 만든다
    const clickHandler = (content) => {
        //6.자식에게서 이벤트 값을 받아왔다!
        //자식에게 받아온 값을 출력한다 화긴
        console.log(content);
        //7.받아 온 값을 배열에 저장해야 겠쥬

        // 7-1 배열의 상태관리가 필요하다면 useState로 관리하시구
        // assign으로 배열을 복사한 이유는 그냥 push해서 하면 useEffect가 인식을
        // 못해버림 멍청한 리액트
        // const newKeywords = Object.assign(keywords, []);
        // newKeywords.push(content);
        // setKeywords(newKeywords);

        //7-2 굳이 상태관리가 필요하지 않을때는
        sampleKeys.push(content);
        console.log(sampleKeys);
    };
    return (
        <DefaultLayout>
            <div style={{ display: "flex" }}>
                {arr.map((a) => (
                    //2. clickHandler 라는 이벤트 함수를 자식에게 넘긴다 (이름은 자유!)
                    <ToggleChip key={a} clickHandler={clickHandler} isChecked={false}>
                        {a.toString()}
                    </ToggleChip>
                ))}
            </div>
        </DefaultLayout>
    );
};

export default MyPage;
