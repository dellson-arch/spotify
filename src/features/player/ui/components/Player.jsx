import React from 'react'
import { usePlayer } from '../../hooks/usePlayer'
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const Player = () => {
    let {togglePlayAndPause,handlePrevSong,handleNextSong,isPlaying} = usePlayer()
    
  return (
   <div className='flex justify-center items-center h-[10%] gap-8 bg-[#121212] border-t border-neutral-900'>
      <button 
        onClick={() => handlePrevSong()} 
        className='text-neutral-400 hover:text-white transition-colors'
      >
        <FaStepBackward size={24} />
      </button>

      <button 
        onClick={() => togglePlayAndPause()} 
        className='bg-green-500 hover:bg-green-600 p-5 rounded-full shadow-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center text-black'
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className='ml-1' />}
      </button>

      <button 
        onClick={() => handleNextSong()} 
        className='text-neutral-400 hover:text-white transition-colors'
      >
        <FaStepForward size={24} />
      </button>

    </div>
  )
}

export default Player
