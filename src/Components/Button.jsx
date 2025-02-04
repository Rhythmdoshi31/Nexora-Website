import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";

function Button({title = "Start a project"}) {   // This is the title that wil be given By Default.
  return (
    <div className='w-38 px-4 py-[6px] bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-md font-light'>{title}</span>
        <MdSubdirectoryArrowRight />
    </div>
  )
}

export default Button