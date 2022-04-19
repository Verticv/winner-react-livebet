import React, { useState } from "react";

import useStore from "store/useStore";
import { useDrop } from "react-dnd";

import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import CardHeader from "components/MultiViewMatchCard/CardHeader/CardHeader";
import CardSubHeader from "components/MultiViewMatchCard/CardSubHeader/CardSubHeader";
import CardBody from "components/MultiViewMatchCard/CardBody/CardBody";
import externalLinkIcon from "../../imagesHold/external-link.png";
import upRedArrow from "imagesHold/cards/red-arrow-up.png";
import downBlueArrow from "imagesHold/cards/blue-arrow-down.png";

import "./MultiViewMatchCard.scss";

function MultiViewMatchCard({id}) {
    return (
        <div className="multi-view-match-card-wrapper">
            <CardHeader id={id} />
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
    const isRowActive = true;
    const option1 = "오버";
    const option2 = "언더";
    const kof1 = 1.25;
    const kof2 = 3.3;

    return (
        <div className="match-results-wrapper">
            <div className="left">
                <p className="text">{option1}</p>
            </div>
            <div className={`number1 ${isRowActive ? "red-arrow" : ""}`}>
                {isRowActive && <img src={upRedArrow} alt="" />}
                <div className="number-value">{kof1.toFixed(2)}</div>
            </div>

            <div className="middle">
                <div className="left"></div>
                <div className="middle-content">4.05</div>
                <div className="right"></div>
            </div>
            <div className={`number2 ${isRowActive ? "blue-arrow" : ""}`}>
                {isRowActive && <img src={downBlueArrow} alt="" />}
                <div className="number-value">{kof2.toFixed(2)}</div>
            </div>
            <div className="right">
                <p className="text">{option2}</p>
            </div>
            <div style={{ position: "absolute", width: "100%", height: "1px", background: "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))", left: 0, top: 0}}></div>
            <div style={{ position: "absolute", width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.05)", bottom: 0}}></div>
            <div style={{ position: "absolute", width: "1px", height: "calc(100% - 1px)", background: "linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0))", left: 0, top: 0}}></div>
            <div style={{ position: "absolute", width: "1px", height: "calc(100% - 1px)", background: "linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0))", right: 0, top: 0}}></div>
        </div>
    );
}

function MatchDetail({ bet, isEmpty = false }) {
    const [isShowing, setIsShowing] = useState(true);
    const handleToggleIsShowing = () => {
        setIsShowing((prev) => !prev);
    };
    const { betType, option1, option2 } = bet;
    console.log(option2, option1);
    return (
        <div className="match-details-wrapper">
            {!isEmpty && (
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
            )}
            {isShowing && !isEmpty ? (
                <div className="match-details-content">
                    <div style={{ marginBottom: "4px", width: "100%" }}>
                        <ResultsRow bet={bet} />
                    </div>
                    <ResultsRow bet={bet} />
                </div>
            ) : null}
        </div>
    );
}

function ResultsContent({ isEmpty = false }) {
    return (
        <div className="results-content">
            <div className="match-bets-content">
                <div className="match-bet-card-wrapper">
                    {matchBets.map((matchBet) => {
                        return (
                            <>
                                <MatchDetail
                                    key={matchBet.id}
                                    bet={matchBet}
                                    isEmpty={isEmpty}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function MultiViewMatchResults({ id, isEmpty = false }) {
    const resultsCardsList = useStore((state) => state.multiViewLiveMatchResultsCards);
    const removeMatchFromMultiViewMatches = useStore((state) => state.removeMatchFromMultiViewMatches);
    const updateMultiViewMatchesResults = useStore((state) => state.updateMultiViewMatchesResults);
    const addNewMatchResult = useStore((state) => state.addNewMatchResult);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => addCard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addCard = (cardId) => {
        let data = resultsCardsList;
        if (window.cardsData) {
            data = window.cardsData
        }
        removeMatchFromMultiViewMatches(cardId)
        const newData = data.map((match => {
            if (match.id === id) {
                return {...match, isEmpty: false}
            }
            return match
        }))
        window.cardsData = newData
        updateMultiViewMatchesResults(newData)
        console.log('ssssssssssssssss', document.querySelectorAll('.empty-card'))
        if (document.querySelectorAll('.empty-card')?.length === 0) {
            const id = resultsCardsList[resultsCardsList.length - 1]?.id
            const newData = [{
                id: id + 1,
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                isEmpty: true,
            },
            {
                id: id + 2,
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                isEmpty: true,
            },
            {
                id: id + 3,
                team1: "FC바로셀로나",
                team2: "레알마드리드",
                isEmpty: true,
            },]
            newData.forEach(card => addNewMatchResult(card));
            window.cardsData = [...window.cardsData, ...newData]
        }   
    }

    return (
        <>
            {isEmpty ? (
                <div style={{opacity: isOver ? "0.5" : ""}} ref={drop} className="empty-card"></div>
            ) : (
                <div className="multi-view-match-result-wrapper">
                    <MultiViewMatchCard id={id} />
                    <div className="bet-info-wrapper">
                        <div className="scroll-wrapper">
                            <Info />
                            <ResultsContent />
                            <ResultsContent isEmpty={true} />
                        </div>
                    </div>
                    <button className="go-to-game">
                        <div>
                            <img src={externalLinkIcon} alt="" />
                        </div>
                        <p>해당경기로 이동</p>
                    </button>
                </div>
            )}
        </>
    );
}

export default function MultiViewMatchCards() {

    const resultsCardsList = useStore((state) => state.multiViewLiveMatchResultsCards);
    return (
        <div className="multi-view-match-results-wrapper">
            {resultsCardsList.map(({id, isEmpty}) => {

                return <MultiViewMatchResults id={id} isEmpty={isEmpty} />
            })}
        </div>
    );
}
