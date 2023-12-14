import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authAPI from "../api";


export const addTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (todo) => {
    const resp = await axios.post("https://dummyjson.com/auth/todos/add", {
      todo: todo,
      completed: false,
      userId: 1
    },
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return resp.data
  }
)

// добавление todo через ендпоинт,
// который требует аутентификацию
// но запрос сформрован при помощи axios.create
// и userId, который берется из другого слайса
// при помощи getState
export const addTodoThunkV2 = createAsyncThunk(
  "todos/addTodo",
  async (todo, { getState }) => {
    const resp = await authAPI.post("/todos/add", {
      todo: todo,
      completed: false,
      userId: getState().auth.user.id
    })
    return resp.data
  }
)


// получение todos через ендпоинт
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const resp = await axios.get("https://dummyjson.com/auth/todos", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });
    return resp.data
  }
)

// получение todos через ендпоинт
// который требует аутентификацию
// но запрос сформрован при помощи axios.create
export const fetchTodosV2 = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const resp = await authAPI.get("/todos");
    return resp.data
  }
)

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    // addTodo: (state, action) => {
    //     state.items.push({
    //         id: nanoid(),
    //         name: action.payload,
    //         completed: false
    //     });
    // },
    // removeTodo: (state, action) => {
    //     const index = state.items.findIndex((item) => item.id === action.payload);
    //     if (index > -1) {
    //         state.items.splice(index, 1);
    //     }
    // },
    // toggleTodo: (state, action) => {
    //     const index = state.items.findIndex((item) => item.id === action.payload);
    //     if (index > -1) {
    //         state.items[index].completed = !state.items[index].completed;
    //     }
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload.todos
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.log(action.error)
      })
  }
})

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer
