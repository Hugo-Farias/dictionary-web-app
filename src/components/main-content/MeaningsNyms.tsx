import "./MeaningsNyms.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { changeWordTo } from "../../store/slices/wordSlice";
import { Link } from "react-router-dom";

type propsT = {
  list: string[];
  name: string;
};

const MeaningsNyms = function ({ name, list }: propsT) {
  if (list.length < 1) return null;

  const dispatch = useDispatch();

  const handleClick = function (e: any) {};

  const JSX = list.map((v, i) => (
    <Link to={v} key={i}>
      <li id={v}>{v}</li>
    </Link>
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
