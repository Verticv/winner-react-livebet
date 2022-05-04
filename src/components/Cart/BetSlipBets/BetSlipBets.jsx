import React from "react";
import useStore from "store/useStore";
import { singleOrMultiOptions } from "helpers/constants";
import BetSlipBet from "./BetSlipBet";
import "./BetSlipBets.scss";

export default function BetSlipBets() {
    const betSlipBets = useStore((s) => s.betSlipBets);
    const singleOrMultiBet = useStore((state) => state.singleOrMultiBet);

    let betsData = betSlipBets || [];

    if (singleOrMultiBet === singleOrMultiOptions.single && betSlipBets.length > 0) {
        betsData = [betSlipBets[0]];
    }

    return (
        <div className="cart-cards-wrapper">
            {betsData.length ? (
                betsData.map((bet, index) => {
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
