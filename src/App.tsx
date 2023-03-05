import "./App.scss";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import DUMMY_DATA from "./data/DUMMY_DATA.json";
import { FontT } from "./helpers/typeDefinitions";

interface RootState {
  fonts: { currentFont: FontT };
}

const App = function () {
  const { currentFont } = useSelector<RootState>((state) => state.fonts) as {
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
