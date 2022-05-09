import React, { useEffect, useState } from "react";

import useStore from "store/useStore";
import ball from "../../../imagesHold/image_70.png";
import spain from "../../../imagesHold/image_61.png";
import stadium from "../../../imagesHold/m-card-stadium.png";
import close from "../../../imagesHold/m-card-close.png";
import play from "../../../imagesHold/m-card-play.png";
import activeStadium from "../../../imagesHold/m-card-stadium-active.png";
import activePlay from "../../../imagesHold/m-card-play-active.png";

export default function CardHeader({ index, id, league = "라리가" }) {
    const selectedNav = useStore((state) => state.selectedNav);
    const multiViewLiveMatchResultsCards = useStore(
        (state) => state.multiViewLiveMatchResultsCards
    );
    const favoriteMultiViewLiveMatchResultsCards = useStore(
        (state) => state.favoriteMultiViewLiveMatchResultsCards
    );

    let resultsCardsList = multiViewLiveMatchResultsCards

    const removeMatchFromMultiViewMatchesResults = useStore(
        (state) => state.removeMatchFromMultiViewMatchesResults
    );
    const removeFavoriteMatchFromMultiViewMatchesResults = useStore(
        (state) => state.removeFavoriteMatchFromMultiViewMatchesResults
    );

    const addNewMatch = useStore((state) => state.addNewMatch);
    const addNewFavoriteMatch = useStore((state) => state.addNewFavoriteMatch);

    const [playActive, setIsPlayActive] = useState(false);
    const [stadiumActive, setIsStadiumActive] = useState(false);

    if (selectedNav === 0 ) {
        resultsCardsList = favoriteMultiViewLiveMatchResultsCards
    }

    useEffect(() => {
        if (index === 0) {
            setIsStadiumActive(true);
        } else if (index === 1) {
            setIsPlayActive(true);
            setIsStadiumActive(true);
        }
    }, [index]);

    const closeHandler = (cardId) => {
        if (selectedNav === 0) {
            removeFavoriteMatchFromMultiViewMatchesResults(cardId);
        } else {
            removeMatchFromMultiViewMatchesResults(cardId);
        }

        const newCard = { ...resultsCardsList[resultsCardsList?.length - 1] };

        let data = window.cardsData || [];

        if (selectedNav === 0) {
            data = window.favoriteCardsData || [];
        }

        const newData = data.map((card) => {
            if (card.id === cardId) {
                const cardCopy = { ...card };
                cardCopy.isEmpty = true;
                return cardCopy;
            }
            return card;
        });
        newCard.id = Math.random();
        newCard.isEmpty = true;
        if (selectedNav === 0) {
            window.favoriteCardsData = newData;
            addNewFavoriteMatch(newCard)
        } else {
            window.cardsData = newData;
            addNewMatch(newCard);
        }
    };

    return (
        <div className="multi-card-header-content">
            <div className="left">
                <img
                    className="ball"
                    src={ball}
                    alt=""
                    width="18"
                    height="18"
                />
                <img src={spain} alt="" width="29" height="18" />
                <p className="text">{league}</p>
            </div>

            <div className="right">
                <button className={`watch ${playActive ? "active" : ""}`}>
                    <div>
                        <img
                            className="ball"
                            src={playActive ? activePlay : play}
                            alt=""
                        />
                    </div>
                    <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    {playActive && <div className="line"></div>}
                    {playActive && <div className="fade"></div>}
                </button>
                <button className={`ground ${stadiumActive ? "active" : ""}`}>
                    <div>
                        <img
                            className="ball"
                            src={stadiumActive ? activeStadium : stadium}
                            alt=""
                        />
                    </div>
                    <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    {stadiumActive && <div className="line"></div>}
                    {stadiumActive && <div className="fade"></div>}
                </button>
                <button
                    className={`close`}
                    // onMouseEnter={() => setIsCloseActive(true)}
                    // onMouseLeave={() => setIsCloseActive(false)}
                    onClick={() => {
                        closeHandler(id);
                    }}
                >
                    <div>
                        <img className="ball" src={close} alt="" />
                    </div>
                    <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    {/* {closeActive && <div className="line"></div>}
                    {closeActive && <div className="fade"></div>} */}
                </button>
            </div>
        </div>
    );
}
