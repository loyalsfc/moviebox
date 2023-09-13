'use client'

import MovieCard from '@/app/components/movieCard';
import SearchBox from '@/app/components/search';
import { fetchData } from '@/utils/util';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
} from 'react-query'

function Page() {
    const queryClient = useQueryClient()
    const searchParams = useSearchParams();
    const search = searchParams.get('search');
    const router = useRouter();
    const fetchMovieDetail = async() => {
        const movieDetail = await fetchData(`https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1`);
        return movieDetail;
    }
    const {isLoading, data} = useQuery('search', fetchMovieDetail)
    
    
    const mutation = useMutation(fetchMovieDetail, {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries('search')
        },
    })

    useEffect(()=>{
        mutation.mutate()
        console.log(search)
    },[search])

    if(isLoading){
        return(
            <div className='grid grid-cols-4 gap-4'>
                {new Array(20).fill(null).map((_, index) => {
                    return(
                        <div data-testid="movie-card ">
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
        <div>
            <div className='flex justify-center pb-10'>
                <SearchBox backgroundColor={true}/>
            </div>
            <ul className='grid grid-cols-4 gap-8'>
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
            </ul>
        </div>
    )
}

export default Page