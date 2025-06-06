import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user-slice.js";
import recipeReducer from "./slices/add-recipe-slice.js";
import cartReducer from "./slices/cart-slice.js";
import wishlistReducer from "./slices/wishlist-slice.js";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUseReducer = persistReducer(persistConfig, userReducer);
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedWishlistReducer = persistReducer(
  persistConfig,
  wishlistReducer
);
export const store = configureStore({
  reducer: {
    user: persistedUseReducer,
    recipe: recipeReducer,
    cart: persistedCartReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
