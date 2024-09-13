import { configureStore } from "@reduxjs/toolkit"
import Product from "../Slices/productSlice"
import User from "../Slices/userSlice"

export const store = configureStore({
    reducer: {
        products: Product,
        users: User
    }
})