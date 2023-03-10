import "./Navbar.scss";
import logo from "../assets/images/logo.svg";
import FontSelector from "./navbar/FontSelector";
import Separator from "./utilities/Separator";
import ThemeSwitch from "./navbar/ThemeSwitch";
import { Link } from "react-router-dom";

const Navbar = function () {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Dictionary logo" />
      </Link>
      <FontSelector />
      <Separator isHorizontal={false} size={"3.2rem"} />
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
