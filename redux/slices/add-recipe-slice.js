import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    title: "",
    description: "",
    category: "",
  },
  ingredients: [],
  steps: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setIngredients: (state, action) => {
      console.log(action.payload, "action.payload");
      state.ingredients = action.payload;
    },
    setSteps: (state, action) => {
      state.steps = action.payload;
    },
  },
});

export const { setInfo, setIngredients, setSteps, setImages, setCoverImage } =
  recipeSlice.actions;
export default recipeSlice.reducer;
