import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavMenu({link, menu, path}) {
    return (
        <li className={menu === "Movies" && "bg-rose-700/10 text-rose-700 relative after:content-[''] after:absolute after:w-1.5 after:h-full after:bg-rose-700 after:top-0 after:right-0 "}>
            <Link className='flex items-center pl-10 pr-4 py-4 gap-4' href={link}>
                <Image
                    src={path}
                    width={25}
                    height={25}
                    alt='Icon'
                    className="object-cover object-center"
                />
                <span className='font-semibold text-sm'>{menu}</span>
            </Link>
        </li>
    )
}

export default NavMenu