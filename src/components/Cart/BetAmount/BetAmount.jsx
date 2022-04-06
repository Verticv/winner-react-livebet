import React from "react";

import refresh from "../../../imagesHold/refresh-button.png";
import close from "../../../imagesHold/action-close.png";
import increase from "../../../imagesHold/action-increase.png";




import "./BetAmount.scss";

function Amount({
    title = "보유금액",
    amount = "3,000,000",
    numberClasses = "",
    withInput = false,
}) {
    return (
        <div className="amount">
            <p className="text">{title}</p>
            {withInput ? (
                <div className="input-wrapper">
                    <button>
                        <img src={refresh} alt="" width="29" height="29" />
                    </button>
                    <div className="number">0</div>
                </div>
            ) : (
                <p className={`number ${numberClasses}`}>{amount}</p>
            )}
        </div>
    );
}

function AmountDetails({
    title = "최소 베팅금액",
    amount = "5,000",
    withLine = true,
}) {
    return (
        <div className="amount-details">
            <p className="text">{title}</p>
            <p className="number">{amount}</p>
            {withLine && <div className="line" />}
        </div>
    );
}

export default function BetAmount() {
    return (
        <div className="amount-wrapper">
            <Amount />
            <AmountDetails />
            <AmountDetails title="최대 베팅금액" amount="1,000,000" />
            <AmountDetails title="최대 당첨금액" amount="2,000,000" />
            <AmountDetails title="최대 베팅배당" amount="0.00" withLine={false} />
            <Amount title="배당률합계" amount="0.00" numberClasses="blue" />
            <Amount title="총적중금액" amount="0" numberClasses="green" />
            {/* <Amount title="베팅금액" amount="0" /> */}
            <Amount title="베팅금액" amount="0" withInput />
            <div className="amount-buttons">
                <button>5,000</button>
                <button>10,000</button>
                <button>50,000</button>
                <button>100,000</button>
                <button>1,000,000</button>
                <button className="active">최대</button>
            </div>
            <div className="action-buttons">
                <button>
                    <div className="img-wrapper"><img src={close} alt="" width="14" height="14" /></div>
                    <p>전체취소</p>
                    <div className="line" />
                </button>
                <button>
                    <div className="img-wrapper"><img src={increase} alt="" width="16" height="16" /></div>
                    <p>베팅하기</p>
                </button>
            </div>
        </div>
    );
}
