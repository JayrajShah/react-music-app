import React from "react";

const LibrarySong = ({
  song,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  isLoading,
  setIsLoading,
  currentSong,
  setAutoplay,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    setIsLoading(true);
    setAutoplay(false);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          setIsLoading(false);
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      className={`library-song ${currentSong.id === song.id ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
