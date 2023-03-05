import "./NotFound.scss";
import React from "react";
import { DictDataError } from "../../../helpers/typeDefinitions";

interface propsT {
  data: DictDataError;
}

const NotFound: React.FC<propsT> = function ({ data }) {
  const { title, message, resolution } = data;

  return (
    <div className="not-found">
      <span>😕</span>
      <h5>{title}</h5>
      <h6>{message + resolution}</h6>
    </div>
  );
};

export default NotFound;
