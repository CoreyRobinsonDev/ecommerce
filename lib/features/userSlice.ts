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
      const { product, hasSale, selectedColor } = payload;

      if (state.cart.length === 0) {
        state.cart.push({ product, hasSale, selectedColor, count: 1 });
      } else {
        const found = state.cart.find((element) => element.product?.id === product?.id);
        if (found !== undefined) {
          found.count++;
        } else {
          state.cart.push({product, hasSale, selectedColor, count: 1})
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToWishlist: (state, {payload}) => {
      const { product, hasSale, selectedColor } = payload;

      if (state.wishlist.length === 0) {
        state.wishlist.push({ product, hasSale, selectedColor, count: 1 });
      } else {
        const found = state.wishlist.find((element) => element.product?.id === product?.id);
        if (found !== undefined) {
          found.count++;
        } else {
          state.wishlist.push({product, hasSale, selectedColor, count: 1})
        }
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    incrementCount: (state, { payload }) => {
      const { source, product } = payload;

      if (source === "cart") {
        const found = state.cart.find((element) => element.product?.id === product?.id);
        found.count++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const found = state.wishlist.find((element) => element.product?.id === product?.id);
        found.count++;
        localStorage.setItem("wishlist", JSON.stringify(state.cart));
      }
      
    },
    decrementCount: (state, { payload }) => {
      const { source, product } = payload;
     
      if (source === "cart") {
        const found = state.cart.find((element) => element.product?.id === product?.id);
        found.count--;
         
        if (found.count === 0) {
          const index = state.cart.indexOf(found);
          state.cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const found = state.wishlist.find((element) => element.product?.id === product?.id);
        found.count--;

        if (found.count === 0) {
          const index = state.wishlist.indexOf(found);
          state.wishlist.splice(index, 1);
        }
        localStorage.setItem("wishlist", JSON.stringify(state.cart));
      }
    },
    toggleVisibility: (state) => {
      state.isCartVisible = !state.isCartVisible;
    },
  }
});

export const userReducer = userSlice.reducer; 
export const { addToCart, addToWishlist, toggleVisibility, incrementCount, decrementCount } = userSlice.actions;