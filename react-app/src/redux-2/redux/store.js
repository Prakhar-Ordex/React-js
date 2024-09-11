import { configureStore } from "@reduxjs/toolkit";
import Count from "./countSlice.js"

export const store = configureStore({
    reducer:Count
})