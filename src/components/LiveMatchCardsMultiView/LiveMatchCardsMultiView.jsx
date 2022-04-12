import React from "react";

import useStore from "store/useStore";

import LiveMatchCardMultiView from "components/LiveMatchCardsMultiView/LiveMatchCardMultiView";

export default function LiveMatchCardsMultiView() {
    const cardsList = useStore((state) => state.multiViewLiveMatchCards);
    return (
        <div className="multi-view-cards-wrapper">
            {cardsList.map(({id, team1, team2}) => <LiveMatchCardMultiView id={id} team1={team1} team2={team2} />)}
        </div>
    );
}
