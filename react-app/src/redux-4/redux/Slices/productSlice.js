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
  loading: false
};

const calculateTotal = (cart) => {
  return cart
    .reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0)
    .toFixed(2);
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
      state.total = calculateTotal(state.cart);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((product) => product.id !== productId.id);
      state.total = calculateTotal(state.cart);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((x) => x.id === productId.id);
      if (product) {
        product.quantity++;
        state.total = calculateTotal(state.cart);
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cart.find((x) => x.id === productId.id);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        state.cart = state.cart.filter((x) => x.id !== productId.id);
      }
      state.total = calculateTotal(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    }
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
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = productSlice.actions;

export default productSlice.reducer;
