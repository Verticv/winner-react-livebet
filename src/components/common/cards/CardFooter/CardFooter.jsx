import React, { useState, useEffect } from "react";

import useStore from "store/useStore";

import upRedArrow from "imagesHold/cards/red-arrow-up.png"
import downBlueArrow from "imagesHold/cards/blue-arrow-down.png"


import "./CardFooter.scss";

export default function CardFooter({ matchCard, isActive, setIsActive }) {
    const {
        id,
        league,
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
    const selectedNav = useStore((state) => state.selectedNav);
    const currentActiveBetCard = useStore((state) => state.currentActiveBetCard);
    const changeCurrentActiveBetCard = useStore((state) => state.changeCurrentActiveBetCard);

    const [leftActiveBackground, setLeftActiveBackground] = useState(false)
    const [middleActiveBackground, setMiddleActiveBackground] = useState(false)
    const [rightActiveBackground, setRightActiveBackground] = useState(false)

    const addBetSlipBet = useStore((s) => s.addBetSlipBet);
    useEffect(() => {
        setRightActive(isRightArrowActive)
        setLeftActive(isLeftArrowActive)
    }, [isLeftArrowActive, isRightArrowActive])

    useEffect(() => {
        setLeftActiveBackground(false)
        setMiddleActiveBackground(false)
        setRightActiveBackground(false)
    }, [selectedNav])

    useEffect(() => {  
        if (id+league !== currentActiveBetCard) {
            setLeftActiveBackground(false)
            setMiddleActiveBackground(false)
            setRightActiveBackground(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentActiveBetCard])

    const handleClick = (event) => {
        event.stopPropagation();
        addBetSlipBet(matchCard);
    };

    return (
        <div className={`card-footer-wrapper ${isActive ? "active" : ""}`}>
            <div onClick={(e) => {
                handleClick(e)
                setLeftActiveBackground(prev => !prev)
                setMiddleActiveBackground(false)
                setRightActiveBackground(false)
                changeCurrentActiveBetCard(id+league)
            }} className={`left ${leftActive ? "active" : ""} ${leftActiveBackground ? "active-background" : ""}`}>
                <p className="text">{team1}</p>
                <div
                    className={`number ${leftActive ? "red-arrow" : ""}`}
                >
                    {leftActive && <img src={upRedArrow} alt="" />}
                    <div className="number-value">{team1WinKof.toFixed(2)}</div>
                </div>
            </div>
            <div className="middle">
                <div onClick={(e) => {
                    handleClick(e);
                    setLeftActiveBackground(false)
                    setMiddleActiveBackground(prev => !prev)
                    setRightActiveBackground(false)
                    changeCurrentActiveBetCard(id+league)
                }} className={`middle-content ${middleActiveBackground ? "active" : ""}`}>{tieKof.toFixed(2)}</div>
            </div>
            <div onClick={(e) => {
                handleClick(e)
                setLeftActiveBackground(false)
                setMiddleActiveBackground(false)
                setRightActiveBackground(prev => !prev)
                changeCurrentActiveBetCard(id+league)
                }} className={`right ${rightActive ? "active" : ""} ${rightActiveBackground ? "active-background" : ""}`}>
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
