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

const savedTheme = localStorage.getItem("nightMode");

const initialState: stateT = {
  currentFont: JSON.parse(localStorage.getItem("selectedFont")!) || fonts[0],
  nightMode: savedTheme ? savedTheme === "true" : true,
};

const mainSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    changeFontTo: (state: stateT, { payload }: actionT) => {
      state.currentFont = payload;
      localStorage.setItem("selectedFont", JSON.stringify(payload));
    },
    switchTheme: (state: stateT) => {
      state.nightMode = !state.nightMode;
      localStorage.setItem("nightMode", state.nightMode + "");
    },
  },
});

export const { changeFontTo, switchTheme } = mainSlice.actions;

export const { reducer: mainReducer } = mainSlice;
