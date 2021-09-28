import clsx from "clsx";
import jss from "jss";
import React, { useState } from "react";
import CoefficientWithUpdate from "./CoefficientWithUpdate";

export default function LiveMatchCoefficient({
    team1,
    team1WinKof,
    tieKof,
    team2,
    team2WinKof,
    parentClasses,
    parentSelected
}) {
    const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    const styles = {
        redNeonBorder: `
            height: 32px;
            left: 2px;
            position: absolute;
            width: 45px;
            border: 1px solid #ffbc93; /*stroke*/
            -webkit-border-radius: 3.88px/3.81px;
            -moz-border-radius: 3.88px/3.81px;
            border-radius: 3.88px/3.81px;
            background: #7c2323;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
            -webkit-box-shadow: 0 0 10.92px 1.08px #ff4c23;
            -moz-box-shadow: 0 0 10.92px 1.08px #ff4c23;
            box-shadow: 0 0 10.92px 1.08px #ff4c23; /*outer glow*/
    `,
        blueNeonBorder: `
                height: 32px;
                left: 0;
                position: absolute;
                top: 0;
                width: 45px;
                border: 1px solid #93d0ff; /*stroke*/
                -webkit-border-radius: 3.88px/3.81px;
                -moz-border-radius: 3.88px/3.81px;
                border-radius: 3.88px/3.81px;
                background: #293868;
                -moz-background-clip: padding;
                -webkit-background-clip: padding-box;
                background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
                -webkit-box-shadow: 0 0 10.92px 1.08px #236bff;
                -moz-box-shadow: 0 0 10.92px 1.08px #236bff;
                box-shadow: 0 0 10.92px 1.08px #236bff; /*outer glow*/
         `,
        blueNeonBorderContainer: `
         height: 32px;
         left: 11px;
         position: absolute;
         top: 0;
         width: 45px;
         `,
        greenNeonBorderContainer: `
         height: 32px;
         left: 23px;
         position: absolute;
         top: 0;
         width: 45px;
         `,
        textLeft: `
            color: #d1cecf;
            letter-spacing: 0;
            text-transform: uppercase;
            margin-left: 12px;
        `,
        rightContainer: {
            height: "32px",
            left: "82px",
            position: "absolute",
            top: "0",
            width: "283px",
            background:
                selectedOutcome === selections.team2
                    ? `url(${
                          require("../imagesHold/right_select_bet.png").default
                      }) no-repeat`
                    : parentSelected
                    ? `url(${require("../imagesHold/bg_250.png").default})`
                    : `url(${
                          require("../imagesHold/bg_208.png").default
                      }) no-repeat`,
            paddingLeft: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "12px",
            "&:hover": {
                background: `url(${
                    require("../imagesHold/right_select_bet.png").default
                }) no-repeat !important`,
            },
        },
        leftContainer: {
            height: "32px",
            left: "0",
            position: "absolute",
            top: "0",
            width: "283px",
            background:
                selectedOutcome === selections.team1
                    ? `url(${require("../imagesHold/bg_205.png").default})`
                    : parentSelected
                    ? `url(${require("../imagesHold/bg_227.png").default})`
                    : `url(${
                          require("../imagesHold/bg_214.png").default
                      }) no-repeat`,
            zIndex: selectedOutcome === selections.team1 ? 1 : 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "12px",
            "&:hover": {
                background: `url(${
                    require("../imagesHold/bg_205.png").default
                }) !important`,
            },
        },
        centerContainer: {
            height: "32px",
            left: "0",
            position: "absolute",
            top: "0",
            width: "92px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
                selectedOutcome === selections.draw
                    ? `url(${
                          require("../imagesHold/center_selected_trapezoid.png")
                              .default
                      })`
                    : parentSelected
                    ? `url(${
                          require("../imagesHold/bg_228.png").default
                      }) no-repeat center`
                    : `url(${
                          require("../imagesHold/bg_207.png").default
                      }) no-repeat`,
            zIndex: selectedOutcome === selections.draw ? 0 : 1,
            "&:hover": {
                background: `url(${
                    require("../imagesHold/center_selected_trapezoid.png")
                        .default
                }) !important`,
                zIndex: 0,
            },
        },
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    function handleSetSelectedOutcome(outcome) {
        setSelectedOutcome(outcome);
    }
    return (
        <div className="btn-4">
            <button
                onClick={(event) => {
                    event.stopPropagation();
                    handleSetSelectedOutcome(selections.team1);
                }}
                className={clsx(
                    classes.leftContainer,
                    !(selectedOutcome === selections.team1) &&
                        parentClasses.leftContainerHover
                )}
            >
                <p className={classes.textLeft}>{team1}</p>
                <CoefficientWithUpdate
                    selected={selectedOutcome === selections.team1}
                />
            </button>
            <div className="wrapper-21">
                <button
                    className={clsx(
                        classes.centerContainer,
                        !(selectedOutcome === selections.draw) &&
                            parentClasses.centerContainerHover
                    )}
                    onClick={(event) => {
                        event.stopPropagation();
                        handleSetSelectedOutcome(selections.draw);
                    }}
                >
                    <img
                        className="line-11"
                        src={require("../imagesHold/line_31.png").default}
                        alt=""
                        width="11"
                        height="32"
                    />
                    <CoefficientWithUpdate
                        selected={selectedOutcome === selections.draw}
                    />
                </button>
                <button
                    className={clsx(
                        classes.rightContainer,
                        !(selectedOutcome === selections.team2) &&
                            parentClasses.rightContainerHover
                    )}
                    onClick={(event) => {
                        event.stopPropagation();
                        handleSetSelectedOutcome(selections.team2);
                    }}
                >
                    <CoefficientWithUpdate
                        selected={selectedOutcome === selections.team2}
                    />
                    <p className="text-63">{team2}</p>
                </button>
                <img
                    className="line-12"
                    src={require("../imagesHold/line_32.png").default}
                    alt=""
                    width="11"
                    height="32"
                />
            </div>
        </div>
    );
}
