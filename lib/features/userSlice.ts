import { createSlice } from "@reduxjs/toolkit";

type State = {
  cart: any[],
  wishlist: any[]
}

let initialState: State;

if (typeof window !== "undefined") {
  initialState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [],
    wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")!) : [],
  }
} else {
  initialState = {
    cart: [],
    wishlist: []
  }
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      for (const item of state.cart) {
        if (item.id === payload.id) return;
      }

      state.cart.push(payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToWishlist: (state, {payload}) => {
      for (const item of state.wishlist) {
        if (item.id === payload.id) return;
      }
      
      state.wishlist.push(payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    }
  }
});

export const userReducer = userSlice.reducer; 
export const { addToCart, addToWishlist } = userSlice.actions;