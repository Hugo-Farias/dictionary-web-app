import { createSlice } from "@reduxjs/toolkit";

const fontState = {
  SansSerif: { id: 0, cssValue: "Inter", isActive: true },
  Serif: { id: 1, cssValue: "Lora", isActive: false },
  Mono: { id: 2, cssValue: "Inconsolata", isActive: false },
};

const fontSlice = createSlice({
  name: "myFeature",
  initialState: fontState,
  reducers: {
    logit: (state: object, action: object) => {
      console.log("test triggered");
    },
  },
});

export const { logit } = fontSlice.actions;

export const { actions, reducer } = fontSlice;
