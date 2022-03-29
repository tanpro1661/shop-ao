import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { loading } = alertSlice.actions;
export default alertSlice.reducer;
