import { matchTypes } from "helpers/constants";
import React from "react";
import LiveMatchCard from "./LiveMatchCard";

export default function UpcomingMatches({ data = [], isFavorite = false }) {
    return (
        <>
            {isFavorite
                ? data
                      .filter(
                          (favoriteMatch) =>
                              favoriteMatch.type === matchTypes.upcoming
                      )
                      .map((upcomingMatchCard) => {
                          return (
                              <LiveMatchCard
                                  isRed={false}
                                  isFavoriteCard={false}
                                  key={upcomingMatchCard.id}
                                  matchCard={upcomingMatchCard}
                              />
                          );
                      })
                : data.map((upcomingMatchCard) => {
                      return (
                          <LiveMatchCard
                              isRed={false}
                              isFavoriteCard={false}
                              key={upcomingMatchCard.id}
                              matchCard={upcomingMatchCard}
                          />
                      );
                  })}
        </>
    );
}
