import React from 'react'
import useStore from 'store/useStore';
import BetSlipBet from './BetSlipBet';

export default function BetSlipBets() {
    const betSlipBets = useStore(s => s.betSlipBets)
    return (
        <div
            style={{
                position: "relative",
                width: "360px",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column"
            }}
        >
            {betSlipBets.map((bet, index) => {
                return <BetSlipBet key={bet.id + index} bet={bet}/>
            })}
        </div>
    );
}
