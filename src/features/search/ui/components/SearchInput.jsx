import React from 'react'
import { useSearch } from '../../hooks/useSearch'
import SongsContainer from './SongsContainer'

const SearchInput = ({...props}) => { //isme pura ka pura ek object aayega and wo neeche ...rest idhar ja ke spread ho jayega 
    let {handleSearch,searchValue, SearchedSong} = useSearch()
  return (
    <div className='w-50'>
      <input
       onChange={handleSearch}
       className='w-full border-gray-600 border rounded py-3 px-3' 
       {...props} /> 

    {searchValue && (
    <div className='fixed inset-0 top-[64px] left-[240px] bottom-[90px] bg-[#121212] z-40 overflow-y-auto no-scrollbar'>
        <SongsContainer song={SearchedSong}/>
    </div>
)}
    </div>
  )
}

export default SearchInput
