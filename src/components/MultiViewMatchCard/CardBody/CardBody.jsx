import React, { useState } from "react";

import goldStar from "imagesHold/cards/gold-star.png";
import whiteStar from "imagesHold/cards/white-star.png";
import redShirt from "imagesHold/image_66.png";
import blueShirt from "imagesHold/image_64.png";

export default function CardBody({
    team1 = "FC바로셀로나",
    team2 = "레알마드리드",
    team1stats = 5000,
    team1Goals = 2,
    team2stats = 5000,
    team2Goals = 0,
}) {
    const [activeStar, setActiveStar] = useState(false);

    const starHandler = (event) => {
        event.stopPropagation();
        setActiveStar((prev) => !prev);
    };

    return (
        <div className="multi-card-body-wrapper">
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
                        <p
                            style={{
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                color: "#d1cecf",
                                width: "18rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
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
                        <p
                            style={{
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                color: "#d1cecf",
                                width: "18rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                            className="text-55"
                        >
                            {team2}
                        </p>
                    </div>
                </div>
            </div>
            <div className="right">
                <p className="line">
                    <div
                        style={{
                            display: "flex",
                            width: "132px",
                            justifyContent: "space-between",
                            marginRight: "12.5px",
                            textAlign: 'center',
                        }}
                    >
                        <p>{team1stats.toString()[0]}</p>
                        <p className="second">{team1stats.toString()[1]}</p>
                        <p className="third">{team1stats.toString()[2]}</p>
                        <p className="forth">{team1stats.toString()[3]}</p>
                        <span className="gold">{team1Goals}</span>
                    </div>
                </p>
                <p className="line">
                    <div
                        style={{
                            display: "flex",
                            width: "132px",
                            justifyContent: "space-between",
                            marginRight: "12.5px",
                            textAlign: 'center',
                        }}
                    >
                        <p>{team2stats.toString()[0]}</p>
                        <p className="second">{team2stats.toString()[1]}</p>
                        <p className="third">{team2stats.toString()[2]}</p>
                        <p className="forth">{team2stats.toString()[3]}</p>
                        <span className="gold">{team2Goals}</span>
                    </div>
                </p>
            </div>
        </div>
    );
}
