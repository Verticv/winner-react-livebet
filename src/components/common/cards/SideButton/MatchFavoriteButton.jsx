import React, { useState } from "react";
// import useStore from "store/useStore";
import "./SideButton.scss";
import whiteArrow from "../../../../imagesHold/cards/white-arrow.png"
import redArrow from "../../../../imagesHold/cards/red-arrow.png"
import blueArrow from "../../../../imagesHold/cards/blue-arrow.png"

export default function MatchFavoriteButton({ matchCard, isSelected }) {
    const [isActive, setIsActive] = useState(false)
    // const favoriteMatches = useStore((state) => state.favoriteMatches);
    // const addMatchToFavorites = useStore((state) => state.addMatchToFavorites);
    // const removeMatchFromFavorites = useStore(
    //     (state) => state.removeMatchFromFavorites
    // );
    // const isFavorite =
    //     favoriteMatches.filter(
    //         (favoriteMatch) => favoriteMatch.id === matchCard.id
    //     ).length > 0;

    const redCard = true;
    const isFavoriteCard = true;
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
            onClick={() => {}}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
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
                            <div className="up-arrow"><div><img src={arrowImg} alt="arrow" /></div></div>
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
        </button>
    );

    // return (
    //     <button
    //         onClick={(event) => {
    //             event.preventDefault();
    //             event.stopPropagation();
    //             if (isFavorite) removeMatchFromFavorites(matchCard.id);
    //             else addMatchToFavorites(matchCard);
    //         }}
    //     >
    //         <img
    //             className="layer-15"
    //             src={
    //                 isFavorite
    //                     ? require("../../../../imagesHold/image_63.png").default
    //                     : require("../../../../imagesHold/image_73.png").default
    //             }
    //             alt=""
    //             width="18"
    //             height="16"
    //         />
    //     </button>
    // );
}
