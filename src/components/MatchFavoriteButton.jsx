import React from 'react'
import useStore from 'store/useStore';

export default function MatchFavoriteButton({ matchCard, }) {
        const favoriteMatches = useStore((state) => state.favoriteMatches);
        const addMatchToFavorites = useStore(
            (state) => state.addMatchToFavorites
        );
        const removeMatchFromFavorites = useStore(
            (state) => state.removeMatchFromFavorites
    );
        const isFavorite =
            favoriteMatches.filter(
                (favoriteMatch) => favoriteMatch.id === matchCard.id
            ).length > 0;
    return (
        <button
            onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (isFavorite) removeMatchFromFavorites(matchCard.id);
                else addMatchToFavorites(matchCard);
            }}
        >
            <img
                className="layer-15"
                src={
                    isFavorite
                        ? require("../imagesHold/image_63.png").default
                        : require("../imagesHold/image_73.png").default
                }
                alt=""
                width="18"
                height="16"
            />
        </button>
    );
}
