export const createBetNavSlice = (set, get) => ({
    selectedNav: 1,
    changeSelectedNav: (navId) => {
        set((state) => {
            state.selectedNav = navId;
        });
    },
});
