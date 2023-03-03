import "./MainContent.scss";
import Separator from "./Separator";
import playIcon from "../assets/images/icon-play.svg";
import sourceIcon from "../assets/images/icon-new-window.svg";

const MainContent = function () {
  const separator = (
    <Separator
      isHorizontal={true}
      size={"100%"}
      opacity={0.5}
      margin={"5.4rem 0"}
    />
  );

  return (
    <div className="main-content">
      <div className="title-container">
        <div className="title-pronounciation-container">
          <h1 className="title">Keyboard</h1>
          <p className="pronounciation">/'ki:bo:d/</p>
        </div>
        <a>
          <img
            src={playIcon}
            alt="Play Pronounciation"
            className="play-audio"
          />
        </a>
      </div>

      <div className="noun-container">
        <div className="type-separator-container">
          <h3 className="type">noun</h3>
          {separator}
        </div>

        <div className="content">
          <h4 className="meaning">Meaning</h4>
          <ul>
            <li>
              <p>
                (etc.) A set of keys used to operate a typewriter, computer etc.
              </p>
            </li>
            <li>
              <p>
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </p>
            </li>
            <li>
              <p>
                A device with keys of a musical keyboard, used to control
                electronic sound-producing devices which may be built into or
                separate from the keyboard device.
              </p>
            </li>
          </ul>
        </div>

        <div className="synonyms">
          <h4>Synonyms</h4>
          <ul>
            <li>
              <a>eletronic keyboard</a>
            </li>
            <li>
              <a>eletronic keyboard</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="verb-container">
        <div className="type-separator-container">
          <h3 className="type">Verb</h3>
          {separator}
        </div>
        <div className="content">
          <h4 className="meaning">Meaning</h4>
          <ul>
            <li>
              <p>To type on a computer keyboard.</p>
              <p className="example">
                "Keyboarding in the part of this job I hate the most."
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Separator
        isHorizontal={true}
        size={"100%"}
        opacity={0.5}
        margin={"2rem 0"}
      />
      <div className="source-container">
        <h5>Source</h5> <a>https://en.wiktionary.org/wiki/keyboard</a>{" "}
        <a>
          <img src={sourceIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainContent;
