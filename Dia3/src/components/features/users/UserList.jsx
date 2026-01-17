import React from 'react'
import ProductCard from './ProductCard'

function UserList({filterData}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filterData && filterData.map(user =>(
            <ProductCard user={user} key={user.id}/>
          ))}
    </div>
  )
}

export default UserList