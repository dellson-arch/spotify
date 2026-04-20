import React from 'react'
import { allSongs } from '../../api/SongsApi'
import SongCard from '../components/SongCard'
// import { axiosInstance } from '../../../../app/config/axiosInstance'

const HomePage = () => {
    
  // let res = axiosInstance.get('https://fakestoreapi.com/productss')
  // res.then((val)=>console.log("from API-->", val))

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
