import React from 'react'
import Button from './button'

function Product({val, mover, index}) {
  return (
    <div className= {`${val.hover} w-full text-white h-[20rem] lg:py-20 py-6 px-4 lg:px-40`}>
        <div onMouseMove={() => {mover(index)}} className='mx-auto max-w-screen-lg flex items-center justify-between flex-col lg:flex-row border-zinc-600  lg:border-none'>
            <h1 className='text-6xl capitalize font-medium'>{val.name}</h1>
            <div className='dets lg:w-1/3 w-full'>
                <p className='mb-10 font-thin text-center lg:text-justify'>{val.description}</p>
                <div className='flex items-center gap-14 justify-center'>
                    {val.website && <Button title='visit website'/>}
                    {val.case && <Button title='case study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product