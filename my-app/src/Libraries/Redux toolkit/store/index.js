import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./fetures/TodoSlice";

export const store = configureStore({
    reducer:
    {
        todo: TodoSlice,
        // other reducers...
    }
})