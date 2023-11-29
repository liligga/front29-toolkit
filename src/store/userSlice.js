import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "",
            email: "",
            tel: ""
        },
    },
    reducers: {
        changeName: (state, action) => {
            state.user.name = action.payload;
        },
        changeUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;