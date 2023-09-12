import Image from 'next/image'
import React from 'react'

function Logo({color}) {
    return (
        <div className='flex items-center gap-6'>
            <Image
                src="/logo.png"
                height={50}
                width={50}
                alt='Logo'
            />
            <span className={`text-2xl ${color} font-bold font-dm-sans`}>MovieBox</span>
        </div>
    )
}

export default Logo