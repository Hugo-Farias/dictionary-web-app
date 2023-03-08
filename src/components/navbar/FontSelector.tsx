import "./FontSelector.scss";
import { FontT } from "../../helpers/typeDefinitions";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFontTo } from "../../store/slices/mainSlice";
import fonts from "../../data/fonts.json";
import { getSlice } from "../../helpers/functions";

const FontSelector = function () {
  const { currentFont } = getSlice();
  const dispatch = useDispatch();

  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleToggleClick = () => {
    setIsHidden(!isHidden);
  };

  const handleOptionClick = (option: FontT) => {
    if (option.id === currentFont.id) return;
    setIsHidden(true);
    dispatch(changeFontTo(option));
  };

  const ListRender = fonts.map((value) => {
    return (
      <li
        key={value.id}
        className={value.id === currentFont.id ? "active" : ""}
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
          style={{ fontFamily: currentFont.cssValue }}
        >
          {currentFont.name}
          <img src={arrowDown} alt="Dropdown menu arrow" />
        </span>
        <ul className={isHidden ? "hide" : ""}>{ListRender}</ul>
      </div>
    </div>
  );
};

export default FontSelector;
