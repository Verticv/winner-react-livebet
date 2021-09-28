import React from 'react'

export default function BetSlipMyBet() {
    return (
        <div
            style={{
                height: "60px",
                width: "360px",
                background: "linear-gradient(90deg, #43434f 0, #2a2a34 100%)",
            }}
        >
            <div className="bg-holder-98">
                <div className="line-49"></div>
                <img
                    className="bg-46"
                    src={require("../imagesHold/bg_90.png").default}
                    alt=""
                    width="185"
                    height="1"
                />
                <img
                    className="bg-47"
                    src={require("../imagesHold/bg_91.png").default}
                    alt=""
                    width="1"
                    height="51"
                />
                <img
                    className="bg-48"
                    src={require("../imagesHold/bg_92.png").default}
                    alt=""
                    width="360"
                    height="28"
                />
                <img
                    className="bg-49"
                    src={require("../imagesHold/bg_59.png").default}
                    alt=""
                    width="360"
                    height="12"
                />
                <p className="text-172">
                    <span className="colorffffff">FC바로셀로나 </span>
                    <span className="colorc49f58">VS</span>
                    <span className="colorffffff"> 레알마드리드</span>
                    <br />
                    승무패(홈) - FC바로셀로나{" "}
                    <span className="color4195c1">5.01</span>
                </p>
            </div>
        </div>
    );
}
