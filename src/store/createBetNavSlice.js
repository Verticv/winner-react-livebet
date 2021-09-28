export const createBetNavSlice = (set, get) => ({
    selectedNav: 2,
    changeSelectedNav: (navId) => {
        set((state) => {
            state.selectedNav = navId;
        });
    },
});
