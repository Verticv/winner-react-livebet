import React from "react";

import ball from "../../../../imagesHold/image_70.png";
import spain from "../../../../imagesHold/image_61.png";
import corner from "../../../../imagesHold/c.png";
import p from "../../../../imagesHold/p.png";

import "./CardHeader.scss";

export default function CardHeader({
    isSelected,
    isRed = true,
    league = "라리가",
    withMatchResults = true,
    isActive,
    setIsActive
}) {
    

    const mouseEnterHandler = () => setIsActive(true);
    const mouseLeaveHandler = () => setIsActive(false);

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className={`card-header-wrapper ${isSelected || isActive ? "active" : ""} ${
                isRed ? "" : "blue"
            }`}
        >
            <div className="line"></div>
            <div className="card-header-content">
                <div className="left">
                    <img
                        className="ball"
                        src={ball}
                        alt=""
                        width="18"
                        height="18"
                    />
                    <img src={spain} alt="" width="29" height="18" />
                    <p className="text">{league}</p>
                </div>
                {isRed && (
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
                )}
            </div>
            {isSelected || isActive ? (
                <div className="line bottom-line"></div>
            ) : (
                <></>
            )}
        </div>
    );
}
