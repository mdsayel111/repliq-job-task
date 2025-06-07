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
      if (!state.carts.find((item) => item._id === recipe._id)) {
        state.carts.push(recipe);
        if (email) {
          syncCartWithDB(state.carts, email);
        }
      }
    },
    removeFromCart: (state, action) => {
      const { id, email } = action.payload;
      state.carts = state.carts.filter((item) => item._id !== id);
      console.log(email);
      if (email) {
        syncCartWithDB(state.carts, email);
      }
    },
    setCart: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
