import React from "react";

import "./CardFooter.scss";

export default function CardFooter() {
    // const isFirstItemRed = true;
    // const add = () => {}
    // const row1number1 = 1
    // const row1number2 = 2
    // const row1number3 = 3
    // const rightText = "rightText"
    // const leftText = "leftText"

    return (
        <div className="card-footer-wrapper">
            {/* <div className="left">
                <div className="skew1">
                    <div className="skew"><a href="#">Left</a></div>
                </div>
            </div>
            <div className="middle">
                ---- 4.05 ----
            </div> */}
            <div className="left">
                <p className="text">맨체스터유나이티드</p>
                <div className="number red-arrow"><div className="number-value">5.01</div></div>
            </div>
            <div className="middle">
                <div className="middle-content">
                    4.05
                </div>             
            </div>
            <div className="right">
                <div className="number blue-arrow"><div className="number-value">5.01</div></div>
                <p className="text">맨체스터유나이티드</p>
            </div>

            {/* <div className={`bet-button-container ${isFirstItemRed ? 'first-section-red' : ''}`}>
            <MidSecBtn isFirstItemRed={isFirstItemRed} add={add} number1={row1number1} number2={row1number2} number3={row1number3} rightText={rightText} leftText={leftText} />
          </div> */}
        </div>
    );
}
