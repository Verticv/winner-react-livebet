import React, { useState } from "react";
import useStore from "store/useStore";

import goldStar from "../../../../imagesHold/cards/gold-star.png";
import whiteStar from "../../../../imagesHold/cards/white-star.png";
import redShirt from "../../../../imagesHold/image_66.png";
import blueShirt from "../../../../imagesHold/image_64.png";
import selectedPlayButton from "../../../../imagesHold/play_button_selected.png";
import playButton from "../../../../imagesHold/play_button.png";

import "./CardBody.scss";

export default function CardBody({
    id = 0,
    team1stats = 5000,
    team1Goals = 2,
    team2stats = 5000,
    team2Goals = 0,
    isSelected,
    currentTimeText = "후반전",
    currentTimeNumber = "35",
    isRed = true,
    team1 = "FC바로셀로나",
    team2 = "레알마드리드",
    isActive,
    setIsActive,
    onClickHandler,
    isPlayButtonActive = false,
    matchCard
}) {
    const [activeStar, setActiveStar] = useState(false)
    const [playActive, setPlayActive] = useState(false)
    console.log('playActive', playActive)

    const mouseEnterHandler = () => setIsActive(true);
    const mouseLeaveHandler = () => setIsActive(false);
    const playMouseEnterHandler = () => setPlayActive(true);
    const playMouseLeaveHandler = () => setPlayActive(false);
    const starHandler = () => setActiveStar(prev => !prev);

    const changePlayingMatchId = useStore(
        (state) => state.changePlayingMatchId
    );

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={(e) => onClickHandler(e, matchCard)}
            className={`card-body-wrapper ${
                isSelected || isActive ? "active" : ""
            } ${isRed ? "" : "blue"}`}
        >
            <div className="left">
                <div className="star">
                    <img onClick={starHandler} src={activeStar ? goldStar : whiteStar} alt="" width="18" height="18" />
                </div>
                <div className="teams-wrapper">
                    <div className="team-1">
                        <div className="shirt">
                            <img src={redShirt} alt="" width="15" height="10" />
                        </div>
                        <div className="bg-holder-26">
                            <p className="h-3">h</p>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                color: "#d1cecf",
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
                                color: "#d1cecf",
                            }}
                            className="text-55"
                        >
                            {team2}
                        </p>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="text">
                    {" "}
                    {isRed ? (
                        <>
                           <p>{currentTimeText}</p> &nbsp; <span>{currentTimeNumber}</span>
                        </>
                    ) : (
                        currentTimeText
                    )}{" "}
                </div>
                <div className="button-wrapper">
                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            changePlayingMatchId(id);
                        }}
                        onMouseEnter={playMouseEnterHandler}
                        onMouseLeave={playMouseLeaveHandler}
                    >
                        {isRed ? (
                            <img
                                className="ico-19"
                                src={
                                    isPlayButtonActive
                                        ? selectedPlayButton
                                        : playButton
                                }
                                alt=""
                                width="32"
                                height="32"
                            />
                        ) : (
                            <div className="date">02-06 21:00</div>
                        )}
                    </button>
                </div>
            </div>
            {isRed && (
                <div className="right">
                    <p className="line">
                        <p>{team1stats.toString()[0]}</p>
                        <p className="second">{team1stats.toString()[1]}</p>
                        <p className="third">{team1stats.toString()[2]}</p>
                        <p className="forth">{team1stats.toString()[3]}</p>
                        <span className="gold ball">{team1Goals}</span>
                    </p>
                    <p className="line">
                        <p>{team2stats.toString()[0]}</p>
                        <p className="second">{team2stats.toString()[1]}</p>
                        <p className="third">{team2stats.toString()[2]}</p>
                        <p className="forth">{team2stats.toString()[3]}</p>
                        <span className="gold ball">{team2Goals}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
