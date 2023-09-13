import Link from 'next/link'
import React from 'react'
import { Bars } from './icons/icons'
import Logo from './logo'
import SearchBox from './search'

function Header() {
    return (
        <header className='py-[22px]'>
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <Logo color="text-white" />
                <SearchBox />
                <div className='flex items-center gap-9'>
                    <Link href="" className='font-dm-sans font-bold left-6 text-white'>Sign in</Link>
                    <button className=' bg-rose-700 h-9 w-9 rounded-full grid place-content-center'>
                        <Bars />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header