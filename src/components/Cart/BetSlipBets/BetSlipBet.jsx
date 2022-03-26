import React from "react";
import useStore from "store/useStore";
import closeIco from "../../../imagesHold/x.png";

export default function BetSlipBet({ bet }) {
    const removeBetSlipBet = useStore((s) => s.removeBetSlipBet);

    return (
        <div className="cart-card-wrapper">
            <button className="close" onClick={() => removeBetSlipBet(bet.id)}>
                <img src={closeIco} alt="" width="14" height="14" />
            </button>
            <div className="title">
                FC바로셀로나 <span className="gold">VS</span> 레알마드리드
            </div>
            <div className="content gold">승무패(홈) - FC바로셀로나</div>
            <div className="number">
                <span className="strikethrough" >6.11</span>
                <span className="blue">5.01</span>
                <div>
                    <img
                        className="arr-7"
                        src={require("../../../imagesHold/arr.png").default}
                        alt=""
                        width="13"
                        height="8"
                    />
                </div>
            </div>
        </div>
    );

    // return (
    //     <div
    //         style={{
    //             height: "81px",
    //             width: "360px",
    //             background: "linear-gradient(90deg, #43434f 0, #2a2a34 100%)",
    //         }}
    //     >
    //         <div
    //             style={{
    //                 height: "81px",
    //                 left: "0",
    //                 position: "absolute",
    //                 width: "360px",
    //             }}
    //         >
    //             <div className="line-46"></div>
    //             <img
    //                 className="bg-14"
    //                 src={require("../../../imagesHold/bg_56.png").default}
    //                 alt=""
    //                 width="187"
    //                 height="1"
    //             />
    //             <img
    //                 className="bg-15"
    //                 src={require("../../../imagesHold/bg_57.png").default}
    //                 alt=""
    //                 width="1"
    //                 height="69"
    //             />
    //             <div className="bg-holder-81">
    //                 <img
    //                     className="bg-16"
    //                     src={require("../../../imagesHold/bg_59.png").default}
    //                     alt=""
    //                     width="348"
    //                     height="7"
    //                 />
    //             </div>
    //             <div className="group-66">
    //                 <div className="wrapper-22">
    //                     <p className="text-140">
    //                         <span className="colorffffff">FC바로셀로나 </span>
    //                         <span className="colorc49f58">VS</span>
    //                         <span className="colorffffff"> 레알마드리드</span>
    //                         <br />
    //                         승무패(홈) - FC바로셀로나
    //                         <br />
    //                         <span className="color909090">6.11</span>
    //                     </p>
    //                     <p className="text-141">5.01</p>
    //                     <img
    //                         className="arr-7"
    //                         src={require("../../../imagesHold/arr.png").default}
    //                         alt=""
    //                         width="13"
    //                         height="8"
    //                     />
    //                     <div className="bg-17"></div>
    //                 </div>
    //                 <button onClick={() => removeBetSlipBet(bet.id)}>
    //                     <img
    //                         className="x"
    //                         src={require("../../../imagesHold/x.png").default}
    //                         alt=""
    //                         width="14"
    //                         height="14"
    //                     />
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );
}
