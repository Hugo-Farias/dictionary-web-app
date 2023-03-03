import "./Navbar.scss";
import logo from "../assets/images/logo.svg";
import FontSelector from "./FontSelector";

const Navbar = function () {
  return (
    <div className="navbar">
      <img src={logo} alt="Dictionary logo" />
      <FontSelector /</div>
  );
};

export default Navbar;
