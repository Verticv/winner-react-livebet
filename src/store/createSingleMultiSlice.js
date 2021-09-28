import { singleOrMultiOptions } from "helpers/constants";

export const createSingleMultiSlice = (set, get) => ({
    singleOrMulti: singleOrMultiOptions.single,
    changeSingleOrMulti: (view) => {
        set((state) => {
            state.singleOrMulti = view;
        });
    },
});
