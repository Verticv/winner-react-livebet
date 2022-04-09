import React from "react";

import useStore from "store/useStore";
import { matchTypes } from "helpers/constants";
import moveArrayItemToNewIndex from "helpers/moveArrayItemToNewIndex";

import whiteArrow from "../../../../imagesHold/cards/white-arrow.png";
import redArrow from "../../../../imagesHold/cards/red-arrow.png";
import blueArrow from "../../../../imagesHold/cards/blue-arrow.png";

import "./SideButton.scss";

export default function SideButton({
    matchCard,
    onClick,
    onMouseEnter,
    onMouseLeave,
    isSelected,
    redCard = true,
    isFavoriteCard = false,
    isActive = false,
}) {
    let arrowImg;
    if (isSelected || isActive) {
        arrowImg = whiteArrow;
    } else if (redCard) {
        arrowImg = redArrow;
    } else {
        arrowImg = blueArrow;
    }

    const favoriteMatches = useStore((state) => state.favoriteMatches);
    const updateFavoritesMatches = useStore(
        (state) => state.updateFavoritesMatches
    );

    const changeOrderHandler = (type, id) => {
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
                updateFavoritesMatches([...live, ...upcoming]);
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
                updateFavoritesMatches([...live, ...upcoming]);
            }
        }
    };

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
            side-button 
            ${redCard ? "red-card" : "blue-card"}
            ${isSelected || isActive ? "active" : ""}
            ${isFavoriteCard ? "favorite-card" : ""}
            `}
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
                    <>
                        <p className="plus">+</p>
                        <p className="number">23</p>
                    </>
                ) : (
                    <>
                        <p className="text">정보</p>
                    </>
                )}
            </div>
            <div className="line"></div>
            <div className="left-shadow"></div>
        </button>
    );
}
