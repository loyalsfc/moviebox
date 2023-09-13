import React from 'react'
import Header from './components/header'
import Image from 'next/image'
import { Facebook, Instagram, Play, Twitter, Youtube } from './components/icons/icons'
import MovieCard from './components/movieCard'
import { fetchData } from '../utils/util'
import ErrorPage from './components/error'

const getMovie = async() => {
    const data = await fetchData('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
    return data;
}

async function Page() {
    const moviesList = await getMovie();
    
    return (
        <div className=''>
            <div className='bg-poster relative bg-cover bg-no-repeat bg-center'>
                <div className="max-w-6xl mx-auto px-4">
                    <Header />
                    <div className='pt-20 [100px] pb-28 flex flex-col sm:flex-row items-center justify-between'>
                        <article className='max-w-[404px] flex flex-col gap-4 font-dm-sans text-white'>
                            <h1 className='font-bold text-5xl leading-[116%]'>John Wick 3 : Parabellum</h1>
                            <div className='flex gap-8 items-center'>
                                <div className='flex items-center gap-2.5'>
                                    <Image
                                        src="/icons/tmdb.png"
                                        height={17}
                                        width={35}
                                        alt='TMDB Icon'
                                    />
                                    <span>86.0/100</span>
                                </div>
                                <div className='flex items-center gap-2.5'>
                                    <Image
                                        src="/icons/orange.png"
                                        height={17}
                                        width={16}
                                        alt='Orange Icon'
                                    />
                                    <span>97%</span>
                                </div>
                            </div>
                            <p className='font-bold text-sm'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                            <button className='w-fit bg-rose-700 items-center flex gap-2 py-1.5 px-4 rounded-md font-bold text-sm'>
                                <Play />
                                <span>Watch Trailer</span>
                            </button>
                        </article>
                        <div className='w-fit absolute sm:relative bottom-0 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0'>
                            <ol className='flex items-center sm:flex-col gap-2.5 text-sm text-gray-400 font-bold leading-[14px]'>
                                <li>1</li>
                                <li>2</li>
                                <li className='relative text-base text-white before:hidden before:content-[""] before:w-5 before:h-[3px] before:rounded-md before:bg-white sm:before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-6'>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
            <main className='pt-[70px] pb-28'>
                {moviesList?.success !== false ? (
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className='font-bold mb-11 text-black text-4xl leading-normal'>
                            <span>Top 10 movies</span>
                        </h2>
                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-10 lg:gap-20'>
                            {moviesList?.results.map((item, index) => {
                                if(index >= 10) return;
                                return(
                                    <MovieCard
                                        key={item.id}
                                        id={item.id}
                                        img={item.poster_path}
                                        title={item.title}
                                        year={item.release_date}
                                    />
                                )
                            })}
                        </ul>
                    </div>):(
                        <ErrorPage />
                    )}
            </main>

            <footer className='font-bold px-4 pb-8'>
                <div className='flex items-center justify-center gap-12'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>
                <ul className='flex  items-center justify-center gap-3 sm:gap-12 py-9 text-gray-900 text-sm sm:text-lg'>
                    <li>Conditions of Use</li>
                    <li>Privacy & Policy</li>
                    <li>Press Room</li>
                </ul>
                <p className='text-gray-500 text-center'>© 2021 MovieBox by Adriana Eka Prayudha  </p>
            </footer>
        </div>
    )
}

export default Page