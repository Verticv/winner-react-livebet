import React from "react";
import useStore from "store/useStore";

import goldStar from "../../../../imagesHold/cards/gold-star.png";
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
    isRed = true,
    league = "라리가",
    withMatchResults = true,
    team1 = "fc바로셀로나",
    team2 = "레알마드리드",
    isActive,
    setIsActive,
}) {
    const mouseEnterHandler = () => setIsActive(true);
    const mouseLeaveHandler = () => setIsActive(false);

    const playingMatchId = useStore((state) => state.playingMatchId);

    const changePlayingMatchId = useStore(
        (state) => state.changePlayingMatchId
    );

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className={`card-body-wrapper ${
                isSelected || isActive ? "active" : ""
            } ${isRed ? "" : "blue"}`}
        >
            <div className="left">
                <div className="star">
                    <img src={goldStar} alt="" width="18" height="18" />
                </div>
                <div className="teams-wrapper">
                    <div className="team-1">
                        <div className="shirt">
                            <img
                                // className="layer-14"
                                src={redShirt}
                                alt=""
                                width="15"
                                height="10"
                            />
                        </div>
                        <div className="bg-holder-26">
                            <p className="h-3">h</p>
                        </div>
                        <p style={{fontSize: '14px', whiteSpace: 'nowrap', color: "#d1cecf"}} className="text-54">{team1}</p>
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
                        {/* <div className="bg-holder-27">
                            <img
                                className="a-3"
                                src={
                                    require("../../../../imagesHold/a.png")
                                        .default
                                }
                                alt="a"
                                width="8"
                                height="9"
                                title="a"
                            />
                        </div> */}
                        <p style={{fontSize: '14px', whiteSpace: 'nowrap', color: "#d1cecf"}} className="text-55">{team2}</p>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="text"> {isRed ? (<>"후반전" <span>35</span></>) : "경기시간"} </div>
                <div className="button-wrapper">
                    <button
                        onClick={(event) => {
                            event.stopPropagation();
                            changePlayingMatchId(id);
                        }}
                    >
                        { isRed ? (<img
                            className="ico-19"
                            src={
                                playingMatchId === id
                                    ? selectedPlayButton
                                    : playButton
                            }
                            alt=""
                            width="33"
                            height="33"
                        />) : (<div className="date">02-06 21:00</div>) }
                        
                    </button>
                </div>
            </div>
            {isRed && (
                <div className="right">
                    <p className="line">
                        {team1stats}
                        <span>{team1Goals}</span>
                    </p>
                    <p className="line">
                        {team2stats}
                        <span className="gold">{team2Goals}</span>
                    </p>
                </div>
            )}
        </div>
    );
}
