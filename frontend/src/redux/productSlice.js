import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getAll } = productSlice.actions;
export default productSlice.reducer;
