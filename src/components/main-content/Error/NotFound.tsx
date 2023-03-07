import "./NotFound.scss";
import React from "react";
import { DictDataError } from "../../../helpers/typeDefinitions";
import { getCurrentWord } from "../../../helpers/functions";

interface propsT {
  data: DictDataError;
}

const NotFound: React.FC<propsT> = function ({ data }) {
  const currentWord = getCurrentWord();
  const { title, message, resolution } = data;

  return (
    <div className="not-found">
      <span>😕</span>
      <h5>{title}</h5>
      <h6>{`${message} ${resolution}`}</h6>
      <a href={`https://en.wikipedia.org/wiki/${currentWord}`} target="_blank">
        Search on Wikipedia.com
      </a>
    </div>
  );
};

export default NotFound;
