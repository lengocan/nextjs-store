import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

function LoadingContainer() {
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <LoadingProduct />
            <LoadingProduct />
            <LoadingProduct />
        </div>
    )
}
function LoadingProduct() {
    return <Card>
        <CardContent className='p-4'>
            <Skeleton className='h-48 w-full' />
            <Skeleton className='h-48 w-full' />
            <Skeleton className='h-48 w-full' />
        </CardContent>
    </Card>
}
export default LoadingContainer