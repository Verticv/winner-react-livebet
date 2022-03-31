// import jss from "jss";
import React, { useState } from "react";
// import CoefficientWithUpdate from "../CoefficientWithUpdate/CoefficientWithUpdate";
import "./MatchDetail.scss";

function ResultsRow() {
    return (
        <div className="match-results-wrapper">
            <div className="left">
                <p className="text">오버</p>
                <div className="number red-arrow">
                    <div className="number-value">1.25</div>
                </div>
            </div>
            <div className="middle">
                <div className="left"></div>
                <div className="middle-content">4.05</div>
                <div className="right"></div>
            </div>
            <div className="right">
                <div className="number blue-arrow">
                    <div className="number-value">3.3</div>
                </div>
                <p className="text">언더</p>
            </div>
        </div>
    );
}

export default function MatchDetail({ bet }) {
    // const styles = {
    //     expandButton: `
    //         height: 28px;
    //         left: 796px;
    //         position: absolute;
    //         top: 0;
    //         width: 28px;
    //         -webkit-border-radius: 3px;
    //         -moz-border-radius: 3px;
    //         border-radius: 3px;
    //         background: rgba(255, 255, 255, 0.2);
    //     `,
    //     betTitle: `
    //             left: 8px;
    //             top: 12px;
    //             padding: 24px;
    //             position: relative;
    //             height: 28px;
    //     `,
    //     betOptions: `

    //             position: relative;
    //             height: 74px;
    //         `,
    //     team2: `
    //             height: 35px;
    //             left: 497px;
    //             position: absolute;
    //             top: 0;
    //             width: 342px;
    //             display: flex;
    //             justify-content: space-between;
    //             padding-right: 8px;
    //         `,
    //     option2Name: `
    //             white-space: nowrap;
    //             color: #d1cecf;
    //             text-align: right;
    //             text-transform: uppercase;
    //         `,
    //     rotate180: `
    //             transform: rotate(180deg);
    //     `,
    // };
    const [isShowing, setIsShowing] = useState(true);
    const handleToggleIsShowing = () => {
        setIsShowing((prev) => !prev);
    };
    // const { classes } = jss.createStyleSheet(styles).attach();
    const { betType, option1, option2 } = bet;
    console.log(option2, option1)
    const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    console.log('selectedOutcome', selectedOutcome, setSelectedOutcome)
    // function handleSetSelectedOutcome(outcome) {
    //     setSelectedOutcome(outcome);
    // }
    const [selectedOutcome2, setSelectedOutcome2] = useState(selections.none);
    console.log('selectedOutcome2', selectedOutcome2, setSelectedOutcome2)
    // function handleSetSelectedOutcome2(outcome) {
    //     setSelectedOutcome2(outcome);
    // }
    return (
        <div className="match-details-wrapper">
            <div className="match-details-header">
                <div className="left">
                    <div className="square"></div>
                    <p className="text">{betType}</p>
                </div>
                <button
                    onClick={handleToggleIsShowing}
                    // className={classes.expandButton}
                >
                    <img
                        className={`${isShowing ? "" : "rotate"}`}
                        src={
                            require("../../../../imagesHold/ico_21.png").default
                        }
                        alt=""
                        width="16"
                        height="10"
                    />
                </button>
            </div>
            {isShowing ? (
                <div className="match-details-content">
                    <div style={{marginBottom: '4px'}}>
                        <ResultsRow />
                    </div>
                    <ResultsRow />
                    {/* <div className="result-row">
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.team1)
                            }
                            className="bg-holder-57"
                            style={
                                selectedOutcome === selections.team1
                                    ? {
                                          background: `url(${
                                              require("../../../../imagesHold/left_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          padding: '0 10px'
                                      }
                                    : {
                                          background: `url(${
                                              require("../../../../imagesHold/bg_160.png")
                                                  .default
                                          })`,
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          padding: '0 10px'
                                      }
                            }
                        >
                            <p className="text-116">{option1}</p>
                            <CoefficientWithUpdate />
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.draw)
                            }
                            className="bg-holder-58"
                            style={
                                selectedOutcome === selections.draw
                                    ? {
                                          background: `url(${
                                              require("../../../../imagesHold/center_selected_trapezoid.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                      }
                                    : {
                                          background: `url(${
                                              require("../../../../imagesHold/bg_154.png")
                                                  .default
                                          })`,
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                      }
                            }
                        >
                            <CoefficientWithUpdate />
                            <img
                                className="line-33"
                                src={
                                    require("../../../../imagesHold/line_11.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.team2)
                            }
                            // className={classes.team2}
                            style={
                                selectedOutcome === selections.team2
                                    ? {
                                          background: `url(${
                                              require("../../../../imagesHold/right_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          paddingLeft: "10px",
                                      }
                                    : {
                                          background: `url(${
                                              require("../../../../imagesHold/bg_156.png")
                                                  .default
                                          })`,
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          paddingLeft: "10px",
                                      }
                            }
                        >
                            <CoefficientWithUpdate />
                            <p>{option2}</p>
                            <img
                                className="line-34"
                                src={
                                    require("../../../../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <div className="line-35"></div>
                    </div> */}

                    {/* <div className="result-row">
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.team1)
                            }
                            style={
                                selectedOutcome2 === selections.team1
                                    ? {
                                          background: `url(${
                                              require("../../../../imagesHold/left_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          padding: "0 10px",
                                      }
                                    : {
                                          background: `url(${
                                              require("../../../../imagesHold/bg_160.png")
                                                  .default
                                          })`,
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          padding: "0 10px",
                                      }
                            }
                            className="bg-holder-61"
                        >
                            <p className="text-121">{option1}</p>
                            <CoefficientWithUpdate />
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.draw)
                            }
                            style={
                                selectedOutcome2 === selections.draw
                                    ? {
                                          background: `url(${
                                              require("../../../../imagesHold/center_selected_trapezoid.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                      }
                                    : {
                                          background: `url(${
                                              require("../../../../imagesHold/bg_154.png")
                                                  .default
                                          })`,
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                      }
                            }
                            className="bg-holder-62"
                        >
                            <CoefficientWithUpdate />
                            <img
                                className="line-36"
                                src={
                                    require("../../../../imagesHold/line_11.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.team2)
                            }
                            // className={classes.team2}
                            style={
                                selectedOutcome2 === selections.team2
                                    ? {
                                          background: `url(${
                                              require("../../../../imagesHold/right_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          paddingLeft: "10px",
                                      }
                                    : {
                                          background: `url(${
                                              require("../../../../imagesHold/bg_156.png")
                                                  .default
                                          })`,
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          paddingLeft: "10px",
                                      }
                            }
                        >
                            <CoefficientWithUpdate />
                            <p>{option2}</p>
                            <img
                                className="line-37"
                                src={
                                    require("../../../../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <div className="line-38"></div>
                    </div> */}
                </div>
            ) : null}
        </div>
    );
}
