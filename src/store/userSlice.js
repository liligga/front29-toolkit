import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            tel: ""
        },
        items: []
    },
    reducers: {
        changeName: (state, action) => {
            state.user.name = action.payload;
            state.items.push(action.payload)
        },
        changeUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;