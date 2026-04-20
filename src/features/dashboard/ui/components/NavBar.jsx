import React from 'react'
import SearchInput from '../../../search/ui/components/SearchInput'

const NavBar = () => {
  return (
    <div className='h-[10%] px-10 flex justify-between items-center'>
       <h1>Spotify</h1>
       <div className='flex gap-6 items-center'>
        <p>Home icon</p>
        <div>
          
          <SearchInput placeholder="search for a song" type="text"/>

          </div>
       </div>
       <div>Login</div>
    </div>
  )
}

export default NavBar
//apne ko SearchInput me onChange wagera bhi lagana hai but usko idhar nahi lagana hai kyuki logics hai