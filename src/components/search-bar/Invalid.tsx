import React from "react";

interface PropsT {
  invalid: boolean | string;
}

const Invalid: React.FC<PropsT> = function ({ invalid }) {
  if (!invalid) return null;

  return <p>{invalid}</p>;
};

export default Invalid;
