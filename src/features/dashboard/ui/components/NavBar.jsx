//apne ko SearchInput me onChange wagera bhi lagana hai but usko idhar nahi lagana hai kyuki logics hai
import React from 'react'
import SearchInput from '../../../search/ui/components/SearchInput'
import { GoHomeFill } from "react-icons/go"; // Recommendation: use icons for "Home icon"

const NavBar = () => {
  return (
    /* 1. Added border-b to define the edge.
       2. Use w-full to ensure it spans correctly.
    */
   <div className='h-[64px] px-10 flex justify-between items-center bg-black sticky top-0 z-50'>
       
       {/* LEFT SECTION: Logo */}
       <div className='flex items-center'>
         <h1 className='text-white font-bold text-xl tracking-tight cursor-pointer'>Spotify</h1>
       </div>

       {/* CENTER SECTION: Home + Search (Grouped together) */}
       <div className='flex gap-4 items-center flex-1 justify-center max-w-[600px]'>
          <div className="p-3 bg-[#121212] rounded-full cursor-pointer hover:scale-105 transition-all text-white">
            <GoHomeFill size={24} />
          </div>
          
          <div className='flex-1'>
            <SearchInput placeholder="What do you want to play?" type="text"/>
          </div>
       </div>

       {/* RIGHT SECTION: Links & Login */}
       <div className='flex items-center gap-8'>
          <div className='hidden md:flex gap-6 text-sm font-bold text-neutral-400'>
             <span className='hover:text-white cursor-pointer transition-colors'>Premium</span>
             <span className='hover:text-white cursor-pointer transition-colors'>Support</span>
          </div>
          
          <button className='bg-white text-black px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-transform active:scale-95'>
            Log in
          </button>
       </div>
    </div>
  )
}

export default NavBar