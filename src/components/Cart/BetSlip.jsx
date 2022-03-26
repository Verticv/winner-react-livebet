import React from 'react'
import BetAmount from './BetAmount/BetAmount';
import BetSlipBets from './BetSlipBets/BetSlipBets';
import BetSlipLayout from './BetSlipLayout/BetSlipLayout';
// import MyBets from './MyBets/MyBets';
import "./Cart.scss";

export default function BetSlip() {
    return (
        <div className="cart hide-scrollbar">
            <div className='cart-wrapper'>
                <div className='cart-header-wrapper'>
                    <div className="cart-header-content">
                        <div className="line"></div>
                        <div className="content">
                            <img
                                className="ico-30"
                                src={require("../../imagesHold/ico_3.png").default}
                                alt=""
                                width="24"
                                height="23"
                            />
                            <p className="text">betslip</p>
                            <div className="circle">
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BetSlipLayout />
                <BetSlipBets />
                <BetAmount />
            </div>
            {/* <MyBets /> */}
        </div>
    );
}
