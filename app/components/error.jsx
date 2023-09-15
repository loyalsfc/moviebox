'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function ErrorPage() {
    const router = useRouter()
    return (
        <div className="h-full w-full text-center flex flex-col justify-center items-center">
            <h2 className='text-xl text-semibold mb-4'>Something went wrong!</h2>
            <button className='py-2 px-6 rounded-md bg-rose-700 text-white' onClick={() => router.refresh()}>Try again</button>
        </div>
    )
}

export default ErrorPage