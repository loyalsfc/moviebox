'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Favorite } from './icons/icons'

function MovieCard({id, img, title, year}) {
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <li data-testid="movie-card" className='relative'>
            <button onClick={()=>setIsFavorite(!isFavorite)} className="h-8 w-8 rounded-full bg-white/50 absolute top-4 right-4 grid place-content-center backdrop-blur-[1px]">
                <Favorite isFavorite={isFavorite} />
            </button>
            <Link className='flex flex-col h-full' href={`/movies/${id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${img}`}
                    width={250}
                    height={370}
                    alt='Banner Image'
                    data-testid = "movie-poster"
                    className='object-cover'
                />
                <div className='flex flex-col gap-3 pt-3 mt-auto'>
                    <p className='text-gray-400 text-xs font-bold'>
                        <span data-testid="movie-release-date">{year}</span>
                    </p>
                    <h5 data-testid="movie-title" className='text-gray-900 text-lg font-bold leading-normal overflow-hidden whitespace-nowrap text-ellipsis'>{title}</h5>
                </div>
            </Link>
        </li>
    )
}

export default MovieCard