import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await axios.get("https://dummyjson.com/posts?limit=15")
        return response.data
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.error = null
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload.posts
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export const postsReducer = postsSlice.reducer