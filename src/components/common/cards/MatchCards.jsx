import React from "react";

import { matchTypes } from "helpers/constants";
import LiveMatchCard from "./LiveMatchCard";

import "./Cards.scss";

export default function MatchCards({ data, setData, isFavoriteCard = false, isRed = false }) {
    return data
        .filter((favoriteMatch) => favoriteMatch?.type === matchTypes?.live)
        .map((matchCard) => {
            return (
                <LiveMatchCard
                    setData={setData}
                    data={data}
                    key={matchCard.id}
                    matchCard={matchCard}
                    isFavoriteCard={isFavoriteCard}
                    isRed={isRed}
                />
            );
        });
}
