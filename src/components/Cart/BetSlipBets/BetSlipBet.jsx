import React from "react";
import useStore from "store/useStore";
import closeIco from "../../../imagesHold/x.png";
import downIco from "../../../imagesHold/arr.png";
import upIco from "../../../imagesHold/arr-up.png";



export default function BetSlipBet({ bet }) {
    const removeBetSlipBet = useStore((s) => s.removeBetSlipBet);

    return (
        <div className="cart-card-wrapper">
            <button className="close" onClick={() => removeBetSlipBet(bet.id)}>
                <img src={closeIco} alt="" width="14" height="14" />
            </button>
            <div className="title">
                FC바로셀로나 <span className="gold-1">&nbsp;VS&nbsp;</span> 레알마드리드
            </div>
            <div className="content gold">승무패(홈) - FC바로셀로나</div>
            <div className="number">
                <span className="strikethrough" >6.11</span>
                <span className="blue">{bet?.tieKof}</span>
                <div>
                    <img
                        className="arr-7"
                        src={ parseInt(bet?.tieKof) % 2 === 0 ? upIco : downIco   }
                        alt=""
                        width="13"
                        height="8"
                    />
                </div>
            </div>
        </div>
    );

}
