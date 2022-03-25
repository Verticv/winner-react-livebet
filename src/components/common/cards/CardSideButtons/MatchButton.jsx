import React from "react";
import useStore from "store/useStore";

import SideButton from "./SideButton"

export default function MatchButton({ matchCard, isSelected }) {
    const addBetSlipBet = useStore((s) => s.addBetSlipBet);

    const handlePlusButton = (event) => {
        event.stopPropagation();
        addBetSlipBet(matchCard);
    };

    return <SideButton onClick={handlePlusButton} isSelected={isSelected} />;
}
