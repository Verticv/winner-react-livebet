import React, { useState } from "react";

import { matchTypes } from "helpers/constants";
import MatchCards from "components/common/cards/MatchCards";
import LiveUpcomingMatchesCount from "components/LiveUpcomingMatchesCount/LiveUpcomingMatchesCount";
import useStore from "store/useStore";
import UpcomingMatches from "../common/cards/UpcomingMatches";
import MatchBets from "../common/MatchBets/MatchBets";

import "./SingleView.scss";

export default function SingleView() {
    const selectedNav = useStore((state) => state.selectedNav);
    const hideMiddleComponent = useStore((state) => state.hideMiddleComponent);

    const matchCardsData = [
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
            isRightArrowActive: true,
            isLeftArrowActive: true,
            type: matchTypes.live,
            active: true,
            withHeader: true,
            isPlayButtonActive: true,
            marginBottom: '10px',
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            isPlayButtonActive: true,
            marginBottom: '10px',
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            marginBottom: '10px',
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            marginBottom: '10px',
        },
    ];
    const [matchCards, setMatchCards] = useState(matchCardsData)


    const soccerCardsData = [
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
            isRightArrowActive: true,
            isLeftArrowActive: true,
            type: matchTypes.live,
            active: true,
            withHeader: true,
            isPlayButtonActive: true,
            marginBottom: '10px',
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            isPlayButtonActive: true,
            marginBottom: '10px',
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
            tieKof: 5.00,
            team2WinKof: 3.75,
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            marginBottom: '10px',
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            marginBottom: '1px',
        },
        {
            id: 4,
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: false,
            marginBottom: '1px',
        },
        {
            id: 5,
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: false,
            marginBottom: '10px',
        },
        {
            id: 6,
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
            isRightArrowActive: false,
            isLeftArrowActive: false,
            type: matchTypes.live,
            active: false,
            withHeader: true,
            marginBottom: '10px',
        },
    ];
    const [soccerCards, setSoccerCards] = useState(soccerCardsData)


    const favoriteMatchCardsData = useStore((state) => state.favoriteMatches);
    const [favoriteMatchCards, setFavoriteMatchCards] = useState(favoriteMatchCardsData)
    console.log('favoriteMatchCards', favoriteMatchCards)

    

    const upcomingMatchCardsData = [
        {
            id: 1,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "spain",
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 2,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "england",
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 3,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "england",
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
    ];
    const [upcomingMatchCards, setUpcomingMatchCards] = useState(upcomingMatchCardsData)

    const basketBallUpcomingMatchCardsData = [
        {
            id: 1,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "spain",
            isRightArrowActive: true,
            isLeftArrowActive: true,
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 2,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "england",
            isRightArrowActive: true,
            isLeftArrowActive: true,
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 3,
            league: "분데스리가",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "germany",
            isRightArrowActive: true,
            isLeftArrowActive: true,
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 4,
            league: "라리가",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "spain",
            isRightArrowActive: true,
            isLeftArrowActive: true,
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '1px',
        },
        {
            id: 5,
            league: "라리가",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "spain",
            type: matchTypes.upcoming,
            withHeader: false,
            marginBottom: '1px',
        },
        {
            id: 6,
            league: "라리가",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "spain",
            type: matchTypes.upcoming,
            withHeader: false,
            marginBottom: '10px',
        },
        {
            id: 7,
            league: "라리가",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "spain",
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 8,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "england",
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
        {
            id: 9,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            currentTimeText: "경기시간",
            startDateAndTime: "02-06 21:00",
            flag: "england",
            type: matchTypes.upcoming,
            withHeader: true,
            marginBottom: '10px',
        },
    ];

    const [basketBallUpcomingMatchCards, setBasketBallUpcomingMatchCards] = useState(basketBallUpcomingMatchCardsData)


    return (
        <div
            className="match-img-wrapper hide-scrollbar"
            style={{
                overflowY: "scroll",
                overflowX: "hidden",
                background: "black",
            }}
        >
            <div
                className="aa-scroll"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "681px",
                    height : `${(window.innerHeight - 252)}px`,
                    // overflowY: 'scroll',
                    // overflowX: 'hidden'
                }}
            >
                {selectedNav === 0 ? (
                    <>
                        <div>
                            <MatchCards
                                data={favoriteMatchCards}
                                setData={setFavoriteMatchCards}
                                isFavoriteCard={true}
                                isRed={true}
                            />{" "}
                        </div>
                        <LiveUpcomingMatchesCount />
                        <UpcomingMatches
                            data={favoriteMatchCards}
                            setData={setFavoriteMatchCards}
                            isFavorite={true}
                        />
                    </>
                ) : selectedNav === 2 ? (
                    <>
                        <div>
                            <MatchCards setData={setSoccerCards} data={soccerCards} isRed={true} />
                        </div>
                    </>
                ): selectedNav === 3 ? (
                    <>
                        <UpcomingMatches setData={setBasketBallUpcomingMatchCards} data={basketBallUpcomingMatchCards} />
                    </>
                ): (
                    <>
                        <div>
                            <MatchCards setData={setMatchCards} data={matchCards} isRed={true} />
                        </div>
                        <LiveUpcomingMatchesCount />
                        <UpcomingMatches setData={setUpcomingMatchCards} data={upcomingMatchCards} />
                    </>
                )}
            </div>
            <div className="match-scroll" style={{
                height : `${(window.innerHeight - 252)}px`
            }}>
                <div className="match-img" />
                {selectedNav !== 3 && !hideMiddleComponent && (
                    <div className="match-bets-wrapper">
                        <MatchBets />
                    </div>
                )}
            </div>
        </div>
    );
}
