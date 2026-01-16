import React from 'react'

function Input({input, setInput}) {
  return (
    <form className='flex flex-col gap-4'>
        <input type="text" className=' border rounded py-1 px-3' placeholder='Type Anything' value={input} onChange={(e)=> setInput(e.target.value)}/>
    </form>
  )
}

export default Input