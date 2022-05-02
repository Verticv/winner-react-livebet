import { singleOrMultiOptions } from "helpers/constants";

export const createSingleMultiSlice = (set, get) => ({
    singleOrMulti: singleOrMultiOptions.single,
    singleOrMultiBet: singleOrMultiOptions.single,
    changeSingleOrMulti: (view) => {
        set((state) => {
            state.singleOrMulti = view;
        });
    },
    changeSingleOrMultiBet: (view) => {
        set((state) => {
            state.singleOrMultiBet = view;
        });
    },
    hideMiddleComponent: false,
    removeMiddleComponent: () => {
        set((state) => {
            state.hideMiddleComponent = true;
        });
    },
    showMiddleComponent: () => {
        set((state) => {
            state.hideMiddleComponent = false;
        });
    },
});
