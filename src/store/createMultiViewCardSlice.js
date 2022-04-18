import produce from "immer";

export const createMultiViewCardSlice = (set, get) => ({
    multiViewLiveMatchCards: [
        {
            id: 0,
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
            id: 1,
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
            id: 2,
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
            id: 3,
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
    addNewMatch: (match) => {
        set(
            produce((draft) => {
                draft.multiViewLiveMatchCards.push(match);
            })
        );
    },
    updateMultiViewMatches: (newMatchesData) => {
        set(
            produce((draft) => {
                draft.multiViewLiveMatchCards = newMatchesData;
            })
        );
    },
    removeMatchFromMultiViewMatches: (matchId) => {
        set(
            produce((draft) => {
                const matchIndex = draft.multiViewLiveMatchCards.findIndex(
                    (el) => el.id === matchId
                );
                draft.multiViewLiveMatchCards.splice(matchIndex, 1);
            })
        );
    },
    multiViewLiveMatchResultsCards: [
        {
            id: 0,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: false,
        },
        {
            id: 1,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: false,
        },
        {
            id: 2,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: false,
        },
        {
            id: 3,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 4,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
        {
            id: 5,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
            isEmpty: true,
        },
    ],
    addNewMatchResult: (match) => {
        set(
            produce((draft) => {
                draft.multiViewLiveMatchResultsCards.push(match);
            })
        );
    },
    updateMultiViewMatchesResults: (newMatchesData) => {
        console.log('newMatchesDatanewMatchesDatanewMatchesDatanewMatchesDatanewMatchesDatanewMatchesData', newMatchesData)
        set(
            produce((draft) => {
                draft.multiViewLiveMatchResultsCards = newMatchesData;
            })
        );
    },
    removeMatchFromMultiViewMatchesResults: (matchId) => {
        set(
            produce((draft) => {
                const newMatchesData =
                    draft.multiViewLiveMatchResultsCards.map(
                        (el) => {
                            if (el.id === matchId) {
                                el.isEmpty = true
                                return el
                            }
                            return el
                        }
                    );
                draft.multiViewLiveMatchResultsCards = newMatchesData;
            })
        );
    },
});
