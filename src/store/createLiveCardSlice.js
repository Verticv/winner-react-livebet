import produce from "immer";

export const createLiveCardSlice = (set, get) => ({
    selectedCardId: 0,
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
    favoriteMatches: [],
    addMatchToFavorites: (match) => {
        set(
            produce((draft) => {
                draft.favoriteMatches.push(match);
            })
        );
    },
    removeMatchFromFavorites: (matchId) => {
        set(
            produce((draft) => {
                const matchIndex = draft.favoriteMatches.findIndex(
                    (el) => el.id === matchId
                );
                draft.favoriteMatches.splice(matchIndex, 1);
            })
        );
    },
});
