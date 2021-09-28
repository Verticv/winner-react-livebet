import create from "zustand";
import { createBetNavSlice } from "./createBetNavSlice";
import { createBetSlipBetSlice } from "./createBetSlipBetSlice";
import { createLeagueSlice } from "./createLeagueSlice";
import { createLiveCardSlice } from "./createLiveCardSlice";
import { createSingleMultiSlice } from "./createSingleMultiSlice";
import { createViewSelectSlice } from "./createViewSelectSlice";

const useStore = create((set, get) => ({
    ...createLeagueSlice(set, get),
    ...createViewSelectSlice(set, get),
    ...createLiveCardSlice(set, get),
    ...createSingleMultiSlice(set, get),
    ...createBetNavSlice(set, get),
    ...createBetSlipBetSlice(set, get),
}));

export default useStore

