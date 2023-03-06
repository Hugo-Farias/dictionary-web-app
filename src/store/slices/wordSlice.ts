import { createSlice } from "@reduxjs/toolkit";

export interface stateT {
  currentWord: string;
}

export interface actionT {
  payload: string;
}

// Word from  url
const searchParams = new URLSearchParams(document.location.search);

const initialState = {
  currentWord: searchParams.values().next().value || "",
};

const wordSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    changeWordTo: (state: stateT, { payload }: actionT) => {
      state.currentWord = payload;
      history.pushState("", payload, `?=${payload}`);
    },
  },
});

export const { changeWordTo } = wordSlice.actions;

export const { reducer: wordReducer } = wordSlice;
