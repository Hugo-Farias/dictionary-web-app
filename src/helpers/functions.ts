import { API_URL } from "./variables";
import { useSelector } from "react-redux";
import { FontT, selectFontsT, selectWordsT } from "./typeDefinitions";

export const getData = async function (word: string) {
  if (!word) return;
  const res = await fetch(API_URL + word);
  return await res.json();
};

export const getCurrentWord = function () {
  return useSelector<selectWordsT>((state) => state.words) as {
    currentWord: string;
  };
};

export const getCurrentFont = function () {
  return useSelector<selectFontsT>((state) => state.fonts) as {
    currentFont: FontT;
  };
};
