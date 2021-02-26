import React from "react";

import { IoMusicalNote } from "react-icons/io5";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

const Nav = ({ libraryOpen, setLibraryOpen, isDark, setIsDark }) => {
  return (
    <div className="nav">
      <h1>MusicX</h1>
      <div className="nav-action">
        <button
          onClick={() => {
            setLibraryOpen(!libraryOpen);
          }}
        >
          Library
          <IoMusicalNote />
        </button>
        <div
          className="nav-theme-button"
          style={{ margin: "1rem" }}
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          {isDark ? <TiWeatherSunny size={32} /> : <TiWeatherNight size={32} />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
