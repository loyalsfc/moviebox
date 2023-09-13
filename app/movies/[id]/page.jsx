import { fetchData } from '@/utils/util'
import Image from 'next/image';
import React from 'react'

const fetchMovieDetail = async(movie_id) => {
    const movieDetail = fetchData(`https://api.themoviedb.org/3/movie/${movie_id}`);
    return movieDetail;
}

async function Page({params}) {
    const data = await fetchMovieDetail(params.id);

    function dateToUTC(date){
        const dateArray = date.split("-").map(Number);
        return Date.UTC(dateArray[0], dateArray[1] - 1, dateArray[2])
    }

    return (
            <>
                <div className='relative aspect-[2.66/1] overflow-hidden rounded-[1.25rem]'>
                    <Image
                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        fill
                        alt='Backdrop Image'
                        className='object-cover object-center'
                    />
                    <div>
                        <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white/[35%] border-[#E8E8E8]/20 grid place-content-center'>
                            <Image 
                                src="/icons/Play.png"
                                height={50}
                                width={50}
                                alt='Play Icon'
                            />
                        </button>
                    </div>
                </div>
                <article className='pt-8'>
                    <div className='flex items-center gap-2 flex-nowrap overflow-scroll'>
                        <h2 className='flex items-center gap-2 text-xl font-semibold text-[#404040] flex-nowrap'>
                            <span data-testid ="movie-title" className=' whitespace-nowrap'>{data?.title}</span>
                            <span className='separator'/>
                            <span data-testid="movie-release-date">{dateToUTC(data?.release_date)}</span>
                            <span className='separator'/>
                            <span className='whitespace-nowrap'>PG-13</span>
                            <span className='separator'/>
                            <span data-testid="movie-runtime" className='whitespace-nowrap'>{data?.runtime} min</span>
                        </h2>
                        {data?.genres.map(item => {
                            return(
                                <span key={item.id} className='grid place-content-center rounded-full border border-[#F8E7EB] py-1 px-4 text-sm font-medium text-[#B91C1C]'>{item.name}</span>
                            )
                        })}

                        <div className='flex gap-3 items-center ml-auto'>
                            <Image  
                                src="/icons/star.png"
                                height={24}
                                width={24}
                                alt='Star'
                            />
                            <span className='text-[#E8E8E8] font-medium text-xl'>{data?.vote_average}</span>
                            <span className='font-medium text-lg block pl-2 border-l-4 text-gray-666 border-l-gray-666'>{data?.vote_count}</span>
                        </div>
                    </div>
                    <div className='flex pt-10 gap-8'>
                        <div className='text-gray-333 flex-1'>
                            <p className='movie-overview leading-normal' data-testid="movie-overview">{data?.overview}</p>
                            <p className='movie-overview'>Director : <span className='text-rose-700'>Joseph Kosinski</span></p>
                            <p className='movie-overview'>Writers :  <span className='text-rose-700'>Jim Cash, Jack Epps Jr,  Peter Craig</span></p>
                            <p className='movie-overview'>Stars: <span className='text-rose-700'>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
                            <div className='flex mt-4'>
                                <button className='text-sm text-white bg-rose-700 px-6 py-4 rounded-[10px]'>Top rated movie #{Math.ceil(data?.popularity)}</button>
                                <p className='border -ml-1.5 flex-1 border-[#C7C7C7] rounded-r-[10px] border-l-0 flex items-center justify-between px-4'>Award 9 nominations
                                    <Image
                                        src="/icons/expand-arrow.png"
                                        height={20}
                                        width={20}
                                        alt='Expand Arrow'
                                    />
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 w-fit'>
                            <button className=' text-white bg-rose-700  movie-button'>
                                <Image
                                    src="/icons/tickets.png"
                                    height={20}
                                    width={20}
                                    alt='Ticket Icon'
                                />
                                See Showtimes
                            </button>
                            <button className='border border-rose-700 bg-rose-700/10 text-gray-333 movie-button'>
                                <Image
                                    src="/icons/list.png"
                                    height={20}
                                    width={20}
                                    alt='List Icon'
                                />
                                More watch options
                            </button>
                            <div className='relative aspect-[1.77/1] rounded-[10px] flex justify-end overflow-hidden mt-4'>
                                <Image
                                    src="/image.png"
                                    fill
                                    alt='Image'
                                    className='-z-10'
                                />
                                <p className='text-[#E8E8E8] px-4 py-2 mt-auto text-xs lg:text-sm rounded-[10px] bg-[#121212]/50 flex items-center gap-4 justify-center w-full z-10'>
                                    <Image
                                        src="/icons/list-2.png"
                                        height={20}
                                        width={20}
                                        alt='List icon'
                                    />
                                    The Best Movies and Shows in September
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </>
    )
}

export default Page