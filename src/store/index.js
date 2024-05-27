// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import productsReducer from "./slice/productsSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
