import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div >
      <div data-scroll data-scroll-section data-scroll-speed=".2"  className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex pr-10 whitespace-nowrap overflow-hidden">
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold uppercase -mb-10 pt-10 '>we are ochi</motion.h1>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold uppercase -mb-[7vw] pt-10'>we are ochi</motion.h1>
          <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration:5}} className='text-[17vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-semibold uppercase -mb-[7vw] pt-10'>we are ochi</motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Marquee