import React, { useRef, useState } from "react";
import {
  TiMediaPlay,
  TiChevronLeft,
  TiChevronRight,
  TiMediaPause,
} from "react-icons/ti";
import LoaderSVG from "./LoaderSVG";

const Player = ({
  allSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  isLoading,
  songInfo,
  setSongInfo,
  setAutoplay,
}) => {
  const PLAY_CONTROL_SIZE = 38;

  const getTime = (time) => {
    return (
      "0" +
      Math.floor(time / 60) +
      ":" +
      ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //Handlers

  const playSongHandler = () => {
    if (!isPlaying) audioRef.current.play();
    else audioRef.current.pause();

    setIsPlaying(!isPlaying);
    setAutoplay(false);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: parseFloat(e.target.value) });
  };

  const skipForwardHandler = () => {
    const forIdx = allSongs.findIndex((ele) => ele.id === currentSong.id) + 1;
    setCurrentSong(allSongs[forIdx % allSongs.length]);
    setAutoplay(false);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  const skipBackwardHandler = () => {
    const backIdx =
      allSongs.findIndex((ele) => ele.id === currentSong.id) -
      1 +
      allSongs.length;
    setCurrentSong(allSongs[backIdx % allSongs.length]);
    setAutoplay(false);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`,
          }}
        >
          <input
            type="range"
            min={0}
            max={isNaN(songInfo.duration) ? 0 : songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          {/* <div
            className="animate-track"
            style={{
              transform: `translateX(${songInfo.completionPercentage}%)`,
            }}
          ></div> */}
        </div>
        <p>{getTime(isNaN(songInfo.duration) ? 0 : songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <TiChevronLeft
          className="skip-back"
          size={PLAY_CONTROL_SIZE}
          onClick={skipBackwardHandler}
        />

        {isLoading ? (
          <LoaderSVG />
        ) : isPlaying ? (
          <TiMediaPause
            className="pause"
            size={PLAY_CONTROL_SIZE + 20}
            onClick={playSongHandler}
          />
        ) : (
          <TiMediaPlay
            className="play"
            size={PLAY_CONTROL_SIZE + 20}
            onClick={playSongHandler}
          />
        )}

        <TiChevronRight
          className="skip-forward"
          size={PLAY_CONTROL_SIZE}
          onClick={skipForwardHandler}
        />
      </div>
    </div>
  );
};

export default Player;
