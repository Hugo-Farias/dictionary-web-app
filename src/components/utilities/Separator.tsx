import "./Separator.scss";
import React from "react";

interface propsType {
  size: string;
  isHorizontal: boolean;
  opacity?: number;
  margin?: string;
}

const Separator: React.FC<propsType> = function (props) {
  const { size, isHorizontal, opacity, margin } = props;

  const style = {
    height: isHorizontal ? "0.1rem" : size,
    width: !isHorizontal ? "0.1rem" : size,
    opacity: opacity ? opacity : 0.5,
    margin: margin ? margin : 0,
  };
  return <div className="separator" style={style} />;
};

export default Separator;
