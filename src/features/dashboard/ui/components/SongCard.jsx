import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { useDashboard } from "../../hooks/useDashboard";
import { playNewSong } from "../../../player/state/PlayerSlice";
import { usePlayer } from "../../../player/hooks/usePlayer";
const SongCard = ({ song }) => {
  // Data from your object
  const { title, artist, thumbnail } = song;
  let { togglePlayAndPause, isPlaying, currentPlayingSong } = usePlayer();
  let { dispatch } = useDashboard();

  return (
    <div className="group relative w-48 bg-[#181818] hover:bg-[#282828] p-4 rounded-lg transition-all duration-300 cursor-pointer">
      {/* Thumbnail Container */}
      <div className="relative mb-4 shadow-lg shadow-black/50">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-square object-cover rounded-md"
        />

        {/* Play Button - Hover Triggered */}
        <div className="absolute bottom-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <button
            onClick={() => {
              if (currentPlayingSong?.url === song.url) {
                togglePlayAndPause(); // same song → toggle
              } else {
                dispatch(playNewSong(song)); // new song → play directly
              }
            }}
            className="bg-[#1ed760] p-3 rounded-full shadow-xl hover:scale-105 active:scale-95 text-black"
          >
            {currentPlayingSong?.url === song.url && isPlaying ? (
              <FaPause size={18} />
            ) : (
              <FaPlay size={18} className="ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-1">
        <h3 className="text-white font-bold truncate text-base">{title}</h3>
        <p className="text-[#a7a7a7] text-sm font-medium line-clamp-2 leading-snug">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
