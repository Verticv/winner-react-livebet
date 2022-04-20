import React, { useState, useEffect } from "react";

import useStore from "store/useStore";

import upRedArrow from "imagesHold/cards/red-arrow-up.png"
import downBlueArrow from "imagesHold/cards/blue-arrow-down.png"


import "./CardFooter.scss";

export default function CardFooter({ matchCard, isActive, setIsActive }) {
    const {
        team1 = "FC바로셀로나",
        team2 = "레알마드리드",
        team1WinKof = 5.01,
        tieKof = 4.05,
        team2WinKof = 3.75,
        isLeftArrowActive = true,
        isRightArrowActive = true,
    } = matchCard;

    const [leftActive, setLeftActive] = useState(isLeftArrowActive);
    const [rightActive, setRightActive] = useState(isRightArrowActive);

    const addBetSlipBet = useStore((s) => s.addBetSlipBet);
    useEffect(() => {
        setRightActive(isRightArrowActive)
        setLeftActive(isLeftArrowActive)
    }, [isLeftArrowActive, isRightArrowActive])


    const handleClick = (event) => {
        event.stopPropagation();
        // parseInt(bet?.tieKof) % 2 === 0
        console.log('matchCard', matchCard)
        if (matchCard.id % 2 === 0) {
            setRightActive(prev => !prev)
        } else {
            setLeftActive(prev => !prev)
        }
        addBetSlipBet(matchCard);
    };

    return (
        <div className={`card-footer-wrapper ${isActive ? "active" : ""}`}>
            <div onClick={handleClick} className={`left ${leftActive ? "active" : ""}`}>
                <p className="text">{team1}</p>
                <div
                    className={`number ${leftActive ? "red-arrow" : ""}`}
                >
                    {leftActive && <img src={upRedArrow} alt="" />}
                    <div className="number-value">{team1WinKof.toFixed(2)}</div>
                </div>
            </div>
            <div className="middle">
                <div onClick={handleClick} className="middle-content">{tieKof.toFixed(2)}</div>
            </div>
            <div onClick={handleClick} className={`right ${rightActive ? "active" : ""}`}>
                <div
                    className={`number ${
                        rightActive ? "blue-arrow" : ""
                    }`}
                >
                    {rightActive && <img src={downBlueArrow} alt="" />}
                    <div className="number-value">{team2WinKof.toFixed(2)}</div>
                </div>
                <p className="text">{team2}</p>
            </div>
        </div>
    );
}
