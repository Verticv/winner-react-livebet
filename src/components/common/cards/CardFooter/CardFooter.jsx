import React from "react";

import "./CardFooter.scss";

export default function CardFooter({
    team1 = "fc바로셀로나",
    team2 = "레알마드리드",
    team1WinKof = 5.01,
    tieKof = 4.05,
    team2WinKof = 3.75,
}) {
    return (
        <div className="card-footer-wrapper">
            <div className="left">
                <p className="text">{team1}</p>
                <div className="number red-arrow">
                    <div className="number-value">{team1WinKof}</div>
                </div>
            </div>
            <div className="middle">
                <div className="middle-content">{tieKof}</div>
            </div>
            <div className="right">
                <div className="number blue-arrow">
                    <div className="number-value">{team2WinKof}</div>
                </div>
                <p className="text">{team2}</p>
            </div>
        </div>
    );
}
