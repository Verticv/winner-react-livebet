import React from "react";

import useStore from "store/useStore";

import upRedArrow from "imagesHold/cards/red-arrow-up.png"
import downBlueArrow from "imagesHold/cards/blue-arrow-down.png"


import "./CardFooter.scss";

export default function CardFooter({ matchCard }) {
    const {
        team1 = "fc바로셀로나",
        team2 = "레알마드리드",
        team1WinKof = 5.01,
        tieKof = 4.05,
        team2WinKof = 3.75,
        isLeftArrowActive = false,
        isRightArrowActive = false,
    } = matchCard;

    const addBetSlipBet = useStore((s) => s.addBetSlipBet);

    const handleClick = (event) => {
        event.stopPropagation();
        addBetSlipBet(matchCard);
    };

    return (
        <div className={`card-footer-wrapper ${isLeftArrowActive || isRightArrowActive ? "active" : ""}`}>
            <div className={`left ${isLeftArrowActive ? "active" : ""}`}>
                <p className="text">{team1}</p>
                <div
                    className={`number ${isLeftArrowActive ? "red-arrow" : ""}`}
                >
                    {isLeftArrowActive && <img src={upRedArrow} alt="" />}
                    <div onClick={handleClick} className="number-value">{team1WinKof}</div>
                </div>
            </div>
            <div className="middle">
                <div onClick={handleClick} className="middle-content">{tieKof.toFixed(2)}</div>
            </div>
            <div className={`right ${isRightArrowActive ? "active" : ""}`}>
                <div
                    className={`number ${
                        isRightArrowActive ? "blue-arrow" : ""
                    }`}
                >
                    {isRightArrowActive && <img src={downBlueArrow} alt="" />}
                    <div onClick={handleClick} className="number-value">{team2WinKof}</div>
                </div>
                <p className="text">{team2}</p>
            </div>
        </div>
    );
}
