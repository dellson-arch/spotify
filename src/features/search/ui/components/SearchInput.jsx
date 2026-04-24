import React from 'react';
import { useSearch } from '../../hooks/useSearch';
import SongsContainer from './SongsContainer';
import { Search, X } from 'lucide-react'; // Clearer UI with icons

const SearchInput = ({ ...props }) => {//isme pura ka pura ek object aayega and wo neeche ...rest idhar ja ke spread ho jayega 
  const { handleSearch, searchValue, SearchedSong } = useSearch();

  return (
    <div className="relative w-full max-w-[400px]">
      {/* Search Bar Wrapper */}
      <div className="relative flex items-center group">
        <Search 
          className="absolute left-4 text-zinc-400 group-focus-within:text-white transition-colors" 
          size={20} 
        />
        <input
          onChange={handleSearch}
          value={searchValue}
          className="w-full bg-[#242424] hover:bg-[#2a2a2a] border border-transparent focus:border-[#727272] focus:bg-[#2a2a2a] text-white rounded-full py-3 pl-12 pr-4 outline-none transition-all text-sm placeholder:text-zinc-500"
          placeholder="What do you want to play?"
          {...props}
        />
      </div>


      {/* Results Overlay */}
      {searchValue && (
        <div className="fixed inset-0 top-[64px] left-[240px] bottom-[90px] bg-[#121212]/95 backdrop-blur-md z-40 overflow-y-auto custom-scrollbar p-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-2xl font-bold mb-6">Search results for "{searchValue}"</h2>
            
            {/* The actual song display component */}
            <div className="grid grid-cols-1 gap-2">
               <SongsContainer song={SearchedSong} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SearchInput;