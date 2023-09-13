import React from 'react'
import Logo from '@/app/components/logo';
import NavMenu from '@/app/components/nav-menu';

function Layout({children}) {
    return (
        <div className='flex h-screen overflow-scroll font-poppins'>
            <aside className='w-fit pt-8 h-full border border-black/30 rounded-r-[45px]'>
                <div className='pl-5 pb-4'>
                    <Logo color="text-[#333333]" />
                </div>
                <ul className='text-[#666]'>
                    <NavMenu link="/" menu="Home" path="/icons/home.png"/>
                    <NavMenu link="" menu="Movies" path="/icons/movie-projector.png" />
                    <NavMenu link="" menu="TV Series" path="/icons/tv-show.png" />
                    <NavMenu link="" menu="Upcoming" path='/icons/calendar.png' />
                    <li className='py-4 px-7'>
                        <div className='border w-[170px] bg-[#F8E7EB66] border-rose-700/70 rounded-[1.25rem] pt-6 pb-4 px-4 flex flex-col gap-[9px]'>
                            <h4 className='font-semibold text-[15px] leading-normal text-gray-333/80 '>Play movie quizes and earn free tickets</h4>
                            <p className='text-sm text-[#666] font-medium'>50k people are playing now</p>
                            <button className='bg-rose-700/20 rounded-[30px] px-4 py-1.5 text-rose-700 text-sm font-medium'>Start playing</button>
                        </div>
                    </li>
                    <NavMenu link="" menu="Logout" path="/icons/logout.png" />
                </ul>

            </aside>
            <main className='flex-1 p-9 h-full overflow-scroll'>
                {children}
            </main>
        </div>
    )
}

export default Layout