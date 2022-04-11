export const createLeagueSlice = (set, get) => ({
    selectedLeagues: [],
    changeLeagues: (league) => {
        set((state) => {
            state.selectedLeagues = league;
        });
    },
});
