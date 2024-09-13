import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../constant/product";

const initialState = {
  products: Products,
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.products = state.products.map((item) =>
        item.id === newItem.id ? { ...item, quntity: item.quntity + 1 } : item
      );
      if (state.items.some((item) => item.id === newItem.id)) {
        state.items = state.items.map((item) =>
          item.id === newItem.id ? { ...item, quntity: item.quntity + 1 } : item
        );
      } else {
        const findData = state.products.find(item => item.id === newItem.id)
        state.items.push(findData);
      }

      state.total += newItem.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    removeItem: (state, action) => {
      if (action.payload.quntity > 1) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quntity: item.quntity - 1 }
            : item
        );
      } else {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.items = updatedItems;
      }
      state.total -= action.payload.price;
      state.products = state.products.map((item) =>
        item.id === action.payload.id
          ? { ...item, quntity: item.quntity - 1 }
          : item
      );
    },
  },
});
export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
