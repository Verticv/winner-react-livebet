import React from 'react'
import BetAmountDetail from './BetAmountDetail'

export default function BetAmountDetails() {
    const betAmountDetails = [
        { id: 0, name: "최소 베팅금액", amount: "5,000" },
        { id: 1, name: "최대 베팅금액", amount: "1,000,000" },
        { id: 2, name: "최대 당첨금액", amount: "2,000,000" },
        { id: 3, name: "최대 베팅배당", amount: "0.00" },
    ];
    return (
        <div>
            {betAmountDetails.map(bet => {
                return <BetAmountDetail key={bet.id} name={bet.name} amount={bet.amount}/>
            })}
        </div>
    )
}
