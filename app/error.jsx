'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-full w-full text-center flex flex-col justify-center items-center'>
        <h2 className='text-xl text-semibold mb-4'>Something went wrong!</h2>
        <p>{error?.message}</p>
        <button 
            className='py-2 px-6 rounded-md bg-rose-700 text-white'
            onClick={() => reset()}
        >
            Try again
        </button>
    </div>
  )
}