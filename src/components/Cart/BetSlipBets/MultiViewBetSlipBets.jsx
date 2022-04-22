import React from "react";
import useStore from "store/useStore";
import BetSlipBet from "./BetSlipBet";
import "./BetSlipBets.scss";

export default function BetSlipBets() {
    const multiViewBetSlipBets = useStore((s) => s.multiViewBetSlipBets);

    return (
        <div className="cart-cards-wrapper">
            {multiViewBetSlipBets.length ? (
                multiViewBetSlipBets.map((bet, index) => {
                    return <BetSlipBet index={index} key={bet.id + index} bet={bet} />;
                })
            ) : (
                <div className="cart-card-wrapper-multi">
                    베팅할 게임을 선택하세요.
                </div>
            )}
        </div>
    );
}
