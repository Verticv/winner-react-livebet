import { singleOrMultiOptions } from "helpers/constants";

export const createSingleMultiSlice = (set, get) => ({
    singleOrMulti: singleOrMultiOptions.single,
    changeSingleOrMulti: (view) => {
        set((state) => {
            state.singleOrMulti = view;
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
