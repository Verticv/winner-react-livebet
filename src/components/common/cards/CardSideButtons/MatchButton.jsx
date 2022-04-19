import React from "react";

import SideButton from "./SideButton";

export default function MatchButton({
    data,
    setData,
    withHeader,
    matchCard,
    isSelected,
    isFavoriteCard,
    isRed,
    setIsActive,
    isActive,
    onClickHandler,
}) {
    return (
        <SideButton
            data={data}
            setData={setData}
            withHeader={withHeader}
            matchCard={matchCard}
            isActive={isActive}
            redCard={isRed}
            isFavoriteCard={isFavoriteCard}
            onClick={onClickHandler}
            isSelected={isSelected}
        />
    );
}
