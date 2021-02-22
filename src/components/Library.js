import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  isLoading,
  setIsLoading,
  currentSong,
  libraryOpen,
  setAutoplay,
}) => {
  return (
    <div className={`library ${libraryOpen ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            songs={songs}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setAutoplay={setAutoplay}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
