import "./NotFound.scss";
import React from "react";
import { DictDataError, selectWordsT } from "../../../helpers/typeDefinitions";
import { useSelector } from "react-redux";

interface propsT {
  data: DictDataError;
}

const NotFound: React.FC<propsT> = function ({ data }) {
  const { currentWord } = useSelector<selectWordsT>((s) => s.words) as {
    currentWord: string;
  };
  const { title, message, resolution } = data;

  return (
    <div className="not-found">
      <span>😕</span>
      <h5>{title}</h5>
      <h6>{message + resolution}</h6>
      <a href={`https://en.wikipedia.org/wiki/${currentWord}`} target="_blank">
        Search on Wikipedia.com
      </a>
    </div>
  );
};

export default NotFound;
