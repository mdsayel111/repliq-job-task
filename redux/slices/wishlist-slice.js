import { syncCartWithDB } from "@/utils/cart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { email, recipe } = action.payload;
      if (!state.wishlist.find((item) => item.idMeal === recipe.idMeal)) {
        state.wishlist.push(recipe);
        syncCartWithDB(state.wishlist, email);
      }
    },
    removeFromWishlist: (state, action) => {
      const { email, idMeal } = action.payload;
      state.wishlist = state.wishlist.filter((item) => item.idMeal !== idMeal);
      syncCartWithDB(state.wishlist, email);
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
