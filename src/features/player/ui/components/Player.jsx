import React from "react";
import { usePlayer } from "../../hooks/usePlayer";
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";

const Player = () => {
  // Destructuring the new values from your hook
  let {
    togglePlayAndPause,
    handlePrevSong,
    handleNextSong,
    isPlaying,
    displayTime,
    displayDuration,
    progress,
    handleSeek,
  } = usePlayer();

  return (
<div className="fixed bottom-0 left-0 right-0 flex flex-col justify-center items-center h-[15%] bg-[#000000] border-t border-neutral-900 px-4 z-50">
      {/* 1. Control Buttons */}
      <div className="flex justify-center items-center gap-8 mb-2">
        <button
          onClick={() => handlePrevSong()}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <FaStepBackward size={20} />
        </button>

        <button
          onClick={() => togglePlayAndPause()}
          className="bg-green-500 hover:bg-green-600 p-5 rounded-full shadow-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center text-black"
        >
          {isPlaying ? (
            <FaPause size={18} />
          ) : (
            <FaPlay size={18} className="ml-0.5" />
          )}
        </button>

        <button
          onClick={() => handleNextSong()}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <FaStepForward size={20} />
        </button>
      </div>

      {/* 2. Progress Bar Section */}
      <div className="flex items-center gap-3 w-full max-w-xl">
        {/* Current Time Key from Audio Object */}
        <span className="text-[11px] text-neutral-400 min-w-[35px] text-right">
          {displayTime}
        </span>

        {/* Real-time Progress Slider */}
        <div className="group relative flex-1 flex items-center">
          <input
            type="range"
            step="0.1"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="absolute w-full h-1 bg-neutral-600 rounded-full appearance-none cursor-pointer accent-white hover:accent-[#1db954] z-10 opacity-0 group-hover:opacity-100"
          />
          {/* Custom Visual Bar (Spotify Style) */}
          <div className="w-full h-1 bg-neutral-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-white group-hover:bg-[#1db954]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Total Duration Key from Audio Object */}
        <span className="text-[11px] text-neutral-400 min-w-[35px]">
          {displayDuration}
        </span>
      </div>
    </div>
  );
};

export default Player;
