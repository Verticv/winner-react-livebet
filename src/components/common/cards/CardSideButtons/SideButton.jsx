import React from "react";
import whiteArrow from "../../../../imagesHold/cards/white-arrow.png";
import redArrow from "../../../../imagesHold/cards/red-arrow.png";
import blueArrow from "../../../../imagesHold/cards/blue-arrow.png";

import "./SideButton.scss";

export default function SideButton({
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

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
            side-button 
            ${redCard ? "red-card" : "blue-card"}
            ${isSelected ? "active" : ""}
            ${isFavoriteCard ? "favorite-card" : ""}
            `}
        >
            <div className="side-button-wrapper">
                {isFavoriteCard && (
                    <>
                        <div className="up-arrow-wrapper">
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
