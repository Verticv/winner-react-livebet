import React, { useEffect, useState } from "react";

import { format } from 'date-fns'
import { ko } from "date-fns/locale"
import useStore from "store/useStore";
import { singleOrMultiOptions } from "helpers/constants";

import BetAmount from "./BetAmount/BetAmount";
import BetSlipBets from "./BetSlipBets/BetSlipBets";
import BetSlipLayout from "./BetSlipLayout/BetSlipLayout";
import checksIcon from "../../imagesHold/checks.png";
import cartIcon from "../../imagesHold/ico_3.png";
import refresh from "../../imagesHold/checks-refresh.png";
import seeAllIcon from "../../imagesHold/see-all-ico.png";
import clock from "../../imagesHold/clock.png";

import "./Cart.scss";

function MyBetCard({
    team1 = "FC바로셀로나",
    team2 = "레알마드리드",
    text1 = "승무패(홈)",
    text2 = "FC바로셀로나",
    result = "5.01",
}) {
    return (
        <div className="my-bet-card">
            <p className="title">
                {team1} <span>&nbsp;VS&nbsp;</span> {team2}
            </p>
            <p className="result">
                {text1} - {text2} <span>{result}</span>{" "}
            </p>
        </div>
    );
}

// TODO: this should be in the common components
function AmountDetails({
    title = "최소 베팅금액",
    amount = "5,000",
    withLine = true,
    numberColor = "#e5b877",
    extraText = "",
}) {
    return (
        <div className="amount-details">
            <p className="text">{title}</p>
            <p style={{ color: numberColor ? "white" : "" }} className="number">
                {" "}
                {extraText && (
                    <p
                        style={{
                            color: "white",
                            fontFamily: "NotoSansCJKkr-Regular",
                        }}
                    >
                        {extraText}
                    </p>
                )}{" "}
                <span style={{ color: numberColor }}>{amount}</span>
            </p>
            {withLine && <div className="line" />}
        </div>
    );
}

export default function BetSlip() {
    const selectedNav = useStore((state) => state.selectedNav);

    const changeSingleOrMultiBet = useStore((state) => state.changeSingleOrMultiBet);
        const betSlipBets = useStore((state) => state.betSlipBets);

    useEffect(() =>  {
        console.log('betSlipBets.length', betSlipBets.length)
        if (betSlipBets.length > 1) {
            changeSingleOrMultiBet(singleOrMultiOptions.multi)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [betSlipBets])

    const dateFormat = "yyyy-MM-dd"
    const dateFormat1 = "H:mm:ss"

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="cart hide-scrollbar">
            <div className="cart-wrapper">
                <div className="cart-header-wrapper">
                    <div className="cart-header-content">
                        <div className="line"></div>
                        <div className="content">
                            <div>
                                <img src={cartIcon} alt="" width="24" height="23" />
                                <p className="text">betslip</p>
                                <div className="circle">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="clock">
                                <p className="date">{format(time, dateFormat, { locale : ko })}</p>
                                <p className="time">
                                    <div>
                                    <img
                                    src={clock}
                                    alt=""
                                    width="11"
                                    height="11"
                                />
                                    </div>
                                    {format(time, dateFormat1, { locale : ko })}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BetSlipLayout />
                <BetSlipBets />
                <BetAmount />
                <div className="my-bets-wrapper">
                    <div className="bets-content">
                        <div className="line"></div>
                        <div className="content">
                            <div>
                                <div>
                                    <img
                                        src={checksIcon}
                                        alt=""
                                        width="24"
                                        height="14"
                                    />
                                </div>
                                <p className="text">나의 베팅내역</p>
                            </div>
                            <div className="refresh">
                                <button>
                                    <p className="number">10</p>
                                    <div className="image-wrapper">
                                        <img
                                            src={refresh}
                                            alt=""
                                            width="23"
                                            height="19"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {selectedNav !== 3 ? (
                    <>
                        <div className="id-wrapper">
                            <div className="left">
                                ID : <span> 186123533</span>
                            </div>
                            <div className="right">2020-05-16 03:45:11</div>
                        </div>
                        <MyBetCard />
                        <MyBetCard
                            team1="맨체스터유나이티드"
                            team2="리버풀"
                            text1="승무패(원정)"
                            text2="리버풀"
                            result="3.75"
                        />
                        <AmountDetails
                            title="배당률"
                            amount="6.10"
                            numberColor="#4195c1"
                        />
                        <AmountDetails title="베팅금액" amount="30,000" />
                        <AmountDetails
                            title="적중금액"
                            extraText="베팅대기중"
                            amount="183,000"
                            numberColor="#00ff05"
                        />
                    </>
                ) : (
                    <div className="my-bet-card-multi">보류 중인 베팅이 없습니다.</div>
                )}

                <div className="see-all-button">
                    <button>
                        <div>
                            <img
                                src={seeAllIcon}
                                alt=""
                                width="15"
                                height="14"
                            />
                        </div>
                        <p>전체보기</p>
                    </button>
                </div>
            </div>
            {/* <MyBets /> */}
        </div>
    );
}
