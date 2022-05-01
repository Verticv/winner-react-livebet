import produce from "immer";

import { matchTypes } from "helpers/constants";

export const createLiveCardSlice = (set, get) => ({
    selectedCardId: 1,
    changeSelectedCardId: (id) => {
        set((state) => (state.selectedCardId = id));
    },
    playingMatchId: null,
    changePlayingMatchId: (id) => {
        const { playingMatchId } = get();
        if (playingMatchId === id) {
            set((state) => (state.playingMatchId = null));
        } else {
            set((state) => (state.playingMatchId = id));
        }
    },
    favoriteMatches: [
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
            type:matchTypes.live,
            active: false,
            withHeader: true,
            isPlayButtonActive: true,
            marginBottom: '10px',
            isActiveStar: true,
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
            isActiveStar: true,
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
            isActiveStar: true,
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
            isActiveStar: true,
        },

        {
            id: 4,
            league: "라리가",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            startDateAndTime: "02-06 21:00",
            currentTimeText: "경기시간",
            flag: "spain",
            type:matchTypes.upcoming,
            isRightArrowActive: false,
            isLeftArrowActive: false,
            active: false,
            withHeader: true,
            marginBottom: '10px',
            isActiveStar: true,
        },
        {
            id: 5,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            startDateAndTime: "02-06 21:00",
            currentTimeText: "경기시간",
            flag: "england",
            type:matchTypes.upcoming,
            isRightArrowActive: false,
            isLeftArrowActive: false,
            active: false,
            withHeader: true,
            marginBottom: '10px',
            isActiveStar: true,
        },
        {
            id: 6,
            league: "프리미어리그",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            startDateAndTime: "02-06 21:00",
            currentTimeText: "경기시간",
            flag: "england",
            type:matchTypes.upcoming,
            isRightArrowActive: false,
            isLeftArrowActive: false,
            active: false,
            withHeader: true,
            marginBottom: '10px',
            isActiveStar: true,
        },
    ],
    addMatchToFavorites: (match) => {
        set(
            produce((draft) => {
                draft.favoriteMatches.push(match);
            })
        );
    },
    updateFavoritesMatches: (newFavoriteMatchesData) => {
        set(
            produce((draft) => {
                draft.favoriteMatches = newFavoriteMatchesData;
            })
        );
    },
    removeMatchFromFavorites: (matchId) => {
        console.log('matchImatchIdmatchIdmatchIdd', matchId)
        set(
            produce((draft) => {
                const matchIndex = draft.favoriteMatches.findIndex(
                    (el) => el.id === matchId
                );
                console.log('matchIndexmatchIndex', matchIndex)
                draft.favoriteMatches.splice(matchIndex, 1);
            })
        );
    },
});
