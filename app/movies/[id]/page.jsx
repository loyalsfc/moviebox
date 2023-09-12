import { Calender, Home, Logout, Movie, TV } from '@/app/components/icons/icons';
import Logo from '@/app/components/logo';
import NavMenu from '@/app/components/nav-menu';
import { fetchData } from '@/utils/util'
import Image from 'next/image';
import React from 'react'

const fetchMovieDetail = async(movie_id) => {
    const movieDetail = fetchData(`https://api.themoviedb.org/3/movie/${movie_id}`);
    return movieDetail;
}

async function Page({params}) {
    const data = await fetchMovieDetail(params.id);
    console.log(data);

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
            <main className='flex-1 p-9'>
                <div className='relative aspect-[2.66/1] overflow-hidden rounded-[1.25rem]'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        fill
                        alt='Backdrop Image'
                        className='object-cover object-center'
                    />
                    <div>
                        <button c>

                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page