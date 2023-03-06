import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWordTo } from "../store/slices/wordSlice";
import { selectWordsT } from "../helpers/typeDefinitions";

interface propsT {
  font: string;
}

const SearchBar: React.FC<propsT> = function ({ font }) {
  const { currentWord } = useSelector<selectWordsT>((s) => s.words) as {
    currentWord: string;
  };
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const [invalid, setInvalid] = useState<any>(null);

  const handleSubmit = function (e: any) {
    e.preventDefault();
    const { value } = searchRef.current!;
    if (!value) return setInvalid(true);
    dispatch(changeWordTo(value));
  };

  return (
    <div className={`search-container`}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontFamily: font }}
          ref={searchRef}
          onInput={() => setInvalid(null)}
          type="text"
          className={`search-bar ${invalid ? "invalid" : ""}`}
          placeholder="Search for any word..."
          defaultValue={currentWord}
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
