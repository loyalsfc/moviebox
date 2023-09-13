'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from './icons/icons';
import Image from 'next/image';

function MobileSearch({handleClick}) {
    const [searchValue, setSearchValue] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchValue === "") return;
        const params = new URLSearchParams(searchParams);
        params.set('search', searchValue)
        router.push('/movies'+ "?" + params.toString());
        router.refresh();
    }

    return (
        <div className='h-screen z-50 w-full fixed bg-white top-0 left-0 sm:hidden'>
            <div className='py-2'>
                <form 
                    onSubmit={handleSubmit} 
                    className='flex items-cente rounded w-full overflow-hidden px-2 gap-3'
                >
                    <button type='button' onClick={()=>handleClick(false)}>
                        <Image
                            src="/icons/expand-arrow.png"
                            height={20}
                            width={20}
                            alt="Angle"
                            className='-rotate-[270deg]'
                        />
                    </button>
                    <input 
                        value={searchValue}
                        onChange={(e) =>setSearchValue(e.target.value)}
                        type="text" 
                        placeholder='What do you want to watch'
                        className='bg-transparent focus:outline-none placeholder-gray-666 p-1 flex-1 text-gray-666 border-r border-gray-333/50'
                    />
                    <button className='px-1'>
                        <Search stroke="#666" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MobileSearch