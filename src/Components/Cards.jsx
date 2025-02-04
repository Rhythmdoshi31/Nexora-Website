import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-20 flex gap-2'>
            <Card width={"basis-1/3"} start={false} para={true} dataIndex={0} />
            <Card width={"basis-2/3"} start={true} para={false} dataIndex={1}/>
        </div>
    </div>
  )
}

export default Cards