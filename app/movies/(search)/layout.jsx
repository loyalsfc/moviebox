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
            <div>{children}</div>
        </QueryClientProvider>
    )
}

export default Layout