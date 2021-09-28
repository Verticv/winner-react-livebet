import React from "react";
import BetAmountDetails from "./BetAmountDetails";
import BetAmountInput from "./BetAmountInput";

export default function BetAmount() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "35px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
                    padding: "0 8px",
                }}
            >
                <p className="text-144">보유금액</p>
                <p className="text-145">3,000,000</p>
            </div>
            <BetAmountDetails />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "35px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
                    padding: "0 8px",
                }}
            >
                <p className="text-154">배당률합계</p>
                <p className="text-155">0.00</p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "35px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
                    padding: "0 8px",
                }}
            >
                <p className="text-156">총적중금액</p>
                <p className="text-157">0</p>
            </div>
            <BetAmountInput />
        </div>
    );
}
