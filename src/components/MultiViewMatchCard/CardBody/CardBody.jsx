import React from "react";

import redShirt from "../../../imagesHold/image_66.png";
import blueShirt from "../../../imagesHold/image_64.png";


export default function CardBody({
    team1 = "fc바로셀로나",
    team2 = "레알마드리드",
    team1stats = 5000,
    team1Goals = 2,
    team2stats = 5000,
    team2Goals = 0,
}) {
    return (
        <div className="multi-card-body-wrapper">
            <div className="left">
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
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
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
                            style={{ fontSize: "14px", whiteSpace: "nowrap" }}
                            className="text-55"
                        >
                            {team2}
                        </p>
                    </div>
                </div>
            </div>
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
        </div>
    );
}
