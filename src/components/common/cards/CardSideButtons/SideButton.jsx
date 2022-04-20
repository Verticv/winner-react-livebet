import React, { useEffect, useState } from "react";

import useStore from "store/useStore";
import { matchTypes } from "helpers/constants";
import moveArrayItemToNewIndex from "helpers/moveArrayItemToNewIndex";

import whiteArrow from "../../../../imagesHold/cards/white-arrow.png";
import redArrow from "../../../../imagesHold/cards/red-arrow.png";
import blueArrow from "../../../../imagesHold/cards/blue-arrow.png";

import "./SideButton.scss";

export default function SideButton({
    data,
    setData,
    matchCard,
    onClick,
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    isSelected,
    redCard = true,
    isFavoriteCard = false,
    isActive = false,
    withHeader
}) {
    const [arrowImg, setArrowImg] = useState(blueArrow);
    const removeMiddleComponent = useStore((state) => state.removeMiddleComponent);
    const showMiddleComponent = useStore((state) => state.showMiddleComponent);

    useEffect(() => {
        if (isSelected || isActive) {
            setArrowImg(whiteArrow);
        } else if (redCard) {
            setArrowImg(redArrow);
        } else {
            setArrowImg(blueArrow);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const favoriteMatches = data
    // const updateFavoritesMatches = useStore(
    //     (state) => state.updateFavoritesMatches
    // );

    const changeOrderHandler = (type, id) => {
        console.log('!!!!!!!!')
        const live = [...favoriteMatches].filter(
            (match) => match.type === matchTypes.live
        );
        const upcoming = [...favoriteMatches].filter(
            (match) => match.type === matchTypes.upcoming
        );
        if (type === matchTypes.live) {
            let oldIndex;
            live.forEach((ele, index) => {
                if (ele.id === id) {
                    oldIndex = index;
                }
            });
            if (oldIndex !== 0) {
                moveArrayItemToNewIndex(live, oldIndex, oldIndex - 1);
                // updateFavoritesMatches([...live, ...upcoming]);
                const newArr = [...live, ...upcoming].map((card, index) => {
                    const newCard = {...card}
                    newCard.id = index
                    return newCard
                })
                setData(newArr)
            }
        } else if (type === matchTypes.upcoming) {
            let oldIndex;
            upcoming.forEach((ele, index) => {
                if (ele.id === id) {
                    oldIndex = index;
                }
            });
            if (oldIndex !== 0) {
                moveArrayItemToNewIndex(upcoming, oldIndex, oldIndex - 1);
                // updateFavoritesMatches([...live, ...upcoming]);
                const newArr = [...live, ...upcoming].map((card, index) => {
                    const newCard = {...card}
                    newCard.id = index
                    return newCard
                })
                setData(newArr)
            }
        }
    };

    return (
        <button
            onClick={isFavoriteCard ? () => {} : (e) => {
                onClick(e, matchCard)
                if (redCard) {
                    showMiddleComponent()
                } else {
                    removeMiddleComponent()
                }
            }}
            onMouseEnter={() => {
                onMouseEnter();
                // if (isFavoriteCard && !(isSelected || isActive)) {
                //     setArrowImg(whiteArrow);
                // }
            }}
            onMouseLeave={() => {
                onMouseLeave();
            }}
            className={`
            side-button 
            ${redCard ? "red-card" : "blue-card"}
            ${isSelected || isActive ? "active" : ""}
            ${isFavoriteCard ? "favorite-card" : ""}
            `}
            style={{height: withHeader ? "" : redCard ? "105px" : "70px"}}
        >
            <div className="side-button-wrapper">
                {isFavoriteCard && (
                    <>
                        <div
                            onClick={() =>
                                changeOrderHandler(matchCard.type, matchCard.id)
                            }
                            onMouseEnter={() => {
                                if (isFavoriteCard && !(isSelected || isActive)) {
                                    setArrowImg(whiteArrow);
                                }
                            }}
                            onMouseLeave={() => {
                                if (isFavoriteCard && !(isSelected || isActive)) {
                                    if (redCard) {
                                        setArrowImg(redArrow);
                                    } else {
                                        setArrowImg(blueArrow);
                                    }
                                }
                            }}
                            className={`up-arrow-wrapper ${isSelected || isActive ? "active" : ""}`}
                        >
                            <div className="up-arrow">
                                <div>
                                    <img src={arrowImg} alt="arrow" />
                                </div>
                            </div>
                            {!isFavoriteCard && <div className="arrow-line1"></div>}
                            {!isFavoriteCard && <div className="arrow-line2"></div>}
                        </div>
                    </>
                )}
                {redCard ? (
                    <div className={`favorite-plus ${isSelected || isActive ? "active" : ""}`} onClick={isFavoriteCard ? (e) => onClick : () => {}}>
                        <p className="plus">+</p>
                        <p className="number">23</p>
                    </div>
                ) : (
                    <div className={`favorite-plus ${isSelected || isActive ? "active" : ""}`} onClick={isFavoriteCard ? (e) => onClick : () => {}}>
                        <p className="text">정보</p>
                    </div>
                )}
            </div>
            {!isFavoriteCard && <div className="line"></div>}
            <div className="left-shadow"></div>
        </button>
    );
}
