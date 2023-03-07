import "./MeaningsNyms.scss";
import React from "react";
import { Link } from "react-router-dom";
import { formatForUrl } from "../../helpers/functions";
import Separator from "../utilities/Separator";

type propsT = {
  list: string[];
  name: string;
};

const MeaningsNyms = function ({ name, list }: propsT) {
  if (list.length < 1) return null;

  const JSX = list.map((v, i) => (
    <Link to={formatForUrl(v)} key={i}>
      <li>{v}</li>
    </Link>
  ));

  return (
    <div className="nyms">
      <h4>{name}</h4>
      <ul>{JSX}</ul>
    </div>
  );
};

export default MeaningsNyms;
