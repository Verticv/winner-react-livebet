import React, { useState } from "react";
import useStore from "store/useStore";
import SideButton from "./SideButton";


export default function FavoriteButton({ matchCard, isSelected, data, setData }) {
    const [isActive, setIsActive] = useState(false);
    const favoriteMatches = useStore((state) => state.favoriteMatches);
    const addMatchToFavorites = useStore((state) => state.addMatchToFavorites);
    const removeMatchFromFavorites = useStore(
        (state) => state.removeMatchFromFavorites
    );
    const isFavorite =
        favoriteMatches.filter(
            (favoriteMatch) => favoriteMatch.id === matchCard.id
        ).length > 0;

    const buttonHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (isFavorite) removeMatchFromFavorites(matchCard.id);
        else addMatchToFavorites(matchCard);
    };

    const mouseEnterHandler = () => setIsActive(true);
    const mouseLeaveHandler = () => setIsActive(false);

    return (
        <SideButton
            data={data}
            setData={setData}
            onClick={buttonHandler}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            isSelected={isSelected}
            isActive={isActive}
            isFavoriteCard={true}
        />
    );
}
