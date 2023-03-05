import { createSlice } from "@reduxjs/toolkit";
import { FontT } from "../../helpers/typeDefinitions";

export interface stateT {
  currentFont: FontT;
}

export interface actionT {
  payload: FontT;
}

const initialState = {
  currentFont: JSON.parse(localStorage.getItem("selectedFont")!),
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
