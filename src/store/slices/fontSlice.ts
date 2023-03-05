import { createSlice } from "@reduxjs/toolkit";
import { FontT } from "../../helpers/typeDefinitions";
import fonts from "../../data/fonts.json";

export interface stateT {
  currentFont: FontT;
}

export interface actionT {
  payload: FontT;
}

// Load first font if local storage not found
const loadedFont =
  JSON.parse(localStorage.getItem("selectedFont")!) || fonts[0];

const initialState = {
  currentFont: loadedFont,
};

const fontSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    changeFontTo: (state: stateT, { payload }: actionT) => {
      state.currentFont = payload;
    },
  },
});

export const { changeFontTo } = fontSlice.actions;

export const { reducer: fontReducer } = fontSlice;
