import React, { useState } from "react";
import _ from "lodash" 

import useStore from "store/useStore";
import { useDrop } from "react-dnd";

import CardHeader from "components/MultiViewMatchCard/CardHeader/CardHeader";
import CardSubHeader from "components/MultiViewMatchCard/CardSubHeader/CardSubHeader";
import CardBody from "components/MultiViewMatchCard/CardBody/CardBody";
import externalLinkIcon from "../../imagesHold/external-link.png";
import upRedArrow from "imagesHold/cards/red-arrow-up.png";
import downBlueArrow from "imagesHold/cards/blue-arrow-down.png";

import "./MultiViewMatchCard.scss";

function MultiViewMatchCard({ id }) {
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
        betType: "오버언더",
        option1: "오버",
        option2: "언더",
        row1kof1: 1.25,
        row1kof2: 3.30,
        row1tieKof: 4.05,
        row2kof1: 1.25,
        row2kof2: 3.30,
        row2tieKof: 4.05,
        isActive: true,
    },
    {
        id: 1,
        betType: "승무패핸디캡",
        option1: "FC바르셀로나",
        option2: "레알마드리드",
        row1kof1: 9.50,
        row1kof2: 1.2,
        row1tieKof: 5.75,
        row2kof1: 1.30,
        row2kof2: 8.25,
        row2tieKof: 4.90,
        isActive: false,
    },
];

function ResultsRow({
    isActive: isRowActive,
    option1,
    option2,
    kof1,
    kof2,
    tieKof,
    bet,
}) {
    const addMultiViewBetSlipBet = useStore((s) => s.addMultiViewBetSlipBet);
    const handleClick = (event) => {
        event.stopPropagation();
        addMultiViewBetSlipBet(bet);
    };

    return (
        <div onClick={handleClick} className="match-results-wrapper">
            <div className="left">
                <p className="text">{option1}</p>
            </div>
            <div className={`number1 ${isRowActive ? "red-arrow" : ""}`}>
                {isRowActive && <img src={upRedArrow} alt="" />}
                <div className="number-value">{kof1?.toFixed(2)}</div>
            </div>

            <div className="middle">
                <div className="left"></div>
                <div className="middle-content">{tieKof?.toFixed(2)}</div>
                <div className="right"></div>
            </div>
            <div className={`number2 ${isRowActive ? "blue-arrow" : ""}`}>
                {isRowActive && <img src={downBlueArrow} alt="" />}
                <div className="number-value">{kof2?.toFixed(2)}</div>
            </div>
            <div className="right">
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

function MatchDetail({ bet, isEmpty = false }) {
    const [isShowing, setIsShowing] = useState(true);
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
        isActive,
    } = bet;
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
                        <ResultsRow
                            bet={bet}
                            isActive={isActive}
                            option1={option1}
                            option2={option2}
                            kof1={row1kof1}
                            kof2={row1kof2}
                            tieKof={row1tieKof}
                        />
                    </div>
                    <div style={{ marginBottom: "4px", width: "100%" }}>
                        <ResultsRow
                            bet={bet}
                            isActive={isActive}
                            option1={option1}
                            option2={option2}
                            kof1={row1kof1}
                            kof2={row1kof2}
                            tieKof={row1tieKof}
                        />
                    </div>
                    <ResultsRow
                        bet={bet}
                        isActive={isActive}
                        option1={option1}
                        option2={option2}
                        kof1={row2kof1}
                        kof2={row2kof2}
                        tieKof={row2tieKof}
                    />
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
    const resultsCardsList = useStore(
        (state) => state.multiViewLiveMatchResultsCards
    );
    const removeMatchFromMultiViewMatches = useStore(
        (state) => state.removeMatchFromMultiViewMatches
    );
    const updateMultiViewMatchesResults = useStore(
        (state) => state.updateMultiViewMatchesResults
    );
    const addNewMatchResult = useStore((state) => state.addNewMatchResult);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => addCard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addCard = (cardId) => {
        console.log('cardIdcardId', cardId)
        console.log('cardIdcardId data', resultsCardsList)

        
        let data = resultsCardsList;
        if (window.cardsData) {
            data = window.cardsData;
        }
        removeMatchFromMultiViewMatches(cardId);
        const newData = data.map((match) => {
            console.log('match.id === id', match.id)
            console.log('match.id id', id)
            console.log('match.id id', match.id === id)

            if (match.id === id) {
                return { ...match, isEmpty: false };
            }
            return match;
        });
        console.log('cardIdcardId newData', newData)

        window.cardsData = newData;
        updateMultiViewMatchesResults(newData);
        if (document.querySelectorAll(".empty-card")?.length === 0) {
            const newData = [
                {
                    id: _.uniqueId(),
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: _.uniqueId(),
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
                {
                    id: _.uniqueId(),
                    team1: "FC바로셀로나",
                    team2: "레알마드리드",
                    isEmpty: true,
                },
            ];
            newData.forEach((card) => addNewMatchResult(card));
            window.cardsData = [...window.cardsData, ...newData];
        }
    };

    return (
        <>
            {isEmpty ? (
                <div
                    style={{ opacity: isOver ? "0.5" : "" }}
                    ref={drop}
                    className="empty-card"
                ></div>
            ) : (
                <div className="multi-view-match-result-wrapper">
                    <MultiViewMatchCard id={id} />
                    <div className="bet-info-wrapper">
                        <div className="fixed-background-image"></div>
                        <Info />
                        <div className="scroll-wrapper">
                            {/* <div className="internal-scroll-wrapper hide-scrollbar"> */}
                                <div className="background-image" style={{background: '', marginTop: '40px'}} >
                                    <ResultsContent />
                                    <ResultsContent isEmpty={true} />
                                </div>
                                {/* <div className="background-image-1" >
                                    <ResultsContent />
                                    <ResultsContent isEmpty={true} />
                                </div> */}
                            {/* </div> */}
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
    const resultsCardsList = useStore(
        (state) => state.multiViewLiveMatchResultsCards
    );

    // const sortedData = [...resultsCardsList].sort(function (x, y) {
    //     return   Number(x.isEmpty) - Number(y.isEmpty);
    // });

    console.log('>>>>>>>>>>> resultsCardsList',resultsCardsList)

    return (
        <div className="multi-view-match-results-wrapper">
            {resultsCardsList.map(({ id, isEmpty }) => {
                return <MultiViewMatchResults id={id} isEmpty={isEmpty} />;
            })}
        </div>
    );
}
