import React from "react";

export default function MultiViewBetSlipBet({ bet }) {
    const { text = "베팅할 게임을 선택하세요." } = bet;

    return <div className="cart-card-wrapper-multi">{text}</div>;
}
