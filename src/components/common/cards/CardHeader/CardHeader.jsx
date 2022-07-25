import React from "react";

import ball from "../../../../imagesHold/image_70.png";
import corner from "../../../../imagesHold/c.png";
import spain from "../../../../imagesHold/image_61.png";
import england from "../../../../imagesHold/image_81.png";
import germany from "../../../../imagesHold/image_94.png";
import p from "../../../../imagesHold/p.png";

import "./CardHeader.scss";

export default function CardHeader({
    isSelected,
    isRed = true,
    league = "라리가",
    isActive,
    flag = "spain",
    setIsActive,
    id,
    matchCard,
    clickHandler = () => {},
    activeCardHandler = () => {}
}) {
    let flagPath = spain;

    if (flag === "england") {
        flagPath = england;
    } else if (flag === "germany") {
        flagPath = germany;
    }

    const mouseEnterHandler = () => setIsActive(true);
    const mouseLeaveHandler = () => setIsActive(false);

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onClick={(e) => {
                console.log('clicked!', id)
                // clickHandler(id)
                activeCardHandler(e, matchCard)
            } }
            className={`card-header-wrapper ${
                isSelected || isActive ? "active" : ""
            } ${isRed ? "" : "blue"}`}
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
                    <img src={flagPath} alt="" width="29" height="18" />
                    <p className="text">{league.length > 27 ? `${league.slice(0,27)}...` : league}</p>
                </div>
                {isRed && (
                    <div className="right">
                        <img src={corner} alt="" width="18" height="18" />
                        <div className="yellow-box"></div>
                        <div className="red-box"></div>
                        <img style={{marginLeft: '1px'}} src={p} alt="" />
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
            {(isSelected || isActive) && isRed ? (
                <div className="line bottom-line"></div>
            ) : (
                <></>
            )}
        </div>
    );
}
