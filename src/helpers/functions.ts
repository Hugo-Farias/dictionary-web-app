import { API_URL } from "./variables";
import { useSelector } from "react-redux";
import { selectT } from "./typeDefinitions";
import { sliceT } from "../store/slices/mainSlice";
import { useLocation } from "react-router";

export const getData = async function (word: string) {
  if (!word) return;
  const res = await fetch(API_URL + word);
  return await res.json();
};

export const getCurrentWord = function () {
  const word = useLocation().pathname.slice(1).replaceAll("_", " ");
  return specialCharsCheck(word) ? "" : word;
};

export const getSlice = function () {
  return useSelector<selectT>((state) => state.main) as sliceT;
};

export const formatForUrl = function (word: string) {
  if (specialCharsCheck(word)) return "";
  return word.trim().replaceAll(" ", "_");
};

export const specialCharsCheck = function (query: string) {
  const specialChars = '!@#$%^&*()_+=][|}{;":/.,?><~\\';

  if (query.length === 1) return specialChars.includes(query.slice(-1));

  return query
    .split("")
    .some((value) => specialChars.includes(value.slice(-1)));
};
