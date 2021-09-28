import { viewTypes } from "helpers/constants";


export const createViewSelectSlice = (set, get) => ({
    selectedView: viewTypes.chronological,
    changeView: (view) => {
        set((state) => {
            state.selectedView = view;
        });
    },
});
