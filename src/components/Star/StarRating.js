import React, { useState, useEffect } from "react";
import { StarContainer, StarIcon } from "./styles";

const StarRating = ({ starHandler, children }) => {
    const [starState, setStarState] = useState([false, false, false, false, false]);
    const [scoreState, setScoreState] = useState(0);
    useEffect(() => {
        setStarState((prev) => prev.fill(true, 0, scoreState));
    }, [scoreState]);

    const onClick = (isPlus) => {
        if (isPlus) {
            setScoreState((prev) => prev + 1);
            starHandler(scoreState + 1);
        } else {
            setScoreState((prev) => prev - 1);
            starHandler(scoreState - 1);
        }
        return scoreState;
    };
    return (
        <StarContainer>
            {starState.map((it, index) => {
                return (
                    <Star key={index} index={index} currentScore={scoreState} isChecked={it} onClick={onClick}></Star>
                );
            })}
        </StarContainer>
    );
};

const Star = ({ index, currentScore, isChecked, onClick }) => {
    const [isCheckedState, setIsCheckedState] = useState(isChecked);
    useEffect(() => {}, [currentScore]);
    const onClickHandler = () => {
        if ((index + 1 === currentScore) & isCheckedState) {
            onClick(false);
            setIsCheckedState(false);
        } else if (!isCheckedState && index === currentScore) {
            onClick(true);
            setIsCheckedState(true);
        }
    };
    return <StarIcon isChecked={isCheckedState} onClick={onClickHandler}></StarIcon>;
};

export default StarRating;
