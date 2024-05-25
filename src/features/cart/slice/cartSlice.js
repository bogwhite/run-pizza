import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  cart: [],
};

// Cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      // quantity === 0 => delete item
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// Total quantity
const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);
// Total price
const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((total, item) => total + item.totalPrice, 0);
// Current quantity
const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
// Cart data
const getCart = (state) => state.cart.cart;

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export { getTotalCartQuantity, getTotalCartPrice, getCurrentQuantityById };
export { getCart };
export default cartSlice.reducer;
