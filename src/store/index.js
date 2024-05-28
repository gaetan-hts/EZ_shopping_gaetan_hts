import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import productsReducer from "./slice/productsSlice";
import cartReducer from "./slice/cartSlice";

const saveUserToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("user/")) {
    const state = store.getState().user;
    localStorage.setItem("user", JSON.stringify(state));
  }
  return result;
};

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveUserToLocalStorage),
});

export default store;
