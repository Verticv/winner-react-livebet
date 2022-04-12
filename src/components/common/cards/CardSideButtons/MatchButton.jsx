import React from "react";
// import useStore from "store/useStore";

import SideButton from "./SideButton"

export default function MatchButton({ data, setData, withHeader, matchCard, isSelected, isFavoriteCard, isRed, setIsActive, isActive }) {
    // const addBetSlipBet = useStore((s) => s.addBetSlipBet);

    const handlePlusButton = (event) => {
        event.stopPropagation();
        const updatedData = data.map(card => {
            const newCard = {...card}
            if (card.id === matchCard.id) {
                newCard.active = true;
                return newCard
            } else {
                newCard.active = false;
                return newCard
            }
        })
        setData(updatedData)
    };

    return <SideButton data={data} setData={setData} withHeader={withHeader} matchCard={matchCard} isActive={isActive} redCard={isRed} isFavoriteCard={isFavoriteCard} onClick={handlePlusButton} isSelected={isSelected} />;
}
