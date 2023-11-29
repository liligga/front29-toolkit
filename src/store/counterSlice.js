import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 100
    },
    reducers: {
        incrementCounter: (state, action) => {
            // Immer - позволяет писать мутирующие(изменяющие) экшны
            // state.value += 1;
            state.value += action.payload
        },
        decrementCounter: (state, action) => {
            // state.value -= 1;
            state.value -= action.payload
        }
    }
})

// export const { increment, decrement } = counterSlice.actions;
export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;