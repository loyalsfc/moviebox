import React from 'react'
import Header from './components/header'
import Image from 'next/image'
import { Facebook, Instagram, Play, Twitter, Youtube } from './components/icons/icons'
import MovieCard from './components/movieCard'

const getMovie = async() => {
    const options = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzliNDQxZTkwNzhlN2I4MjA4OWEyMzZjYTg4OWI1MyIsInN1YiI6IjYzNTk1YjU3NjY1NDA4MDA3ZTBiZmM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YqiVCbGjdqAOj44XByspw4JqthU67XVUqQq87l2bRwk'
        }
    }
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const data = await res.json()
    return data
}

async function Page() {
    const moviesList = await getMovie();
    console.log(moviesList.results)
    return (
        <div className=''>
            <div className='bg-poster bg-cover bg-no-repeat bg-center'>
                <div className="max-w-6xl mx-auto px-4">
                    <Header />
                    <div className='pt-20 [100px] pb-28 flex items-center justify-between'>
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
                        <div className='w-fit'>
                            <ol className='flex flex-col gap-2.5 text-sm text-gray-400 font-bold leading-[14px]'>
                                <li>1</li>
                                <li>2</li>
                                <li className='relative text-base text-white before:content-[""] before:w-5 before:h-[3px] before:rounded-md before:bg-white before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-6'>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
            <main className='pt-[70px] pb-28'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className='font-bold mb-11 text-black text-4xl leading-normal'>
                        <span>Top 10 movies</span>
                    </h2>
                    <ul className='grid grid-cols-4 gap-20'>
                        {moviesList?.results.map((item, index) => {
                            if(index >= 10) return;
                            return(
                                <MovieCard
                                    key={item.id}
                                    id={item.id}
                                    img={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                    title={item.title}
                                    year={item.release_date}
                                />
                            )
                        })}
                    </ul>
                </div>
            </main>

            <footer className='font-bold px-4 pb-8'>
                <div className='flex items-center justify-center gap-12'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>
                <ul className='flex items-center justify-center gap-12 py-9 text-gray-900 text-lg'>
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