import clsx from 'clsx';
import React from 'react'
import BetAmount from './BetAmount';
import BetSlipBets from './BetSlipBets';
import BetSlipLayout from './BetSlipLayout';
import MyBets from './MyBets';

export default function BetSlip() {
    return (
        <div style={{overflow: 'scroll', zIndex: 20}} className={clsx("col-16", "hide-scrollbar-bet-page")}>
            <div
                style={{
                    position: "relative",
                    width: "360px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        height: "40px",
                        width: "360px",
                        background:
                            "linear-gradient(90deg, #2c2c34 0, #24242a 100%)",
                    }}
                >
                    <div className="col-17">
                        <div className="line-45"></div>
                        <div className="row-27">
                            <img
                                className="ico-30"
                                src={require("../imagesHold/ico_3.png").default}
                                alt=""
                                width="24"
                                height="23"
                            />
                            <p className="betslip">betslip</p>
                            <div className="bg-holder-75">
                                <p className="text-137">2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BetSlipLayout />
                <BetSlipBets />
                <BetAmount />
            </div>
            <MyBets />
        </div>
    );
}
