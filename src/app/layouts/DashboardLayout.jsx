import React from 'react'

import { Group, Panel } from 'react-resizable-panels'
import { Outlet } from 'react-router'
import NavBar from '../../features/dashboard/ui/components/NavBar'
import Player from '../../features/player/ui/components/Player'

const DashboardLayout = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <NavBar/>
      <div className='h-[80%] '>
        <Group className='gap-2'>
            <Panel maxSize={'20%'} minSize={'15%'} className='bg-[#121212] p-5'>Left side</Panel>
            <Panel className='bg-[#121212] p-5'>
                <Outlet/>
            </Panel>
            <Panel maxSize={'20%'} minSize={'15%'} className='bg-[#121212] p-5'>right side</Panel>
        </Group>
      </div>
      <Player/>
    </div>
  )
}

export default DashboardLayout
