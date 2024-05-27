import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");
const parsedCart = storedCart ? JSON.parse(storedCart) : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: parsedCart,
  reducers: {
    addToCart(state, action) {
      const { id, quantity, title, description, price, category, image } =
        action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += quantity;
      } else {
        state.push({
          id,
          quantity,
          title,
          description,
          price,
          category,
          image,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    clearCart() {
      localStorage.removeItem("cart");
      return [];
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const updatedCart = state.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
