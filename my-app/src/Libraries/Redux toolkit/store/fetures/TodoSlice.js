import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos:[],
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        },
        clearTodo: (state, action) => {
            state.todos = [];
        },
        editTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if(index!== -1) {
                state.todos[index] = action.payload;
            }
            else {
                console.error('Todo not found');
            }
        }
    },
})

console.log('actions',TodoSlice.initialState)

export const {addTodo, removeTodo, clearTodo,editTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
