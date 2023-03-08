import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { useEffect, useRef, useState } from "react";
import {
  getCurrentWord,
  getSlice,
  specialCharsCheck,
} from "../helpers/functions";
import useGoTo from "../hooks/useGoTo";
import Invalid from "./search-bar/Invalid";

const SearchBar = function () {
  const searchRef = useRef<HTMLInputElement>(null);
  const { currentFont } = getSlice();
  const goto = useGoTo();
  const currentWord = getCurrentWord();
  const [invalid, setInvalid] = useState<boolean | string>(false);
  const [inputValue, setInputValue] = useState<string>(currentWord);

  if (searchRef.current) searchRef.current.focus();

  const invalidMsg = "Invalid charater...";

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!searchRef.current) return;

    const { value } = searchRef.current;

    if (!value) return setInvalid("Whoops, can't be empty...");

    goto(value);
  };

  const handleChange = function () {
    setInvalid(false);
    if (!searchRef.current) return;

    const { value } = searchRef.current;

    if (specialCharsCheck(value)) return setInvalid(invalidMsg);

    setInputValue(value);
  };

  useEffect(() => setInputValue(currentWord), [currentWord]);

  return (
    <div className={`search-container`}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontFamily: currentFont.cssValue }}
          ref={searchRef}
          onChange={handleChange}
          type="text"
          className={`search-bar ${invalid ? "invalid" : ""}`}
          placeholder="Search for any word..."
          maxLength={50}
          value={inputValue}
        />
        <button>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
      <Invalid invalid={invalid} />
    </div>
  );
};

export default SearchBar;
