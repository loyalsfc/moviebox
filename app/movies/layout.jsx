import React from 'react'
import SideMenu from '../components/side-menu';

function Layout({children}) {
    return (
        <div className='flex flex-col md:flex-row h-screen overflow-scroll font-poppins p-4 md:p-0'>
            <SideMenu />
            <main className='flex-1  py-4 md:p-4 lg:p-9 h-full overflow-scroll'>
                {children}
            </main>
        </div>
    )
}

export default Layout