import "./MeaningsExample.scss";
import React from "react";

type propsT = { example: string | void };

const MeaningsExample = function ({ example }: propsT) {
  if (!example) return null;

  return <p className="example">{example}</p>;
};

export default MeaningsExample;
