import React from 'react'
import { allSongs } from '../../api/SongsApi'
import SongCard from '../components/SongCard'
import '../../../../features/dashboard/ui/style/HomePage.style.css'
// import { axiosInstance } from '../../../../app/config/axiosInstance'

const HomePage = () => {
    
  // let res = axiosInstance.get('https://fakestoreapi.com/productss')
  // res.then((val)=>console.log("from API-->", val))

    let songs = allSongs()
    console.log(songs)

  return (
    <div className='h-full overflow-y-auto no-scrollbar'>
            <div className='grid grid-cols-5 gap-4 pb-20'> 
               
                {songs.map((elem) => (
                    <SongCard song={elem} key={elem.id}/>
                ))}
            </div>
        </div>
  )
}

export default HomePage
