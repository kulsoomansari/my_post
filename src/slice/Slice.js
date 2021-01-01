import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data, thunkAPI) =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    }
)
const slice = createSlice({
    name: 'posts',
    initialState: {
        post: ['buy milk']
    },
    extraReducers: {
    [fetchPost.fulfilled] : (state, action) =>{
        state.post = action.payload.slice(0, 10)
    }
    }
})
const postReducer = slice.reducer
export default postReducer