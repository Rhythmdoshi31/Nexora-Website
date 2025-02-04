import React from 'react'
import Stripe from './Stripe'
function Stripes() {
    const stripedata = [
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          Num: "48",
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          Num: "2",
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          Num: "11",
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          Num: "48",
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          Num: "2",
        },
        {
            url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            Num: "11",
          },
      ];

  return (
    <div className='flex flex-wrap items-center my-16  w-full'>
        {stripedata.map((elem, index) => (
            <Stripe key={index} data={elem} index={index}/>
        ))}
    </div>
  )
}

export default Stripes