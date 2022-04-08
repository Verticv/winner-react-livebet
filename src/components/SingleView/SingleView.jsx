import React from "react";

import { matchTypes } from "helpers/constants";
import MatchCards from "components/common/cards/MatchCards";
import LiveUpcomingMatchesCount from "../LiveUpcomingMatchesCount";
import useStore from "store/useStore";
import UpcomingMatches from "../common/cards/UpcomingMatches";
import MatchBets from "../common/MatchBets/MatchBets";

import "./SingleView.scss";

export default function SingleView() {
    const selectedNav = useStore((state) => state.selectedNav);
    console.log("selectedNavselectedNav", selectedNav);

    const matchCards = [
        {
            id: 0,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTimeText: "후반전",
            currentTimeNumber: "35",
            flag: "spain",
            team1stats: 5000,
            team2stats: 5000,
            team1Goals: 2,
            team2Goals: 0,
            team1WinKof: 5.01,
            tieKof: 4.05,
            team2WinKof: 3.75,
            type: matchTypes.live,
        },
        {
            id: 1,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "후반전",
            currentTimeNumber: "35",
            flag: "england",
            team1stats: 5000,
            team2stats: 5000,
            team1Goals: 2,
            team2Goals: 0,
            team1WinKof: 5.01,
            tieKof: 4.05,
            team2WinKof: 3.75,
            type: matchTypes.live,
        },
        {
            id: 2,
            league: "분데스리가",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            currentTimeText: "후반전",
            currentTimeNumber: "35",
            flag: "germany",
            team1stats: 5000,
            team2stats: 5000,
            team1Goals: 2,
            team2Goals: 0,
            team1WinKof: 5.01,
            tieKof: 4.05,
            team2WinKof: 3.75,
            type: matchTypes.live,
        },
        {
            id: 3,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTimeText: "후반전",
            currentTimeNumber: "35",
            flag: "spain",
            team1stats: 5000,
            team2stats: 5000,
            team1Goals: 2,
            team2Goals: 0,
            team1WinKof: 5.01,
            tieKof: 4.05,
            team2WinKof: 3.75,
            type: matchTypes.live,
        },
    ];

    const favoriteMatchCards = useStore((state) => state.favoriteMatches);

    const upcomingMatchCards = [
        {
            id: 10,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-06 21:00",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            // team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            // team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type: matchTypes.upcoming,
        },
        {
            id: 11,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-08 02:00",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            // team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            // team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type: matchTypes.upcoming,
        },
        {
            id: 12,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-09 12:00",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            // team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            // team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type: matchTypes.upcoming,
        },
        {
            id: 13,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-10 23:00",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            // team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            // team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type: matchTypes.upcoming,
        },
        {
            id: 14,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-11 07:00",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            // team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            // team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type: matchTypes.upcoming,
        },
        {
            id: 15,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-12 13:00",
            tieKof: (Math.random() * 5).toFixed(2),
            team1WinKof: (Math.random() * 5).toFixed(2),
            team2WinKof: (Math.random() * 5).toFixed(2),
            // team1stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            // team2stats: Math.floor(getRandomNumberInInterval(1000, 5000)),
            team1Goals: Math.floor(Math.random() * 5),
            team2Goals: Math.floor(Math.random() * 3),
            type: matchTypes.upcoming,
        },
    ];

    return (
        <div
            className="match-img-wrapper hide-scrollbar"
            style={{
                height: "954px",
                overflowY: "scroll",
                overflowX: "hidden",
                background: "black",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "681px",
                }}
            >
                <div>
                    <MatchCards data={matchCards} isRed={true} />
                </div>
                <LiveUpcomingMatchesCount />
                {selectedNav === 0 ? (
                    <>
                        <div>
                            <MatchCards
                                data={favoriteMatchCards}
                                isFavoriteCard={true}
                            />{" "}
                        </div>
                        <UpcomingMatches
                            data={favoriteMatchCards}
                            isFavorite={true}
                        />
                    </>
                ) : (
                    <UpcomingMatches data={upcomingMatchCards} />
                )}
            </div>
            <div>
                <div className="match-img" />
                <div className="match-bets-wrapper">
                    <MatchBets />
                </div>
            </div>
        </div>
    );
}
