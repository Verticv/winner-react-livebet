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
            <div style={{ position: "absolute", width: "100%", height: "1px", background: "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))", left: 0, top: 0}}></div>
            <div style={{ position: "absolute", width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.05)", bottom: 0}}></div>
            <div style={{ position: "absolute", width: "1px", height: "calc(100% - 1px)", background: "linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0))", left: 0, top: 0}}></div>
            <div style={{ position: "absolute", width: "1px", height: "calc(100% - 1px)", background: "linear-gradient(to top, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0))", right: 0, top: 0}}></div>
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
    const { betType } = bet;

    // const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    // const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    // const [selectedOutcome2, setSelectedOutcome2] = useState(selections.none);
    return (
        <div className="match-details-wrapper">
            <div className="match-details-header">
                <div className="left">
                    <div className="square"></div>
                    <p className="text">{betType}</p>
                </div>
                <button
                    onClick={handleToggleIsShowing}
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
                    <div style={{marginBottom: '4px', width: '100%'}}>
                        <ResultsRow />
                    </div>
                    <ResultsRow />
                </div>
            ) : null}
        </div>
    );
}
