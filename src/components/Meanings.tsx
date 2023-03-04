import "./Meanings.scss";
import Separator from "./Separator";
import React from "react";

const Meanings = function () {
  return (
    <>
      <div className="noun-container">
        <div className="type-separator-container">
          <h3 className="type">noun</h3>
          <Separator
            isHorizontal={true}
            size={"100%"}
            opacity={0.5}
            margin={"5.4rem 0"}
          />
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
    </>
  );
};

export default Meanings;
