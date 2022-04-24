import React from "react";

import useStore from "store/useStore";

import LiveMatchCardMultiView from "components/LiveMatchCardsMultiView/LiveMatchCardMultiView";

export default function LiveMatchCardsMultiView() {
    const cardsList = useStore((state) => state.multiViewLiveMatchCards);
    console.log('>>>>>>>>>>> cardsList',cardsList)
    return (
        <div className="multi-view-cards-wrapper">
            {cardsList.map((data) => <LiveMatchCardMultiView {...data} />)}
        </div>
    );
}
