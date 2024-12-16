import { createSelector } from "reselect";

const selectCounterState = (state) => state.counter;

export const selectCounterValue = createSelector(
    [selectCounterState],
    (counterState) => counterState.value
);

export const selectCounterVisibility = createSelector(
    [selectCounterState],
    (counterState) => counterState.showCounter
);