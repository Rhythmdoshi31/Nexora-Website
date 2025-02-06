import React from 'react'

function Footer() {
    const socials =["Instagram" , "Facebook" , "Youtube" , "Twitter"];
    const sitemaps =["Home", "Carrers" , "Work" , "About"];
    const policy =["Privacy Policy","Cookie Policy", "Impressum", "Terms"];
  return (
    <div className='max-w-screen-lg mx-auto flex justify-between py-5 px-2 mt-9 pb-10 lg:flex-row flex-col'>
        <div>
            <h1 className='font-bold text-7xl text-center lg:text-[10vw]'>nexora.</h1>
            <div className='flex flex-row gap-6  text-zinc-500 text-xs justify-center pt-8 lg:justify-end'>
                {policy.map((elem,key)=><h3 key={key} className=''>{elem}</h3>)}
            </div>
        </div>
        <div className='flex gap-2 lg:pt-0 pt-10 lg:mx-0 mx-auto flex-row lg:flex-col text-xs'>
            <h3 className='font-medium pb-3'>Socials</h3>
          {socials.map((elem,key)=><h5 key={key} className='font-medium text-zinc-500'>{elem}</h5>)}
        </div>

        <div className='flex gap-2 lg:pt-0 pt-2 lg:mx-0 mx-auto flex-row lg:flex-col text-xs'>
            <h3 className='font-medium pb-6'>Sitemaps</h3>
          {sitemaps.map((elem,key)=><h5 key={key} className='font-medium text-zinc-500'>{elem}</h5>)}
        </div>

        <div className='lg:w-1/4 text-center pt-5 lg:pt-12 border-zinc-500 border-t-[1px] lg:border-none'>
            <h4 className='lg:text-right lg:font-semibold lg:text-base font-medium text-sm'>Nexora is pioneering digital agency driven by design and empowered by technology.</h4>
        </div>
    </div>
  )
}

export default Footer