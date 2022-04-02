import React from "react";

export default function LiveUpcomingMatchesCount() {
    return (
        <div className="matches-count">
            <div className="left">
                <div className="text">진행중인 경기</div>
                <div className="number">4</div>
            </div>
            <div className="right">
                <div className="number">20</div>
                <div className="text">예정 경기</div>
            </div>
        </div>
    );
}
