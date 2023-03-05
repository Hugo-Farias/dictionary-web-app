import { createSlice } from "@reduxjs/toolkit";
import { FontT } from "../../helpers/typeDefinitions";

export interface stateT {
  currentFont: FontT;
}

export interface actionT {
  payload: FontT;
}

const initialState = {
  currentFont: { id: 0, name: "Sans Serif", cssValue: "Inter" },
};

const fontSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    changeFontTo: (state: stateT, action: actionT) => {
      state.currentFont = action.payload;
    },
  },
});

export const { changeFontTo } = fontSlice.actions;

export const { actions, reducer: fontReducer } = fontSlice;
