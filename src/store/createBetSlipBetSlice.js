import produce from "immer";

export const createBetSlipBetSlice = (set, get) => ({
    betSlipBets: [],
    addBetSlipBet: (newBet) => {
        const newObj = {...newBet}
        newObj.id = Math.random();
        set(
            produce((state) => {
                state.betSlipBets.push(newObj);
            })
        );
    },
    removeBetSlipBet: (id) => {
        set(
            produce((state) => {
                const newArr = state.betSlipBets.filter((bet) => bet.id !== id)
                state.betSlipBets = newArr;
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
