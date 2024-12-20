import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div>
      <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap">
          <h1 className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold uppercase -mb-10 pt-10 '>we are ochi</h1>
          <h1 className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold uppercase -mb-[7vw] pt-10'>we are ochi</h1>
        </div>
      </div>
    </div>
  )
}

export default Marquee