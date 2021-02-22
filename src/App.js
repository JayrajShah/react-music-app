import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import data from "./util";
// import LoaderSVG from "./components/LoaderSVG";

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    completionPercentage: 0,
  });
  const [autoplay, setAutoplay] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  //Handlers
  const songLoadedHandler = () => {
    setIsLoading(false);
  };
  const songLoadStartHandler = () => {
    setIsLoading(true);
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      completionPercentage: animationPercentage,
    });
  };

  const onEndedHandler = (e) => {
    setAutoplay(true);
    // setIsPlaying(false);
    setSongInfo({ currentTime: 0, duration: e.target.currentTime });
    const idx = songs.findIndex((ele) => ele.id === currentSong.id) + 1;
    setCurrentSong(songs[idx % songs.length]);
  };

  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryOpen ? "library-opened" : ""}`}>
      <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Song currentSong={currentSong} />
      <Player
        allSongs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        // currentSong={currentSong}
        audioRef={audioRef}
        isLoading={isLoading}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setAutoplay={setAutoplay}
      />
      <Footer />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        libraryOpen={libraryOpen}
        setAutoplay={setAutoplay}
      />
      <audio
        onLoadStart={songLoadStartHandler}
        onLoadedData={songLoadedHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
        onEnded={onEndedHandler}
        autoPlay={autoplay}
      ></audio>
    </div>
  );
};

export default App;
