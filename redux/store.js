// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/user-slice";
// // import { persistStore } from "redux-persist";

// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   //   middleware: (getDefaultMiddleware) =>
//   //     getDefaultMiddleware({
//   //       serializableCheck: {
//   //         ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
//   //       },
//   //     }),
// });

// // export const persistorObject = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/user-slice.js";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
