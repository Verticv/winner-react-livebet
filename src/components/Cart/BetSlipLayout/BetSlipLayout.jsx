import { singleOrMultiOptions } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";
import "./BetSlipLayout.scss";

export default function BetSlipLayout() {
    const singleOrMultiBet = useStore((state) => state.singleOrMultiBet);
    const changeSingleOrMultiBet = useStore((state) => state.changeSingleOrMultiBet);
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
                onClick={() => changeSingleOrMultiBet(singleOrMultiOptions.multi)}
                className={`select-layout-second-button ${
                    singleOrMultiBet === singleOrMultiOptions.multi ? "active" : ""
                }`}
            >
                <p>멀티</p>
            </button>
        </div>
    );
}
