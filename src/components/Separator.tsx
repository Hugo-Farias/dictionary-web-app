import "./Separator.scss";
import React from "react";

interface propsType {
  size: string;
  isHorizontal: boolean;
}

const Separator: React.FC<propsType> = function (props) {
  const { size, isHorizontal } = props;

  const style = {
    height: isHorizontal ? "0.1rem" : size,
    width: !isHorizontal ? "0.1rem" : size,
  };
  return <div className="separator" style={style} />;
};

export default Separator;
