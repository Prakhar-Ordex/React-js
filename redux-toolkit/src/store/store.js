import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../fetures/todo/todoSlice.js"

 export const store = configureStore({
    reducer:todoReducer
})