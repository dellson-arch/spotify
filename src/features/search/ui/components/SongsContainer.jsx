import React from 'react'

const SongsContainer = ({song}) => {
  return (
    <div className='h-100 w-100 z-10 absolute overflow-auto p-5 bg-gray-800 flex flex-col gap-2'>
      {
        song.map((elem)=>{
            return <h1 className='text-xl font-semibold'>{elem.title}</h1>
        })
      }
    </div>
  )
}

export default SongsContainer
