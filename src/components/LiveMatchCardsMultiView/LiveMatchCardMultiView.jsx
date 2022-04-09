import React from "react";

import redShirt from "../../imagesHold/image_66.png";
import blueShirt from "../../imagesHold/image_64.png";

export default function LiveMatchCardMultiView({
    team1 = "FC바로셀로나",
    team2 = "레알마드리드",
}) {
    return (
        <div className="multi-view-card-wrapper">
            <div className="card-header">
                <div className="left">
                    <p>후반전 35분</p>
                </div>
                <div className="right">
                    <span className="results-number">1</span>
                    <span className="results-number">2</span>
                    <span className="result-text">점수</span>
                </div>
            </div>
            <div className="card-body">
                <div className="teams-wrapper">
                    <div className="left">
                        <div className="team-1">
                            <div className="shirt">
                                <img
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
                                }}
                                className="text-55"
                            >
                                {team2}
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="first-row">
                            <span className="results-number">0</span>
                            <span className="results-number">0</span>
                            <span className="result">0</span>
                        </div>
                        <div className="second-row">
                            <span className="results-number">0</span>
                            <span className="results-number">0</span>
                            <span className="result">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
