import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        //this is where we will declare all of our important actions.
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload;
        },
    },
});

// this is how we export the important actions of out newly created counterSlice reducer.
export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;

// this is how we export the complete reducer that we have created.
export default counterSlice.reducer;
