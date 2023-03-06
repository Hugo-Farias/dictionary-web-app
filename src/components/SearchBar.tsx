import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeWordTo } from "../store/slices/wordSlice";
import { getCurrentWord } from "../helpers/functions";

interface propsT {
  font: string;
}

const SearchBar: React.FC<propsT> = function ({ font }) {
  const { currentWord } = getCurrentWord();
  const [value, setValue] = useState<string>(currentWord);
  console.log(value);
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [invalid, setInvalid] = useState<boolean>(false);

  const handleSubmit = function (e: any) {
    e.preventDefault();
    const { value } = searchRef.current!;
    if (!value) return setInvalid(true);

    setValue(currentWord);
    dispatch(changeWordTo(value));
  };

  return (
    <div className={`search-container`}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontFamily: font }}
          ref={searchRef}
          onInput={() => setInvalid(false)}
          type="text"
          className={`search-bar ${invalid ? "invalid" : ""}`}
          placeholder="Search for any word..."
          defaultValue={currentWord}
          max="10"
        />
        <button>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
      {invalid ? <p>Whoops, can't be empty...</p> : ""}
    </div>
  );
};

export default SearchBar;
