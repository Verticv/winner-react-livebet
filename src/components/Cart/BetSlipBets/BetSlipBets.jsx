import React from "react";
import useStore from "store/useStore";
import BetSlipBet from "./BetSlipBet";
import "./BetSlipBets.scss";

export default function BetSlipBets() {
    const betSlipBets = useStore((s) => s.betSlipBets);

    return (
        <div className="cart-cards-wrapper">
            {betSlipBets.length ? (
                betSlipBets.map((bet, index) => {
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
