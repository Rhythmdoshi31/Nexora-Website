import React from 'react'
import Button from './button'

function Product({val, mover, index}) {
  return (
    <div className= {`${val.hover} w-full py-20 text-white h-[20rem]`}>
        <div onMouseMove={() => {mover(index)}} className='mx-auto max-w-screen-lg flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-medium'>{val.name}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10 font-thin'>{val.description}</p>
                <div className='flex items-center gap-10'>
                    {val.website && <Button />}
                    {val.case && <Button title='case study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product