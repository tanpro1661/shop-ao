import { configureStore, combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";

// const rootReducer = combineReducers({
//   darkMode: darkModeReducer,
// });

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export default store;
