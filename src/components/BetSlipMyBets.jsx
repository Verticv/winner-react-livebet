import React from 'react'
import useStore from 'store/useStore';
import BetSlipMyBet from './BetSlipMyBet'

export default function BetSlipMyBets() {
    const betSlipBets = useStore((state) => state.betSlipBets);
    return (
        <>
            {betSlipBets.map(bet => <BetSlipMyBet/>)}
        </>
    )
}
