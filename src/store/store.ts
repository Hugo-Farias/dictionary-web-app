import { configureStore } from "@reduxjs/toolkit";
import { fontReducer } from "./slices/fontSlice";

console.log(typeof fontReducer);

export interface storeTypes {
  reducer: () => {};
}

const store = configureStore({
  reducer: {
    fonts: fontReducer,
  },
});

export default store;
