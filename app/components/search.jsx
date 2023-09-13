'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search } from './icons/icons';

function SearchBox({backgroundColor}) {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [searchValue, setSearchValue] = useState(searchParams.get('search'));

    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchValue === "") return;
        const params = new URLSearchParams(searchParams);
        params.set('search', searchValue)
        router.push('/movies'+ "?" + params.toString());
        router.refresh();
    }
    return (
        <form 
            onSubmit={handleSubmit} 
            className='flex items-center border border-white rounded w-full overflow-hidden px-2'
            style={{backgroundColor: backgroundColor ? "rgba(190, 18, 60, 0.5)" : "transparent"}}
        >
            <input 
                value={searchValue}
                onChange={(e) =>setSearchValue(e.target.value)}
                type="text" 
                placeholder='What do you want to watch'
                className='bg-transparent focus:outline-none placeholder-white p-1 flex-1 text-white'
            />
            <button>
                <Search />
            </button>
        </form>
    )
}

export default SearchBox