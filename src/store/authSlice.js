import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


// dispatch(loginThunk({username: 'admin', password: '123'}))
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const resp = await axios.post('https://dummyjson.com/auth/login', credentials)
    return resp.data
  }
)

// dispatch(logoutThunk())
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async () => {
    const resp = await axios.post('https://dummyjson.com/auth/logout')
    return resp.data
  }
)


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload
        localStorage.setItem('token', action.payload.token)
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = null
        localStorage.removeItem('token')
      })
  }
})

export const authReducer = authSlice.reducer

