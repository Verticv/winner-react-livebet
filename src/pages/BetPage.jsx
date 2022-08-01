import BetNav from "components/BetNav/BetNav";
import BetSlip from "components/Cart/BetSlip";
import MultiView from "components/MultiView/MultiView";
import LeagueSelectPopup from "components/popups/LeagueSelectPopup";
import SingleView from "components/SingleView/SingleView";
import { singleOrMultiOptions, viewTypes } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";
// import testing  from "../imagesHold/testing.png"
// import testing1  from "../imagesHold/testing1.png"

export default function BetPage() {
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const isSingleView = singleOrMulti === singleOrMultiOptions.single;
    const isMultiView = singleOrMulti === singleOrMultiOptions.multi;

    const { selectedView} = useStore((state) => state);
    return (
        <div style={{ display: "flex" }} className="bet-page-wrapper">
            <LeagueSelectPopup />
            <div style={{maxWidth: "1564px", minWidth: "1564px"}} className="bet-page-nav">
                <div style={{ position: 'sticky', top: '0', zIndex: '28'}}>
                    <div>
                        <BetNav />
                    </div>
                </div>
                {isSingleView && <SingleView />}
                {isMultiView && <MultiView />}
            </div>
            <div style={{marginLeft: '-4px'}} className={`bet-page-cart ${selectedView === viewTypes.selectLeague ? 'popup-open' : ''}`}>
                <BetSlip />
            </div>
            {/* <img src={testing} style={{position: 'fixed', top: "688.4px", left: "700px", zIndex: 100}} /> */}
            {/* <img src={testing1} style={{position: 'fixed', top: "220px", left: "700px", zIndex: 100}} /> */}
        </div>
    );
}
