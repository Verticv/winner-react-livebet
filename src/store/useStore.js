import create from "zustand";
import { createBetNavSlice } from "./createBetNavSlice";
import { createBetSlipBetSlice } from "./createBetSlipBetSlice";
import { createLeagueSlice } from "./createLeagueSlice";
import { createLiveCardSlice } from "./createLiveCardSlice";
import { createSingleMultiSlice } from "./createSingleMultiSlice";
import { createViewSelectSlice } from "./createViewSelectSlice";
import { createMultiViewCardSlice } from "./createMultiViewCardSlice";
import { createFavoriteMultiViewCardSlice } from "./createFavoriteMultiViewCardSlice";

const useStore = create((set, get) => ({
    ...createLeagueSlice(set, get),
    ...createViewSelectSlice(set, get),
    ...createLiveCardSlice(set, get),
    ...createSingleMultiSlice(set, get),
    ...createBetNavSlice(set, get),
    ...createBetSlipBetSlice(set, get),
    ...createMultiViewCardSlice(set, get),
    ...createFavoriteMultiViewCardSlice(set, get),
}));

export default useStore;
