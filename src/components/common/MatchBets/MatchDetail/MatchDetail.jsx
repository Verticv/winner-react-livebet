import React, { useEffect, useState } from "react";
import useStore from "store/useStore";

import upRedArrow from "imagesHold/cards/red-arrow-up.png";
import downBlueArrow from "imagesHold/cards/blue-arrow-down.png";

import "./MatchDetail.scss";

function ResultsRow({
    activeCard,
    setActiveCard,
    id,
    bet,
    option1 = "오버",
    option2 = "언더",
    kof1 = 1.25,
    kof2 = 3.3,
    tieKof = 4.05,
    isRowActive = false,
}) {
    const [leftActiveBackground, setLeftActiveBackground] = useState(false);
    const [middleActiveBackground, setMiddleActiveBackground] = useState(false);
    const [rightActiveBackground, setRightActiveBackground] = useState(false);

    const addBetSlipBet = useStore((s) => s.addBetSlipBet);
    const handleClick = (event) => {
        event.stopPropagation();
        addBetSlipBet(bet);
    };

    useEffect(() => {
        if (activeCard !== id ) {
            setLeftActiveBackground(false)
            setMiddleActiveBackground(false)
            setRightActiveBackground(false)
        }
    }, [id, activeCard])


    return (
        <div onClick={handleClick} className="match-results-wrapper">
            <div
                onClick={() => {
                    setLeftActiveBackground((prev) => !prev);
                    setMiddleActiveBackground(false);
                    setRightActiveBackground(false);
                    setActiveCard(id)
                }}
                className={`left ${leftActiveBackground ? "active" : ""}`}
            >
                <p className="text">{option1}</p>
            </div>
            <div className={`number1 ${isRowActive ? "red-arrow" : ""}`}>
                {isRowActive && <img src={upRedArrow} alt="" />}
                <div className="number-value">{kof1.toFixed(2)}</div>
            </div>
            <div
                onClick={() => {
                    setLeftActiveBackground(false);
                    setMiddleActiveBackground((prev) => !prev);
                    setRightActiveBackground(false);
                    setActiveCard(id)
                }}
                className="middle"
            >
                <div className="left"></div>
                <div className={`middle-content ${middleActiveBackground ? "active" : ""}`}>{tieKof.toFixed(2)}</div>
                <div className="right"></div>
            </div>
            <div className={`number2 ${isRowActive ? "blue-arrow" : ""}`}>
                {isRowActive && <img src={downBlueArrow} alt="" />}
                <div className="number-value">{kof2.toFixed(2)}</div>
            </div>
            <div
                onClick={() => {
                    setLeftActiveBackground(false);
                    setMiddleActiveBackground(false);
                    setRightActiveBackground((prev) => !prev);
                    setActiveCard(id)
                }}
                className={`right ${rightActiveBackground ? "active" : ""}`}
            >
                <p className="text">{option2}</p>
            </div>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "1px",
                    background:
                        "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))",
                    left: 0,
                    top: 0,
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "1px",
                    background: "rgba(255, 255, 255, 0.05)",
                    bottom: 0,
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    width: "1px",
                    height: "calc(100% - 1px)",
                    background:
                        "linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0))",
                    left: 0,
                    top: 0,
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    width: "1px",
                    height: "calc(100% - 1px)",
                    background:
                        "linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0))",
                    right: 0,
                    top: 0,
                }}
            ></div>
        </div>
    );
}

export default function MatchDetail({ bet }) {
    const [isShowing, setIsShowing] = useState(true);
    const [activeCard, setActiveCard] = useState(0);

    const handleToggleIsShowing = () => {
        setIsShowing((prev) => !prev);
    };
    const {
        betType,
        option1,
        option2,
        row1kof1,
        row1kof2,
        row1tieKof,
        row2kof1,
        row2kof2,
        row2tieKof,
        isRow1Active,
        isRow2Active,
    } = bet;

    return (
        <div className="match-details-wrapper">
            <div className="match-details-header">
                <div className="left">
                    <div className="square"></div>
                    <p className="text">{betType}</p>
                </div>
                <button onClick={handleToggleIsShowing}>
                    <img
                        className={`${isShowing ? "" : "rotate"}`}
                        src={
                            require("../../../../imagesHold/ico_21.png").default
                        }
                        alt=""
                        width="16"
                        height="10"
                    />
                </button>
            </div>
            {isShowing ? (
                <div className="match-details-content">
                    <div style={{ marginBottom: "4px", width: "100%" }}>
                        <ResultsRow
                            id={0}
                            activeCard={activeCard}
                            setActiveCard={setActiveCard}
                            bet={bet}
                            option1={option1}
                            option2={option2}
                            kof1={row1kof1}
                            kof2={row1kof2}
                            tieKof={row1tieKof}
                            isRowActive={isRow1Active}
                        />
                    </div>
                    <ResultsRow
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                        id={1}
                        bet={bet}
                        option1={option1}
                        option2={option2}
                        kof1={row2kof1}
                        kof2={row2kof2}
                        tieKof={row2tieKof}
                        isRowActive={isRow2Active}
                    />
                </div>
            ) : null}
        </div>
    );
}
