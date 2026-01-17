import React from 'react'

function SkeletonCard() {
  return (
    <div className='bg-gray-200 animate-pulse rounded-xl h-64 w-full'>
        <div className='p-6 space-y-4'>
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-8 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-10 bg-gray-300 rounded w-full mt-auto"></div>
        </div>

    </div>
  )
}

export default SkeletonCard