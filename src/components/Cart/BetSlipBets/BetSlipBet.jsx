import React from "react";
import useStore from "store/useStore";
import { singleOrMultiOptions } from "helpers/constants";
import closeIco from "../../../imagesHold/x.png";
import downIco from "../../../imagesHold/arr.png";
import upIco from "../../../imagesHold/arr-up.png";



export default function BetSlipBet({ bet, index }) {
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const isSingleView = singleOrMulti === singleOrMultiOptions.single;
    const removeBetSlipBet = useStore((s) => s.removeBetSlipBet);
    const removeMultiViewBetSlipBet = useStore((s) => s.removeMultiViewBetSlipBet);

    console.log('bet', bet)
    return (
        <div className="cart-card-wrapper">
            <button className="close" onClick={() => isSingleView ? removeBetSlipBet(bet.id) : removeMultiViewBetSlipBet(bet.id)}>
                <img src={closeIco} alt="" width="14" height="14" />
            </button>
            <div className="title">
                FC바로셀로나 <span className="gold-1">&nbsp;VS&nbsp;</span> 레알마드리드
            </div>
            <div className="content gold">승무패(홈) - FC바로셀로나</div>
            <div className="number">
                <span className="strikethrough" >6.11</span>
                <span className="blue">{parseInt(index) % 2 === 0 ? 3.75 : 5.01}</span>
                <div>
                    <img
                        className="arr-7"
                        src={ parseInt(index) % 2 === 0 ? upIco : downIco   }
                        alt=""
                        width="13"
                        height="8"
                    />
                </div>
            </div>
        </div>
    );

}
