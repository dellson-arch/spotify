import React from 'react'
import { allSongs } from '../../api/SongsApi'
import SongCard from '../components/SongCard'

const HomePage = () => {
    
    let songs = allSongs()
    console.log(songs)

  return (
    <div className='grid grid-cols-5 gap-4'>
      {
        songs.map((elem)=>{
            return <SongCard song={elem} key={elem.id}/>
        })
      }
    </div>
  )
}

export default HomePage
