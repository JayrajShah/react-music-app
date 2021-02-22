import React from "react";

import { IoMusicalNote } from "react-icons/io5";

const Nav = ({ libraryOpen, setLibraryOpen }) => {
  return (
    <div className="nav">
      <h1>MusicX</h1>
      <button
        onClick={() => {
          setLibraryOpen(!libraryOpen);
        }}
      >
        Library
        <IoMusicalNote />
      </button>
    </div>
  );
};

export default Nav;
