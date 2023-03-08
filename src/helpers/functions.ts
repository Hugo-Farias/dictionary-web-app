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
  return useLocation().pathname.slice(1).replaceAll("_", " ");
};

export const getSlice = function () {
  return useSelector<selectT>((state) => state.main) as sliceT;
};

export const formatForUrl = function (word: string) {
  return word.trim().replaceAll(" ", "_");
};
