import React from "react";
import ball from "../../../imagesHold/image_70.png";
import corner from "../../../imagesHold/c.png";
import p from "../../../imagesHold/p.png";

export default function CardSubHeader({ league = "라리가" }) {
    return (
        <div className="multi-card-sub-header-content">
            <div className="left">
                후반전 <span>15</span>분
            </div>

            <div className="right">
                <img src={corner} alt="" width="18" height="18" />
                <div className="yellow-box"></div>
                <div className="red-box"></div>
                <img src={p} alt="" />
                <img
                    className="ball"
                    src={ball}
                    alt=""
                    width="18"
                    height="18"
                />
            </div>
        </div>
    );
}
