import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: localStorage.getItem('user') ,
    loginUser: localStorage.getItem('loginUser')
}

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
});

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            console.log('Failed to fetch users', action.error);
        },
        [fetchUsers.pending]: (state) => {
            state.loginUser = null;
        }
    }
})