import React from 'react'
import useStore from 'store/useStore';
import BetSlipBet from './BetSlipBet';
import "./BetSlipBets.scss";

export default function BetSlipBets() {
    const betSlipBets = useStore(s => s.betSlipBets)
    return (
        <div className='cart-cards-wrapper'>
            {betSlipBets.map((bet, index) => {
                return <BetSlipBet key={bet.id + index} bet={bet}/>
            })}
        </div>
    );
}
