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

       {searchValue ? (
        <SongsContainer song={SearchedSong}/>
       ) : (null)}
    </div>
  )
}

export default SearchInput
