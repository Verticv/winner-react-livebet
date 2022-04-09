import React from "react";

import MultiViewBetSlipBet from "./MultiViewBetSlipBet";

import "./BetSlipBets.scss";

export default function MultiViewBetSlipBets() {
    const betSlipBets = [{ id: 0, text: "베팅할 게임을 선택하세요." }];
    return (
        <div className="cart-cards-wrapper">
            {betSlipBets.map((bet, index) => {
                return <MultiViewBetSlipBet key={bet.id + index} bet={bet} />;
            })}
        </div>
    );
}
