import "./MeaningsNyms.scss";
import React from "react";

type propsT = {
  list: string[];
  name: string;
};

const MeaningsNyms = function ({ name, list }: propsT) {
  if (list.length < 1) return null;

  const JSX = list.map((v) => (
    <li>
      <a>{v}</a>
    </li>
  ));

  return (
    <>
      <div className="nyms">
        <h4>{name}</h4>
        <ul>{JSX}</ul>
      </div>
    </>
  );
};

export default MeaningsNyms;
