import { syncCartWithDB } from "@/utils/cart";
import { syncWishlistWithDB } from "@/utils/wishlist";
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
      if (!state.wishlist.find((item) => item._id === recipe._id)) {
        state.wishlist.push(recipe);
        if (email) {
          syncWishlistWithDB(state.wishlist, email);
        }
      }
    },
    removeFromWishlist: (state, action) => {
      const { email, id } = action.payload;
      state.wishlist = state.wishlist.filter((item) => item._id !== id);
      if (email) {
        syncCartWithDB(state.wishlist, email);
      }
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
