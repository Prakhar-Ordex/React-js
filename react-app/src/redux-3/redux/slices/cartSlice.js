import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      if (state.items.some((item) => item.id === newItem.id)) {
        state.items = state.items.map((item) =>
          item.id === newItem.id ? { ...item, quntity: item.quntity + 1 } : item
        );
        state.total += newItem.price;
      } else {
        state.items.push(newItem);
        state.total += newItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    removeItem: (state, action) => {
      if (action.payload.quntity > 1) {
        console.log("first");
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
    },
  },
});
export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
