import { createSlice } from "@reduxjs/toolkit";

type State = {
  cart: any[],
  wishlist: any[],
  isCartVisible: boolean
}

let initialState: State;

if (typeof window !== "undefined") {
  initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [],
    wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")!) : [],
    isCartVisible: false
  }
} else {
  initialState = {
    cart: [],
    wishlist: [],
    isCartVisible: false
  }
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.cart.length === 0) state.cart.push({ product: payload, count: 1 });
      
      for (const item of state.cart) {
        const found = state.cart.find(({ product }) => product?.id === payload?.id);
        if (found !== undefined) {
          found.count++;
        } else {
          state.cart.push({product: item, count: 1})
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToWishlist: (state, {payload}) => {
      if (state.wishlist.length === 0) state.wishlist.push({ product: payload, count: 1 });
      
      for (const item of state.wishlist) {
        const found = state.wishlist.find(({ product }) => product?.id === payload?.id);
        if (found !== undefined) {
          found.count++;
        } else {
          state.wishlist.push({product: item, count: 1})
        }
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    toggleVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible;
    }
  }
});

export const userReducer = userSlice.reducer; 
export const { addToCart, addToWishlist, toggleVisibility } = userSlice.actions;