import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
