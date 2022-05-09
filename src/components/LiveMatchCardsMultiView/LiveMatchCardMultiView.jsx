import React, { useState, useEffect } from "react";

import useStore from "store/useStore";
import { useDrag } from "react-dnd";

import redShirt from "imagesHold/image_66.png";
import blueShirt from "imagesHold/image_64.png";
import goldStar from "imagesHold/cards/gold-star.png";
import whiteStar from "imagesHold/cards/white-star.png";

function useSingleAndDoubleClick(
    actionSimpleClick,
    actionDoubleClick,
    delay = 250
) {
    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (click === 1) actionSimpleClick();
            setClick(0);
        }, delay);

        // the duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) actionDoubleClick();

        return () => clearTimeout(timer);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [click]);

    return () => setClick((prev) => prev + 1);
}

export default function LiveMatchCardMultiView({
    id,
    title = "후반전 35분",
    team1 = "FC바로셀로나",
    team2 = "레알마드리드",
    team1Result1 = "0",
    team1Result2 = "0",
    team1Goal = "1",
    team2Result1 = "0",
    team2Result2 = "0",
    team2Goal = "0",
}) {
    const selectedNav = useStore((state) => state.selectedNav);
    const multiViewLiveMatchResultsCards = useStore(
        (state) => state.multiViewLiveMatchResultsCards
    );
    let resultsCardsList = multiViewLiveMatchResultsCards;
    const favoriteMultiViewLiveMatchResultsCards = useStore(
        (state) => state.favoriteMultiViewLiveMatchResultsCards
    );
    const removeMatchFromMultiViewMatches = useStore(
        (state) => state.removeMatchFromMultiViewMatches
    );
    const removeFavoriteMatchFromMultiViewMatches = useStore(
        (state) => state.removeFavoriteMatchFromMultiViewMatches
    );
    const updateMultiViewMatchesResults = useStore(
        (state) => state.updateMultiViewMatchesResults
    );
    const updateFavoriteMultiViewMatchesResults = useStore(
        (state) => state.updateFavoriteMultiViewMatchesResults
    );
    const addNewMatchResult = useStore((state) => state.addNewMatchResult);
    const [activeStar, setActiveStar] = useState(false);

    useEffect(() => {
        if (selectedNav === 0) {
            setActiveStar(true);
        } else {
            setActiveStar(false);
        }
    }, [selectedNav]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "card",
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    console.log("isDragging", isDragging);
    const callbackClick = () => console.log("click!");
    const callbackDoubleClick = () => {
        if (selectedNav === 0) {
            removeFavoriteMatchFromMultiViewMatches(id);
            resultsCardsList = favoriteMultiViewLiveMatchResultsCards;
        } else {
            removeMatchFromMultiViewMatches(id);
        }
        let isElementFound = false;
        const newData = resultsCardsList.map((match) => {
            if (match.isEmpty === true && !isElementFound) {
                isElementFound = true;
                return { ...match, isEmpty: false };
            }
            return match;
        });
        if (selectedNav === 0) {
            updateFavoriteMultiViewMatchesResults(newData);
            window.favoriteCardsData = newData;
        } else {
            window.cardsData = newData;
            updateMultiViewMatchesResults(newData);
        }

        if (document.querySelectorAll(".empty-card")?.length === 1) {
            const newData = [
                {
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
                },
            ];
            newData.forEach((card) => addNewMatchResult(card));
            if (selectedNav === 0) {
                const cards = window.favoriteCardsData || [];
                window.favoriteCardsData = [...(cards || []), ...newData];
            } else {
                const cards = window.cardsData || [];
                window.cardsData = [...(cards || []), ...newData];
            }
        }
    };

    const click = useSingleAndDoubleClick(callbackClick, callbackDoubleClick);

    const starHandler = (event) => {
        event.stopPropagation();

        if (selectedNav === 0) {
            removeFavoriteMatchFromMultiViewMatches(id);
        } else {
            setActiveStar((prev) => !prev);
        }
    };

    return (
        <div ref={drag} onClick={click} className="multi-view-card-wrapper">
            <div className="card-header">
                <div className="left">
                    <p>{title}</p>
                </div>
                <div className="right">
                    <span className="results-number">1</span>
                    <span className="results-number">2</span>
                    <span className="result-text">점수</span>
                </div>
            </div>
            <div className="card-body">
                <div className="teams-wrapper">
                    <div className="left">
                        <div className="star">
                            <img
                                onClick={starHandler}
                                src={activeStar ? goldStar : whiteStar}
                                alt=""
                                width="18"
                                height="18"
                            />
                        </div>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className="team-1">
                                <div className="shirt">
                                    <img
                                        src={redShirt}
                                        alt=""
                                        width="15"
                                        height="10"
                                    />
                                </div>
                                <div className="bg-holder-26">
                                    <p className="h-3">h</p>
                                </div>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        whiteSpace: "nowrap",
                                    }}
                                    className="text-54"
                                >
                                    {team1}
                                </p>
                            </div>
                            <div className="team-2">
                                <div className="shirt">
                                    <img
                                        className="layer-16"
                                        src={blueShirt}
                                        alt=""
                                        width="13"
                                        height="15"
                                    />
                                </div>
                                <div className="bg-holder-26">
                                    <p className="h-3">A</p>
                                </div>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        whiteSpace: "nowrap",
                                    }}
                                    className="text-55"
                                >
                                    {team2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="first-row">
                            <span className="results-number">
                                {team1Result1}
                            </span>
                            <span className="results-number">
                                {team1Result2}
                            </span>
                            <span className="result">{team1Goal}</span>
                        </div>
                        <div className="second-row">
                            <span className="results-number">
                                {team2Result1}
                            </span>
                            <span className="results-number">
                                {team2Result2}
                            </span>
                            <span className="result">{team2Goal}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
