'use client'

import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

function Layout({children}) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <div className='md:h-screen h-4/5 w-full'>{children}</div>
        </QueryClientProvider>
    )
}

export default Layout