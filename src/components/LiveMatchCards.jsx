import { matchTypes, navOptions } from "helpers/constants";
import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import React from "react";
import useStore from "store/useStore";
import LiveMatchCard from "./LiveMatchCard";

export default function LiveMatchCards() {
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    const favoriteMatches = useStore((state) => state.favoriteMatches);
    const selectedNav = useStore((state) => state.selectedNav);
    const matchCards = [
        {
            id: 0,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type:matchTypes.live
        },
        {
            id: 1,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type:matchTypes.live
        },
        {
            id: 2,
            league: "분데스리가",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type:matchTypes.live
        },
        {
            id: 3,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type:matchTypes.live
        },
        {
            id: 4,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTime: "후반전 35",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type:matchTypes.live
        },
    ];
    return (
        <>
            {selectedNav === navOptions.favorites
                ? favoriteMatches.filter(favoriteMatch => favoriteMatch.type === matchTypes.live).map((matchCard) => {
                      return (
                          <LiveMatchCard
                              key={matchCard.id}
                              matchCard={matchCard}
                          />
                      );
                  })
                : matchCards.map((matchCard) => {
                      return (
                          <LiveMatchCard
                              key={matchCard.id}
                              matchCard={matchCard}
                          />
                      );
                  })}
        </>
    );
}
