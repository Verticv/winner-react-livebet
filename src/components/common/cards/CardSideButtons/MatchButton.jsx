import React from "react";
import useStore from "store/useStore";

import SideButton from "./SideButton"

export default function MatchButton({ matchCard, isSelected, isFavoriteCard, isRed }) {
    const addBetSlipBet = useStore((s) => s.addBetSlipBet);

    const handlePlusButton = (event) => {
        event.stopPropagation();
        addBetSlipBet(matchCard);
    };

    return <SideButton redCard={isRed} isFavoriteCard={isFavoriteCard} onClick={handlePlusButton} isSelected={isSelected} />;
}
