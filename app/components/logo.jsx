import Image from 'next/image'
import React from 'react'

function Logo({color}) {
    return (
        <div className='flex items-center gap-2 md:gap-6'>
            <div className='relative h-8 w-8 md:h-[50px] md:w-[50px]'>
                <Image
                    src="/logo.png"
                    fill
                    alt='Logo'
                />
            </div>
            <span className={`text-lg md:text-2xl ${color} font-bold font-dm-sans`}>MovieBox</span>
        </div>
    )
}

export default Logo