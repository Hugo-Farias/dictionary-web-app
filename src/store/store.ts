import { configureStore } from "@reduxjs/toolkit";
import { fontReducer } from "./slices/fontSlice";
import { wordReducer } from "./slices/wordSlice";

const store = configureStore({
  reducer: {
    words: wordReducer,
    fonts: fontReducer,
  },
});

export default store;
