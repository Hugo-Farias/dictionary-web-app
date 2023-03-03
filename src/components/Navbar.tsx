import "./Navbar.scss";
import logo from "../assets/images/logo.svg";
import FontSelector from "./FontSelector";
import Separator from "./Separator";

const Navbar = function () {
  return (
    <div className="navbar">
      <img src={logo} alt="Dictionary logo" />
      <FontSelector />
      <Separator isHorizontal={false} size={"3.2rem"} />
    </div>
  );
};

export default Navbar;
