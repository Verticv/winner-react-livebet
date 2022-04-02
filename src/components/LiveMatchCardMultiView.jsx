import React from "react";
import redShirt from "../imagesHold/image_66.png";
import blueShirt from "../imagesHold/image_64.png";

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
    // return (
    //     <div className="main-multi-group-3" style={{position: 'relative', flexShrink: 0, marginRight:'5px'}}>
    //         <div className="main-multi-line"></div>
    //         <div className="main-multi-row-31">
    //             <p className="main-multi-text">후반전 35분</p>
    //             <p className="main-multi-text-2">
    //                 12
    //                 <span className="main-multi-text-style">점수</span>
    //             </p>
    //         </div>
    //         <div className="main-multi-col-7">
    //             <div className="main-multi-row-7">
    //                 <div className="main-multi-team">
    //                     <div className="main-multi-group-4">
    //                         <img
    //                             className="main-multi-layer"
    //                             src={
    //                                 require("../imagesHold/multi/image_43.png")
    //                                     .default
    //                             }
    //                             alt=""
    //                             width="15"
    //                             height="10"
    //                         />
    //                     </div>
    //                     <div className="main-multi-bg-holder">
    //                         <p className="main-multi-h">h</p>
    //                     </div>
    //                     <p className="main-multi-text-3">fc바로셀로나</p>
    //                 </div>
    //                 <p className="main-multi-text-4">
    //                     0<span className="main-multi-text-style-2">0</span>
    //                     <span className="colore9ca4e">1</span>
    //                 </p>
    //             </div>
    //             <div className="main-multi-row-8">
    //                 <div className="main-multi-team-2">
    //                     <img
    //                         className="main-multi-layer-2"
    //                         src={
    //                             require("../imagesHold/multi/image_40.png")
    //                                 .default
    //                         }
    //                         alt=""
    //                         width="13"
    //                         height="15"
    //                     />
    //                     <div className="main-multi-bg-holder-2">
    //                         <img
    //                             className="main-multi-a"
    //                             src={
    //                                 require("../imagesHold/multi/a.png").default
    //                             }
    //                             alt="a"
    //                             width="8"
    //                             height="7"
    //                             title="a"
    //                         />
    //                     </div>
    //                     <p className="main-multi-text-5">레알마드리드</p>
    //                 </div>
    //                 <p className="main-multi-text-6">
    //                     0<span className="main-multi-text-style-2">0</span>
    //                     <span className="colore9ca4e">0</span>
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // );
}
