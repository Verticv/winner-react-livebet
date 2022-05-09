import produce from "immer";

export const createFavoriteMultiViewCardSlice = (set, get) => ({
    favoriteMultiViewLiveMatchCards: [
        {
            id: 201,
            title: "후반전 35분",
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            team1Result1: "0",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "0",
            team2Result2: "0",
            team2Goal: "0",
        },
        {
            id: 202,
            title: "후반전 15분",
            team1: "맨체스터유나이티드",
            team2: "리버풀",
            team1Result1: "1",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "5",
            team2Result2: "0",
            team2Goal: "0",
        },
        {
            id: 203,
            title: "후반전 15분",
            team1: "맨시티",
            team2: "첼시",
            team1Result1: "1",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "0",
            team2Result2: "0",
            team2Goal: "0",
        },
        {
            id: 204,
            title: "후반전 11분",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            team1Result1: "1",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "0",
            team2Result2: "0",
            team2Goal: "0",
        },
        {
            id: 205,
            title: "후반전 11분",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            team1Result1: "1",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "0",
            team2Result2: "0",
            team2Goal: "0",
        },
        {
            id: 206,
            title: "후반전 11분",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            team1Result1: "1",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "0",
            team2Result2: "0",
            team2Goal: "0",
        },
        {
            id: 207,
            title: "후반전 11분",
            team1: "바이헤른뮌헨",
            team2: "프랑크푸르트",
            team1Result1: "1",
            team1Result2: "0",
            team1Goal: "1",
            team2Result1: "0",
            team2Result2: "0",
            team2Goal: "0",
        },
    ],
    addNewFavoriteMatch: (match) => {
        set(
            produce((draft) => {
                draft.favoriteMultiViewLiveMatchCards.push(match);
            })
        );
    },
    updateFavoriteMultiViewMatches: (newMatchesData) => {
        set(
            produce((draft) => {
                draft.favoriteMultiViewLiveMatchCards = newMatchesData;
            })
        );
    },
    removeFavoriteMatchFromMultiViewMatches: (matchId) => {
        set(
            produce((draft) => {
                const matchIndex =
                    draft.favoriteMultiViewLiveMatchCards.findIndex(
                        (el) => el.id === matchId
                    );
                draft.favoriteMultiViewLiveMatchCards.splice(matchIndex, 1);
            })
        );
    },
    favoriteMultiViewLiveMatchResultsCards: [
        {
            id: 101,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 102,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 103,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 104,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 105,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 106,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
    ],
    addFavoriteNewMatchResult: (match) => {
        set(
            produce((draft) => {
                draft.favoriteMultiViewLiveMatchResultsCards.push(match);
            })
        );
    },
    updateFavoriteMultiViewMatchesResults: (newMatchesData) => {
        console.log(
            "newMatchesDatanewMatchesDatanewMatchesDatanewMatchesDatanewMatchesDatanewMatchesData",
            newMatchesData
        );
        set(
            produce((draft) => {
                draft.favoriteMultiViewLiveMatchResultsCards.length = 0;
                draft.favoriteMultiViewLiveMatchResultsCards = newMatchesData;
            })
        );
    },
    removeFavoriteMatchFromMultiViewMatchesResults: (matchId) => {
        set(
            produce((draft) => {
                const newMatchesData =
                    draft.favoriteMultiViewLiveMatchResultsCards.map((el) => {
                        if (el.id === matchId) {
                            el.isEmpty = true;
                            return el;
                        }
                        return el;
                    });
                draft.favoriteMultiViewLiveMatchResultsCards = newMatchesData;
            })
        );
    },
});
