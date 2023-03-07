import { createSlice } from "@reduxjs/toolkit";
import { FontT } from "../../helpers/typeDefinitions";
import fonts from "../../data/fonts.json";

export interface stateT {
  currentFont: FontT;
  nightMode: boolean;
}

export interface actionT {
  payload: FontT;
}

// Load first font if local storage not found
const loadedFont =
  JSON.parse(localStorage.getItem("selectedFont")!) || fonts[0];

const initialState: stateT = {
  currentFont: loadedFont,
  nightMode: true,
};

const mainSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    changeFontTo: (state: stateT, { payload }: actionT) => {
      state.currentFont = payload;
    },
    switchTheme: (state: stateT) => {
      state.nightMode = !state.nightMode;
    },
  },
});

export const { changeFontTo, switchTheme } = mainSlice.actions;

export const { reducer: mainReducer } = mainSlice;
