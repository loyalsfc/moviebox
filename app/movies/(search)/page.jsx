'use client'

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchData } from '../../../utils/util';
import SearchBox from '../../components/search'
import MovieCard from '../../components/movieCard'
import ErrorPage from '../../components/error';

function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const fetchMovieDetail = async() => {
        const movieDetail = await fetchData(`https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1`);
        return movieDetail;
    }
    const {isLoading, data, refetch} = useQuery('search', fetchMovieDetail)
    
    useEffect(()=>{
        refetch();
    },[search])

    if(isLoading){
        return(
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                {new Array(20).fill(null).map((_, index) => {
                    return(
                        <div data-testid="movie-card " key={index}>
                            <div className='animate-pulse'>
                                <div className='aspect-[1/1.48]  bg-slate-700'/>
                                <div className='flex flex-col gap-3 pt-3'>
                                    <div class="h-2 w-1/2 bg-slate-700 rounded"></div>
                                    <div class="h-4 w-full bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
        )
    }

    return (
        <>{data.success !== false ? (
            <div>
                <div className='flex justify-center pb-10'>
                    <SearchBox backgroundColor={true}/>
                </div>
                {data?.results.length ? <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {data?.results.map((item) => {
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
                </ul>:(
                    <div className='h-full w-full flex items-center justify-center pt-20'>
                        <span className=''>No Result found for &quot;<span className='font-semibold text-center'>{search}</span>&quot;</span>
                    </div>
                )}
            </div>):(
                <ErrorPage />
            )}
        </>
    )
}

export default Page