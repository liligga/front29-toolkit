import { createSlice, nanoid } from "@reduxjs/toolkit";


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nanoid(),
                name: action.payload,
                completed: false
            });
        },
        removeTodo: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index > -1) {
                state.items.splice(index, 1);
            }
        },
        toggleTodo: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index > -1) {
                state.items[index].completed = !state.items[index].completed;
            }
        }
    },
})

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer