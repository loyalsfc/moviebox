'use client'

import React, { useEffect, useRef } from 'react'
import NavMenu from './nav-menu'
import Logo from './logo'
import { Bars } from './icons/icons'

function SideMenu() {
    const menuRef = useRef(null);
    const btnRef = useRef(null)

    const showMenu = () => {
        menuRef.current.classList.replace('-left-full', 'left-0');
    }

    useEffect(()=>{
        const handleClickOutside = (e) => {
            if(!menuRef.current.contains(e.target) && !btnRef.current.contains(e.target)){
                menuRef.current.classList.replace('left-0', '-left-full');
            }
        }

        document.addEventListener('click', handleClickOutside);

        return()=> document.removeEventListener('click', handleClickOutside);
    },[])

    return (
        <>
            <button ref={btnRef} onClick={showMenu} className='bg-rose-700 h-9 w-9 rounded-full grid place-content-center md:hidden'>
                <Bars/>
            </button>
            <aside ref={menuRef} className='w-fit pt-8 h-full border border-black/30 rounded-r-[45px] absolute md:relative -left-full md:left-0 z-10 top-0 transition-all bg-white'>
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
        </>
    )
}

export default SideMenu