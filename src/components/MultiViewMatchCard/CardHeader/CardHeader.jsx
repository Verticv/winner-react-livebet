import React, { useState } from "react";
import useStore from "store/useStore";
import ball from "../../../imagesHold/image_70.png";
import spain from "../../../imagesHold/image_61.png";
import stadium from "../../../imagesHold/m-card-stadium.png";
import close from "../../../imagesHold/m-card-close.png";
import play from "../../../imagesHold/m-card-play.png";
import activeStadium from "../../../imagesHold/m-card-stadium-active.png";
import activeClose from "../../../imagesHold/m-card-close-active.png";
import activePlay from "../../../imagesHold/m-card-play-active.png";

export default function CardHeader({ id, league = "라리가" }) {
    const resultsCardsList = useStore(
        (state) => state.multiViewLiveMatchResultsCards
    );
    const removeMatchFromMultiViewMatchesResults = useStore(
        (state) => state.removeMatchFromMultiViewMatchesResults
    );
    const addNewMatch = useStore((state) => state.addNewMatch);
    const [playActive, setIsPlayActive] = useState(false);
    const [stadiumActive, setIsStadiumActive] = useState(false);
    const [closeActive, setIsCloseActive] = useState(false);


    const closeHandler = (cardId) => {
        removeMatchFromMultiViewMatchesResults(cardId);
        const newCard = { ...resultsCardsList[resultsCardsList?.length - 1] };
        newCard.id = newCard.id + 1;
        addNewMatch(newCard);
    };
    console.log('playActiveplayActiveplayActive', playActive)

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
                <button
                    className={`watch ${playActive ? "active" : ""}`}
                    onMouseEnter={() => setIsPlayActive(true)}
                    onMouseLeave={() => setIsPlayActive(false)}
                >
                    <div>
                        <img
                            className="ball"
                            src={playActive ? activePlay : play}
                            alt=""
                            // width="18"
                            // height="18"
                        />
                    </div>
                    <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    {playActive && <div className="line"></div>}
                    {playActive && <div className="fade"></div>}
                </button>
                <button
                    className={`ground ${stadiumActive ? "active" : ""}`}
                    onMouseEnter={() => setIsStadiumActive(true)}
                    onMouseLeave={() => setIsStadiumActive(false)}
                >
                    <div>
                        <img
                            className="ball"
                            src={stadiumActive ? activeStadium : stadium}
                            alt=""
                            // width="18"
                            // height="18"
                        />
                    </div>
                    <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    {stadiumActive && <div className="line"></div>}
                    {stadiumActive && <div className="fade"></div>}
                </button>
                <button
                    className={`close ${closeActive ? "active" : ""}`}
                    onMouseEnter={() => setIsCloseActive(true)}
                    onMouseLeave={() => setIsCloseActive(false)}
                    onClick={() => {
                        closeHandler(id);
                    }}
                >
                    <div>
                        <img
                            className="ball"
                            src={closeActive ? activeClose : close}
                            alt=""
                            // width="18"
                            // height="18"
                        />
                    </div>
                    <div className="left-line-1"></div>
                    <div className="left-line-2"></div>
                    {closeActive && <div className="line"></div>}
                    {closeActive && <div className="fade"></div>}
                </button>
            </div>
        </div>
    );
}
