import jss from "jss";
import React, { useState } from "react";
import CoefficientWithUpdate from "./CoefficientWithUpdate";

export default function MatchDetail({ bet }) {
    const styles = {
        expandButton: `
            height: 28px;
            left: 796px;
            position: absolute;
            top: 0;
            width: 28px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.2);
        `,
        betTitle: `
                left: 8px;
                top: 12px;
                padding: 24px;
                position: relative;
                height: 28px;
        `,
        betOptions: `

                position: relative;
                height: 74px;
            `,
        team2: `
                height: 35px;
                left: 497px;
                position: absolute;
                top: 0;
                width: 342px;
                display: flex;
                justify-content: space-between;
                padding-right: 8px;
            `,
        option2Name: `
                white-space: nowrap;
                color: #d1cecf;
                text-align: right;
                text-transform: uppercase;
            `,
        rotate180: `
                transform: rotate(180deg);
        `,
    };
    const [isShowing, setIsShowing] = useState(true);
    const handleToggleIsShowing = () => {
        setIsShowing((prev) => !prev);
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    const { betType, option1, option2 } = bet;
    const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    function handleSetSelectedOutcome(outcome) {
        setSelectedOutcome(outcome);
    }
    const [selectedOutcome2, setSelectedOutcome2] = useState(selections.none);
    function handleSetSelectedOutcome2(outcome) {
        setSelectedOutcome2(outcome);
    }
    return (
        <div>
            <div className={classes.betTitle}>
                <div className="dot"></div>
                <p className="text-115">{betType}</p>
                <button
                    onClick={handleToggleIsShowing}
                    className={classes.expandButton}
                >
                    <div
                        className={
                            "bg-holder-56 " +
                            `${isShowing ? "" : classes.rotate180}`
                        }
                    >
                        <img
                            className="ico-28"
                            src={require("../imagesHold/ico_21.png").default}
                            alt=""
                            width="16"
                            height="10"
                        />
                    </div>
                </button>
            </div>
            {isShowing ? (
                <div className={classes.betOptions}>
                    <div className="group-56">
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.team1)
                            }
                            className="bg-holder-57"
                            style={
                                selectedOutcome === selections.team1
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/left_select_bet.png")
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
                                              require("../imagesHold/bg_160.png")
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
                                              require("../imagesHold/center_selected_trapezoid.png")
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
                                              require("../imagesHold/bg_154.png")
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
                                    require("../imagesHold/line_11.png").default
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
                            className={classes.team2}
                            style={
                                selectedOutcome === selections.team2
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/right_select_bet.png")
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
                                              require("../imagesHold/bg_156.png")
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
                            <p className={classes.option2Name}>{option2}</p>
                            <img
                                className="line-34"
                                src={
                                    require("../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <div className="line-35"></div>
                    </div>
                    <div className="group-57">
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.team1)
                            }
                            style={
                                selectedOutcome2 === selections.team1
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/left_select_bet.png")
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
                                              require("../imagesHold/bg_160.png")
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
                                              require("../imagesHold/center_selected_trapezoid.png")
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
                                              require("../imagesHold/bg_154.png")
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
                                    require("../imagesHold/line_11.png").default
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
                            className={classes.team2}
                            style={
                                selectedOutcome2 === selections.team2
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/right_select_bet.png")
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
                                              require("../imagesHold/bg_156.png")
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
                            <p className={classes.option2Name}>{option2}</p>
                            <img
                                className="line-37"
                                src={
                                    require("../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <div className="line-38"></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
