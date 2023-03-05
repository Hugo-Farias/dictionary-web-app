import { configureStore } from "@reduxjs/toolkit";
import { fontReducer } from "./slices/fontSlice";

const store = configureStore({
  reducer: {
    fonts: fontReducer,
  },
});

export default store;
