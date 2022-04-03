import BetNav from "components/BetNav/BetNav";
import BetSlip from "components/Cart/BetSlip";
import MultiView from "components/MultiView/MultiView";
import LeagueSelectPopup from "components/popups/LeagueSelectPopup";
import SingleView from "components/SingleView/SingleView";
import { singleOrMultiOptions } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";

export default function BetPage() {
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const isSingleView = singleOrMulti === singleOrMultiOptions.single;
    const isMultiView = singleOrMulti === singleOrMultiOptions.multi;
    return (
        <div style={{ display: "flex" }} className="bet-page-wrapper">
            <LeagueSelectPopup />
            <div className="bet-page-nav">
                <div>
                    <div>
                        <BetNav />
                    </div>
                </div>
                {isSingleView && <SingleView />}
                {isMultiView && <MultiView />}
            </div>
            <div className="bet-page-cart">
                <BetSlip />
            </div>
        </div>
    );
}
