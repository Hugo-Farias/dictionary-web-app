import "./FontSelector.scss";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

interface fontObj {
  id: number;
  name: string;
  cssValue: string;
}

const fonts = [
  { id: 0, name: "Sans Serif", cssValue: "Inter" },
  { id: 1, name: "Serif", cssValue: "Lora" },
  { id: 2, name: "Mono", cssValue: "Inconsolata" },
];

const FontSelector = function () {
  const [selectedOption, setSelectedOption] = useState<fontObj>(fonts[0]);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleToggleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleOptionClick = (option: fontObj) => {
    if (option.id === selectedOption.id) return;
    setSelectedOption(option);
    setIsHidden(true);
  };

  const ListRender = fonts.map((value) => {
    return (
      <li
        key={value.id}
        className={value.id === selectedOption.id ? "active" : ""}
        onClick={() => handleOptionClick(value)}
      >
        <span style={{ fontFamily: value.cssValue }}>{value.name}</span>
      </li>
    );
  });

  return (
    <div className="font-selector">
      <div className="font-current">
        <span
          onClick={handleToggleClick}
          style={{ fontFamily: selectedOption.cssValue }}
        >
          {selectedOption.name}
          <img src={arrowDown} alt="Dropdown menu arrow" />
        </span>
        <ul className={isHidden ? "hide" : ""}>{ListRender}</ul>
      </div>
    </div>
  );
};

export default FontSelector;
