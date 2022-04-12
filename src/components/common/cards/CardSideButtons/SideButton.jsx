import React from "react";

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
    onMouseEnter,
    onMouseLeave,
    isSelected,
    redCard = true,
    isFavoriteCard = false,
    isActive = false,
    withHeader
}) {
    let arrowImg;
    if (isSelected || isActive) {
        arrowImg = whiteArrow;
    } else if (redCard) {
        arrowImg = redArrow;
    } else {
        arrowImg = blueArrow;
    }

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
            onClick={isFavoriteCard ? () => {} : onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
                            className="up-arrow-wrapper"
                        >
                            <div className="up-arrow">
                                <div>
                                    <img src={arrowImg} alt="arrow" />
                                </div>
                            </div>
                            <div className="arrow-line1"></div>
                            <div className="arrow-line2"></div>
                        </div>
                    </>
                )}
                {redCard ? (
                    <div onClick={isFavoriteCard ? onClick : () => {}}>
                        <p className="plus">+</p>
                        <p className="number">23</p>
                    </div>
                ) : (
                    <div onClick={isFavoriteCard ? onClick : () => {}}>
                        <p className="text">정보</p>
                    </div>
                )}
            </div>
            <div className="line"></div>
            <div className="left-shadow"></div>
        </button>
    );
}
