import { singleOrMultiOptions } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";
import "./BetSlipLayout.scss";

export default function BetSlipLayout() {
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const changeSingleOrMulti = useStore((state) => state.changeSingleOrMulti);

    return (
        <div className="cart-select-layout">
            <button
                onClick={() => changeSingleOrMulti(singleOrMultiOptions.single)}
                className={`select-layout-first-button ${
                    singleOrMulti === singleOrMultiOptions.single
                        ? "active"
                        : ""
                }`}
            >
                <p>싱글</p>
            </button>
            <button
                onClick={() => changeSingleOrMulti(singleOrMultiOptions.multi)}
                className={`select-layout-second-button ${
                    singleOrMulti === singleOrMultiOptions.multi ? "active" : ""
                }`}
            >
                <p>멀티</p>
            </button>
        </div>
    );
}
