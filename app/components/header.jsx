import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Bars, Search } from './icons/icons'
import Logo from './logo'

function Header() {
    return (
        <header className='py-[22px]'>
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                <Logo color="text-white" />
                <div className='flex items-center border border-white rounded w-1/3 overflow-hidden px-2'>
                    <input 
                        type="text" 
                        placeholder='What do you want to watch'
                        className='bg-transparent focus:outline-none placeholder-white p-1 flex-1'
                    />
                    <Search />
                </div>
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