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

  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <MainContent data={DUMMY_DATA[0]} font={currentFont?.cssValue} />
    </div>
  );
};

export default App;
