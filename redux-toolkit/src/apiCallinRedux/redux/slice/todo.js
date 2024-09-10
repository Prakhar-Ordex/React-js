import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchData', async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        return response.json();
   
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        isLoading: false,
        data: null,
        isError:false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            console.log("Error: " + state + " " + action.payload)
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export default todoSlice.reducer;