import { syncCartWithDB } from "@/utils/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { email, recipe } = action.payload;
      if (!state.carts.find((item) => item.idMeal === recipe.idMeal)) {
        state.carts.push(recipe);
        syncCartWithDB(state.carts, email);
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter(
        (item) => item.idMeal !== action.payload.idMeal
      );
    },
    setCart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
