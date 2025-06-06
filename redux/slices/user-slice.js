// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: localStorage.getItem("user").name,
//   email: localStorage.getItem("user").email,
// };

// export const counterSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;

// redux/slices/user-slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "dasdasd",
  email: "sdasd",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

