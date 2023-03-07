import React from "react";

interface propsT {
  switch: boolean;
}

const LightMode: React.FC<propsT> = function (props) {
  if (!props.switch) return null;

  return (
    <style>
      {`body {
            background-color: white;
            color: black;
          }`}
    </style>
  );
};

export default LightMode;
