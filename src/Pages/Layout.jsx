import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-full w-full overflow-x-hidden overflow-y-scroll'>
        <Outlet/>
    </div>
  )
}

export default Layout