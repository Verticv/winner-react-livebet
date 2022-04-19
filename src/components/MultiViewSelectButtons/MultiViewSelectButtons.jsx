import React, { useState } from "react";
import useStore from "store/useStore";

import ViewSelectButton from "../common/ViewSelectButton/ViewSelectButton";

export default function MultiViewSelectButtons() {
    const [activeButton, setActiveButton] = useState(0);
    const cardsList = useStore((state) => state.multiViewLiveMatchCards);
    const addBetSlipBet = useStore((state) => state.addBetSlipBet);
    const removeAllBetSlipBet = useStore((state) => state.removeAllBetSlipBet);

    const views = [
        {
            id: 0,
            name: "전체추가",
            onclick: (event) => {
                event.stopPropagation();
                cardsList.forEach((matchCard) => {
                    addBetSlipBet(matchCard);
                });
            },
        },
        {
            id: 1,
            name: "전체삭제",
            onclick: (event) => {
                event.stopPropagation();
                removeAllBetSlipBet();
            },
        },
    ];
    return (
        <div className="view-select-button">
            {views.map((view) => {
                return (
                    <ViewSelectButton
                        key={view.id}
                        viewName={view.name}
                        id={view.id}
                        icon={view.icon}
                        onclick={view.onclick}
                        isMultiViewButton={true}
                        activeButton={activeButton}
                        setActiveButton={setActiveButton}
                    />
                );
            })}
        </div>
    );
}
