import { API_URL } from "./variables";

export const getData = async function (word: string) {
  if (!word) return;
  const res = await fetch(API_URL + word);
  return await res.json();
};
