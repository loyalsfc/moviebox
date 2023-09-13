'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Bars, Search } from './icons/icons'
import Logo from './logo'
import SearchBox from './search'
import MobileSearch from './mobile-search'

function Header() {
    const [showMobileSearch, setShowMobileSearch] = useState(false)
    return (
        <header className='py-[22px]'>
            <div className="max-w-6xl mx-auto flex items-center sm:justify-between">
                <Logo color="text-white" />
                <div className='hidden sm:block w-2/5 lg:w-1/3'>
                    <SearchBox />
                </div>
                <button onClick={()=>setShowMobileSearch(true)} className='ml-auto sm:hidden pr-4'>
                    <Search />
                </button>
                <div className='flex items-center gap-4 md:gap-9'>
                    <Link href="" className='font-dm-sans font-bold left-6 text-white'>Sign in</Link>
                    <button className=' bg-rose-700 h-9 w-9 rounded-full grid place-content-center'>
                        <Bars />
                    </button>
                </div>
            </div>
            {showMobileSearch && <MobileSearch handleClick={setShowMobileSearch} />}
        </header>
    )
}

export default Header