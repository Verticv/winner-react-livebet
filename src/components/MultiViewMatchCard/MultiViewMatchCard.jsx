import React, { useState } from "react";

import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import CardHeader from "components/MultiViewMatchCard/CardHeader/CardHeader";
import CardSubHeader from "components/MultiViewMatchCard/CardSubHeader/CardSubHeader";
import CardBody from "components/MultiViewMatchCard/CardBody/CardBody";
import externalLinkIcon from "../../imagesHold/external-link.png";

import "./MultiViewMatchCard.scss";

function MultiViewMatchCard() {
    return (
        <div className="multi-view-match-card-wrapper">
            <CardHeader />
            <CardSubHeader />
            <CardBody />
        </div>
    );
}

function Info() {
    return (
        <div className="info">
            <div className="info-image">
                <p>i</p>
            </div>
            <div className="info-content">
                <p className="number">
                    <span>1:0</span>, (1:0), (0:0)
                </p>
                <p className="text">후반전 35’</p>
            </div>
        </div>
    );
}

const matchBets = [
    {
        id: 0,
        betType: "홈팀 오버언더",
        option1: "오버",
        option2: "언더",
        kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
        kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
        tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
    },
    {
        id: 1,
        betType: "오버언더",
        option1: "오버",
        option2: "언더",
        kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
        kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
        tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
    },
];

function ResultsRow() {
    return (
        <div className="match-results-wrapper">
            <div className="left">
                <p className="text">오버</p>
                <div className="number red-arrow">
                    <div className="number-value">1.25</div>
                </div>
            </div>
            <div className="middle">
                <div className="left"></div>
                <div className="middle-content">4.05</div>
                <div className="right"></div>
            </div>
            <div className="right">
                <div className="number blue-arrow">
                    <div className="number-value">3.3</div>
                </div>
                <p className="text">언더</p>
            </div>
        </div>
    );
}

function MatchDetail({ bet }) {
    const [isShowing, setIsShowing] = useState(true);
    const handleToggleIsShowing = () => {
        setIsShowing((prev) => !prev);
    };
    const { betType, option1, option2 } = bet;
    console.log(option2, option1)
    // const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    // const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    // const [selectedOutcome2, setSelectedOutcome2] = useState(selections.none);
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
                        src={require("../../imagesHold/ico_21.png").default}
                        alt=""
                        width="16"
                        height="10"
                    />
                </button>
            </div>
            {isShowing ? (
                <div className="match-details-content">
                    <div style={{ marginBottom: "4px", width: "100%" }}>
                        <ResultsRow />
                    </div>
                    <ResultsRow />
                </div>
            ) : null}
        </div>
    );
}

function ResultsContent() {
    return (
        <div className="results-content">
            <div className="match-bets-content">
                <div className="match-bet-card-wrapper">
                    <div className="line"></div>
                    {matchBets.map((matchBet) => {
                        return <MatchDetail key={matchBet.id} bet={matchBet} />;
                    })}
                </div>
            </div>
        </div>
    );
}

function MultiViewMatchResults({ isEmpty = false }) {
    return (
        <>
            {isEmpty ? (
                <div className="empty-card"></div>
            ) : (
                <div className="multi-view-match-result-wrapper">
                    <MultiViewMatchCard />
                    <div className="bet-info-wrapper">
                        <Info />
                        <ResultsContent />
                        <div className="static-scroll"></div>
                    </div>
                    <div className="go-to-game">
                        <div>
                            <img src={externalLinkIcon} alt="" />
                        </div>
                        <p>해당경기로 이동</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default function MultiViewMatchCards() {
    return (
        <div className="multi-view-match-results-wrapper">
            <MultiViewMatchResults />
            <MultiViewMatchResults />
            <MultiViewMatchResults />
            <MultiViewMatchResults isEmpty />
            <MultiViewMatchResults isEmpty />
            <MultiViewMatchResults isEmpty />
        </div>
    );
}