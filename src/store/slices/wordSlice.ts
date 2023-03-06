import { createSlice } from "@reduxjs/toolkit";

export interface stateT {
  currentWord: string;
}

export interface actionT {
  payload: string;
}

// Word from  url
const searchParams = new URLSearchParams(document.location.search);
const loadedWord = searchParams.values().next().value || "";

const initialState = {
  currentWord: loadedWord,
};

const wordSlice = createSlice({
  name: "myFeature",
  initialState,
  reducers: {
    changeWordTo: (state: stateT, { payload }: actionT) => {
      history.replaceState("", payload, `?=${payload}`);
      state.currentWord = payload;
    },
  },
});

export const { changeWordTo } = wordSlice.actions;

export const { reducer: wordReducer } = wordSlice;
