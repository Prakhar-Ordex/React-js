import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

const initialState = {
  products: [],
  cart: [],
  total: 0,
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((x) => x.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      state.total += product.price;
      // state.cart = [...state.cart];
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId.id);
      state.total -= productId.price * productId.quantity;
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((x) => x.id === productId.id);
      if (product) {
        product.quantity++;
        state.total += product.price;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((x) => x.id === productId.id);
      if (product && product.quantity > 1) {
        state.total -= product.price;
        product.quantity--;
      } else {
        state.cart = state.cart.filter((x) => x.id !== productId.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
