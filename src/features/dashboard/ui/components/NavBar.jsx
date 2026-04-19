import React from 'react'

const NavBar = () => {
  return (
    <div className='h-[10%] px-10 flex justify-between items-center'>
       <h1>Spotify</h1>
       <div className='flex gap-6'>
        <p>Home icon</p>
        <div>Search Bar</div>
       </div>
       <div>Login</div>
    </div>
  )
}

export default NavBar
