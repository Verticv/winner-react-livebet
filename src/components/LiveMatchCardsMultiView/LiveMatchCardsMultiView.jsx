import React from "react";

import useStore from "store/useStore";

import LiveMatchCardMultiView from "components/LiveMatchCardsMultiView/LiveMatchCardMultiView";

export default function LiveMatchCardsMultiView() {
    const cardsList = useStore((state) => state.multiViewLiveMatchCards) || [];
    const length = cardsList.length;
    return (
        <>
            {length ? (
                <div className="multi-view-cards-wrapper">
                    {cardsList.map((data) => (
                        <LiveMatchCardMultiView {...data} />
                    ))}
                </div>
            ) : (
                <div
                    style={{
                        background: "#222226",
                        color: "#717172",
                        fontSize: "13px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    className="multi-view-cards-wrapper"
                >
                    경기정보가 없습니다
                </div>
            )}
        </>
    );
}
