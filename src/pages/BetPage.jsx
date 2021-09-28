import BetNav from "components/BetNav";
import BetSlip from "components/BetSlip";
import MultiView from "components/MultiView";
import LeagueSelectPopup from "components/popups/LeagueSelectPopup";
import SelectLayoutButtons from "components/SelectLayoutButtons";
import SingleView from "components/SingleView";
import ViewSelectButtons from "components/ViewSelectButtons";
import { singleOrMultiOptions } from "helpers/constants";
import React from "react";
import useStore from "store/useStore";

// import football from "../imagesDump/bet/icon-ufc.png").default};
// import favorites from "../imagesDump/bet/icon-ufc.png").default};
// import web from "../imagesDump/bet/icon-ufc.png").default};
// import volleyball from "../imagesDump/bet/icon-ufc.png").default};
// import hockey from "../imagesDump/bet/icon-ufc.png").default};
// import placeholder from "../imagesDump/bet/icon-ufc.png").default};
import "../components/BetNavItem.css";

export default function BetPage() {
    const singleOrMulti = useStore((state) => state.singleOrMulti);
    const isSingleView = singleOrMulti === singleOrMultiOptions.single;
    const isMultiView = singleOrMulti === singleOrMultiOptions.multi;
    return (
        <div className="global_container_">
            <LeagueSelectPopup />
            <div className="col-32">
                <div
                    className="group-2"
                    style={{ zIndex: 10, backgroundColor: "black" }}
                >
                    <div className="col-24">
                        <div className="wrapper-28">
                            <BetNav />
                        </div>
                    </div>
                    <div className="btn">
                        <div className="row-28">
                            <SelectLayoutButtons />
                        </div>
                        <ViewSelectButtons />
                    </div>
                </div>
                {isSingleView && <SingleView />}
                {isMultiView && <MultiView />}
            </div>
            <BetSlip />
        </div>
    );
}
