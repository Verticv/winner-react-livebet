import React from "react";

export default function LiveUpcomingMatchesCount({text1 = "진행중인 경기", number1 = 4, text2 = "예정 경기", number2 = 20}) {
    return (
        <div className="matches-count">
            <div className="left">
                <div className="text">{text1}</div>
                <div style={{padding: number1 < 10 ? "0" : ""}} className="number">{number1}</div>
            </div>
            <div className="right">
                <div className="number">{number2}</div>
                <div className="text">{text2}</div>
            </div>
        </div>
    );
}
