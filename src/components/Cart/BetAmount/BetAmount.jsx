import React, { useState } from "react";
import useStore from "store/useStore";

import refresh from "../../../imagesHold/refresh-button.png";
import close from "../../../imagesHold/action-close.png";
import increase from "../../../imagesHold/action-increase.png";

import "./BetAmount.scss";

function Amount({
    title = "보유금액",
    amount = "3,000,000",
    numberClasses = "",
    withInput = false,
    inputValue,
    setInputValue,
    boldNumber = false,
}) {
    const onChangeHandler = (e) => {
        const newValue = e.target.value.replaceAll(",", "");
        const formattedValue = Number(newValue).toLocaleString(undefined, {
            minimumFractionDigits: 0,
        });
        setInputValue(formattedValue);
    };

    console.log("typeof inputValue", typeof inputValue);
    return (
        <div className="amount">
            <p className="text">{title}</p>
            {withInput ? (
                <div className="input-wrapper">
                    <button onClick={() => setInputValue(0)}>
                        <img src={refresh} alt="" width="29" height="29" />
                    </button>
                    <input
                        type="text"
                        className="number"
                        onChange={onChangeHandler}
                        value={inputValue}
                    />
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
    const [inputValue, setInputValue] = useState("0");
    const removeAllBetSlipBet = useStore((s) => s.removeAllBetSlipBet);

    return (
        <div className="amount-wrapper">
            <Amount
                boldNumber
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <AmountDetails />
            <AmountDetails title="최대 베팅금액" amount="1,000,000" />
            <AmountDetails title="최대 당첨금액" amount="2,000,000" />
            <AmountDetails
                title="최대 베팅배당"
                amount="0.00"
                withLine={false}
            />
            <Amount
                inputValue={inputValue}
                setInputValue={setInputValue}
                title="배당률합계"
                amount="0.00"
                numberClasses="blue"
            />
            <Amount
                inputValue={inputValue}
                setInputValue={setInputValue}
                title="총적중금액"
                amount="0"
                numberClasses="green"
            />
            {/* <Amount title="베팅금액" amount="0" /> */}
            <Amount
                inputValue={inputValue}
                setInputValue={setInputValue}
                title="베팅금액"
                amount="0"
                withInput
            />
            <div className="amount-buttons">
                <button
                    onClick={() =>
                        setInputValue((prev) => {
                            const newValue = prev?.replaceAll(",", "");
                            const formattedValue = Number(
                                Number(newValue) + 5000
                            ).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                            });
                            return formattedValue;
                        })
                    }
                >
                    5,000
                </button>
                <button onClick={() => setInputValue((prev) => {
                            const newValue = prev?.replaceAll(",", "");
                            const formattedValue = Number(
                                Number(newValue) + 10000
                            ).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                            });
                            return formattedValue;
                        })}>
                    10,000
                </button>
                <button onClick={() => setInputValue((prev) => {
                            const newValue = prev?.replaceAll(",", "");
                            const formattedValue = Number(
                                Number(newValue) + 50000
                            ).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                            });
                            return formattedValue;
                        })}>
                    50,000
                </button>
                <button onClick={() => setInputValue((prev) => {
                            const newValue = prev?.replaceAll(",", "");
                            const formattedValue = Number(
                                Number(newValue) + 100000
                            ).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                            });
                            return formattedValue;
                        })}>
                    100,000
                </button>
                <button onClick={() => setInputValue((prev) => {
                            const newValue = prev?.replaceAll(",", "");
                            const formattedValue = Number(
                                Number(newValue) + 1000000
                            ).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                            });
                            return formattedValue;
                        })}>
                    1,000,000
                </button>
                <button className="active">최대</button>
            </div>
            <div className="action-buttons">
                <button onClick={removeAllBetSlipBet}>
                    <div className="img-wrapper">
                        <img src={close} alt="" width="14" height="14" />
                    </div>
                    <p>전체취소</p>
                    <div className="line" />
                </button>
                <button>
                    <div className="img-wrapper">
                        <img src={increase} alt="" width="16" height="16" />
                    </div>
                    <p>베팅하기</p>
                </button>
            </div>
        </div>
    );
}
