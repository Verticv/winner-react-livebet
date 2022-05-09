import { singleOrMultiOptions } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";
import "./BetSlipLayout.scss";

export default function BetSlipLayout() {
    const singleOrMultiBet = useStore((state) => state.singleOrMultiBet);
    const changeSingleOrMultiBet = useStore((state) => state.changeSingleOrMultiBet);
    const betSlipBets = useStore((s) => s.betSlipBets);
    return (
        <div className="cart-select-layout">
            <button
                onClick={() => changeSingleOrMultiBet(singleOrMultiOptions.single)}
                className={`select-layout-first-button ${
                    singleOrMultiBet === singleOrMultiOptions.single
                        ? "active"
                        : ""
                }`}
            >
                <p>싱글</p>
            </button>
            <button
                onClick={() => {
                    if (betSlipBets.length !== 1 ) {
                        changeSingleOrMultiBet(singleOrMultiOptions.multi)
                    }
                }}
                className={`select-layout-second-button ${
                    singleOrMultiBet === singleOrMultiOptions.multi ? "active" : ""
                }`}
            >
                <p>멀티</p>
            </button>
        </div>
    );
}
