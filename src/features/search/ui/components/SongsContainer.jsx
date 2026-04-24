import { FaPause, FaPlay } from "react-icons/fa";

// import { usePlayer } from "../../../player/hooks/usePlayer";

import { useDispatch } from "react-redux";

import { playNewSong } from "../../../player/state/PlayerSlice";

import { usePlayer } from "../../../player/hooks/usePlayer";

const SongsContainer = ({ song }) => {
  let { isPlaying } = usePlayer();
  let dispatch = useDispatch();

  if (!song || song.length === 0) return null;
  const topResult = song[0];

  return (
   <div className="w-full p-8 bg-gradient-to-b from-[#1f1f1f] to-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          
          {/* Left Side: Top Result - Fixed Width */}
          <div className="w-full lg:w-[400px]">
            <h2 className="text-2xl font-bold text-white mb-4">Top result</h2>
            <div 
              onClick={() => dispatch(playNewSong(topResult))}
              className="bg-[#181818] hover:bg-[#282828] p-5 rounded-xl transition-all duration-300 group cursor-pointer relative shadow-lg border border-white/5"
            >
              <img 
                src={topResult.thumbnail} 
                alt="" 
                className="w-28 h-28 rounded-lg shadow-2xl mb-6 object-cover" 
              />
              <h1 className="text-3xl font-bold text-white mb-2 truncate">{topResult.title}</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-neutral-300 hover:underline">{topResult.artist}</span>
                <span className="bg-[#121212] text-[10px] text-white px-3 py-1 rounded-full uppercase font-bold tracking-widest">Song</span>
              </div>

              {/* Play Button - Centered alignment */}
              <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="bg-[#1ed760] p-4 rounded-full text-black shadow-2xl hover:scale-105 active:scale-95">
                  {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className="ml-1" />}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Songs List - Flexible Width */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">Songs</h2>
            <div className="space-y-1">
              {song.slice(0, 4).map((elem) => (
                <div 
                  key={elem.id} 
                  onClick={() => dispatch(playNewSong(elem))} 
                  className="flex items-center justify-between p-2 hover:bg-white/10 rounded-lg group cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <img src={elem.thumbnail} alt="" className="w-full h-full rounded object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                         <FaPlay size={12} className="text-white" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-semibold truncate max-w-[200px] lg:max-w-[350px]">{elem.title}</span>
                      <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">{elem.artist}</span>
                    </div>
                  </div>
                  <span className="text-neutral-400 text-sm font-mono mr-4">
                    {elem.duration || "3:45"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SongsContainer;
