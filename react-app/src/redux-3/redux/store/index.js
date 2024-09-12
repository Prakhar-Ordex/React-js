import { configureStore } from "@reduxjs/toolkit"
import cartData from "../slices/cartSlice"

export const store = configureStore({
    reducer: {
        cart:cartData
    }
})