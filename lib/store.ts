import { configureStore } from "@reduxjs/toolkit";

import { inventoryReducer } from "./features/inventorySlice";
import { userReducer } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;