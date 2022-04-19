import React from "react";

import LiveMatchCardsMultiView from "../LiveMatchCardsMultiView/LiveMatchCardsMultiView";
import MultiViewMatchCards from "components/MultiViewMatchCard/MultiViewMatchCard"

import "./MultiView.scss"

export default function MultiView() {
    return (
        <div>
            <div className="main-multi-group-2">
                <div className="multi-view-container">
                    <div className="multi-view-scroll">
                        <LiveMatchCardsMultiView />
                        <MultiViewMatchCards />
                    </div>
                </div>
            </div>
        </div>
    );
}
