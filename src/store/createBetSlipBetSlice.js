import produce from "immer";

export const createBetSlipBetSlice = (set, get) => ({
    betSlipBets: [],
    addBetSlipBet: (newBet) => {
        set(
            produce((state) => {
                state.betSlipBets.push(newBet);
            })
        );
    },
    removeBetSlipBet: (id) => {
        set(
            produce((state) => {
                const index = state.betSlipBets.findIndex(item => item.id === id)
                state.betSlipBets.splice(index, 1);
            })
        );
    },
    removeAllBetSlipBet: () => {
        set(
            produce((state) => {
                state.betSlipBets = [];
            })
        );
    },
});
