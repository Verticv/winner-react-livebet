import React from "react";
// import BetAmountDetails from "./BetAmountDetails/BetAmountDetails";
// import BetAmountInput from "./BetAmountInput/BetAmountInput";
import "./BetAmount.scss";

function Amount({title = "보유금액", amount = "3,000,000", numberClasses = ""}) {
    return (
        <div className="amount">
            <p className="text">{title}</p>
            <p className={`number ${numberClasses}`}>{amount}</p>
        </div>
    );
}

function AmountDetails({title = "최소 베팅금액", amount = "5,000", withLine = true}) {
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
            <AmountDetails title="최대 베팅금액" />
            <AmountDetails title="최대 당첨금액" />
            <AmountDetails title="최대 베팅배당" withLine={false} />
            <Amount title="배당률합계" amount="0.00" numberClasses="blue" />
            <Amount title="총적중금액" amount="0" numberClasses="green" />
            <Amount title="베팅금액" amount="0" />


        </div>
    );

    // return (
    //     <div
    //         style={{
    //             display: "flex",
    //             justifyContent: "flex-start",
    //             flexDirection: "column",
    //         }}
    //     >
    //         <div
    //             style={{
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //                 alignItems: "center",
    //                 height: "35px",
    //                 width: "360px",
    //                 background:
    //                     "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
    //                 padding: "0 8px",
    //             }}
    //         >
    //             <p className="text-144">보유금액</p>
    //             <p className="text-145">3,000,000</p>
    //         </div>
    //         {/* <BetAmountDetails /> */}
    //         <div
    //             style={{
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //                 alignItems: "center",
    //                 height: "35px",
    //                 width: "360px",
    //                 background:
    //                     "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
    //                 padding: "0 8px",
    //             }}
    //         >
    //             <p className="text-154">배당률합계</p>
    //             <p className="text-155">0.00</p>
    //         </div>
    //         <div
    //             style={{
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //                 alignItems: "center",
    //                 height: "35px",
    //                 width: "360px",
    //                 background:
    //                     "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
    //                 padding: "0 8px",
    //             }}
    //         >
    //             <p className="text-156">총적중금액</p>
    //             <p className="text-157">0</p>
    //         </div>
    //         {/* <BetAmountInput /> */}
    //     </div>
    // );
}
