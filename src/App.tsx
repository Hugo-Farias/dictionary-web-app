import "./App.scss";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import DUMMY_DATA from "./data/DUMMY_DATA.json";
import { FontT, selectT } from "./helpers/typeDefinitions";

const App = function () {
  const { currentFont } = useSelector<selectT>((state) => state.fonts) as {
    currentFont: FontT;
  };

  const font = currentFont?.cssValue;

  return (
    <div className="app">
      <Navbar />
      <SearchBar font={font} />
      <MainContent data={DUMMY_DATA[0]} font={font} />
    </div>
  );
};

export default App;
