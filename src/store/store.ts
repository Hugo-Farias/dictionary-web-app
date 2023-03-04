import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/mainSlice";

const store = configureStore({
  reducer: {
    main: reducer,
  },
});

export default store;
