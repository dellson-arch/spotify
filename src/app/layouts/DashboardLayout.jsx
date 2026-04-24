import React from "react";


import { Group, Panel } from 'react-resizable-panels'
import { Outlet } from 'react-router'
import NavBar from '../../features/dashboard/ui/components/NavBar'
import Player from '../../features/player/ui/components/Player'


const DashboardLayout = () => {
  return (
    <div className="h-screen bg-black text-white">
      <NavBar />
      <div className="h-[80%] ">
        <Group className="gap-2">
          <Panel
            maxSize={"20%"}
            minSize={"15%"}
            className="bg-[#121212] p-5 overflow-y-auto no-scrollbar"
          >
           
           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black" />
    
    {/* 2. Top-down shadow to add depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

    <div className="relative z-10 p-5 flex flex-col gap-6">
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-neutral-500 text-xs uppercase tracking-[0.2em]">
                Your Library
            </h2>
            <button className="text-neutral-500 hover:text-white transition-colors p-1">
                <span className="text-2xl leading-none">+</span>
            </button>
        </div>

        {/* Placeholder Card */}
        <div className="mt-2">
            <div className="h-40 w-full bg-gradient-to-b from-[#1a1a1a] to-[#121212] rounded-xl border border-white/[0.05] flex flex-col items-center justify-center p-6 text-center shadow-2xl">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                     <span className="text-neutral-400 text-lg">♪</span>
                </div>
                <p className="text-sm font-bold text-white mb-1">Building your library</p>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                    Liked songs and playlists will appear here in your collection.
                </p>
            </div>
        </div>
    </div>
          </Panel>
          <Panel className="bg-[#121212] p-5 overflow-y-auto no-scrollbar">
            <Outlet />
          </Panel>
          {/* <Panel maxSize={'20%'} minSize={'15%'} className='bg-[#121212] p-5'>right side</Panel> */}
        </Group>
      </div>
      <Player />
    </div>
  );
};

export default DashboardLayout;
