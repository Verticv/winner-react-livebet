export const createLeagueSlice = (set, get) => ({
    selectedLeagues: [0, 1],
    changeLeagues: (league) => {
        set((state) => {
            state.selectedLeagues = league;
        });
    },
});
