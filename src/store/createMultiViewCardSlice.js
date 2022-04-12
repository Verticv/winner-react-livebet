import produce from "immer";

export const createMultiViewCardSlice = (set, get) => ({
    multiViewLiveMatchCards: [
        {
            id: 0,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
        },
        {
            id: 1,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
        },
        {
            id: 2,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
        },
        {
            id: 3,
            team1: "FC바로셀로나",
            team2: "레알마드리드",
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
