import { createSlice } from "@reduxjs/toolkit";

const initialValues = { value: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialValues,
    reducers: {
        increase(state) {
            state.value++;
        },
        decrease(state) {
            state.value--;
        },
        reast(state) {
            state.value = 0;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        increaseRandoum(state, action) {
            state.value += action.payload;
        },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;